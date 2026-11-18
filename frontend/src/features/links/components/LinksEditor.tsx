import { useRef } from 'react'
import { Camera, UserRound } from 'lucide-react'

import type { PageSettings } from '@/types'
import type { PageSettingsActions } from '../hooks/usePageSettings'

interface LinksEditorProps {
  settings: PageSettings
  onHandleChange: PageSettingsActions['updateHandle']
  onBioChange: PageSettingsActions['updateBio']
  onAvatarChange: PageSettingsActions['updateAvatarUrl']
  onLinkChange: PageSettingsActions['updateLink']
}

const INPUT_CLASS =
  'w-full border border-white/20 bg-black/50 px-3 py-2.5 text-sm text-stone-100 placeholder:text-stone-500 focus:border-alert focus:outline-none'

const LABEL_CLASS = 'mb-1.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400'

function resizeToDataUrl(file: File): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      const MAX = 400
      const scale = Math.min(MAX / img.width, MAX / img.height, 1)
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(img.width * scale)
      canvas.height = Math.round(img.height * scale)
      canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)
      resolve(canvas.toDataURL('image/jpeg', 0.75))
    }
    img.src = url
  })
}

export function LinksEditor({ settings, onHandleChange, onBioChange, onAvatarChange, onLinkChange }: LinksEditorProps) {
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const dataUrl = await resizeToDataUrl(file)
    onAvatarChange(dataUrl)
    event.target.value = ''
  }

  return (
    <div className="space-y-5">
      {/* Avatar */}
      <div className="flex flex-col items-center gap-2">
        <span className={LABEL_CLASS}>Foto de perfil</span>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          aria-label="Escolher foto de perfil"
          className="group relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/20 hover:border-alert focus:outline-none"
        >
          {settings.avatarUrl ? (
            <img src={settings.avatarUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black/40">
              <UserRound className="h-8 w-8 text-stone-400" />
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <Camera className="h-6 w-6 text-white" />
          </div>
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        {settings.avatarUrl && (
          <button
            type="button"
            onClick={() => onAvatarChange('')}
            className="text-[11px] text-stone-500 hover:text-stone-300"
          >
            Remover foto
          </button>
        )}
      </div>

      {/* Handle */}
      <label className="block">
        <span className={LABEL_CLASS}>Nome da página</span>
        <input
          className={INPUT_CLASS}
          value={settings.handle}
          maxLength={30}
          onChange={(event) => onHandleChange(event.target.value)}
        />
      </label>

      {/* Bio */}
      <label className="block">
        <span className={LABEL_CLASS}>Bio</span>
        <input
          className={INPUT_CLASS}
          value={settings.bio}
          maxLength={60}
          placeholder="ex: Stylist, Designer, Creator..."
          onChange={(event) => onBioChange(event.target.value)}
        />
      </label>

      {/* Links */}
      {settings.links.map((link, index) => (
        <fieldset key={link.id} className="space-y-2">
          <legend className={LABEL_CLASS}>Link {String(index + 1).padStart(2, '0')}</legend>
          <input
            className={INPUT_CLASS}
            aria-label={`Título do link ${index + 1}`}
            placeholder="Título"
            value={link.label}
            maxLength={40}
            onChange={(event) => onLinkChange(link.id, { label: event.target.value })}
          />
          <input
            className={INPUT_CLASS}
            aria-label={`Endereço do link ${index + 1}`}
            placeholder="https://exemplo.com"
            type="url"
            inputMode="url"
            value={link.url}
            onChange={(event) => onLinkChange(link.id, { url: event.target.value })}
          />
        </fieldset>
      ))}
    </div>
  )
}
