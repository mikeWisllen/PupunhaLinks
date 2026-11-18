import { useState } from 'react'
import { Ellipsis } from 'lucide-react'

import { Wordmark } from '@/components/brand/Logo'
import { EditorSheet, type EditorTab } from './components/EditorSheet'
import { LinkButton } from './components/LinkButton'
import { ProfileHeader } from './components/ProfileHeader'
import { usePageSettings } from './hooks/usePageSettings'
import { useResolvedBackground } from './hooks/useResolvedBackground'

export function LinksPage() {
  const { settings, ...actions } = usePageSettings()
  const background = useResolvedBackground(settings)

  const [editorOpen, setEditorOpen] = useState(false)
  const [editorTab, setEditorTab] = useState<EditorTab>('links')

  const openEditor = (tab: EditorTab) => {
    setEditorTab(tab)
    setEditorOpen(true)
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#07070B] sm:p-8">
      {/* No desktop a página aparece dentro de uma moldura de celular. */}
      <div
        className={`relative flex min-h-dvh w-full flex-col overflow-hidden sm:h-[780px] sm:min-h-0 sm:w-[390px] sm:rounded-[2.75rem] sm:border-[12px] sm:border-black sm:shadow-2xl sm:ring-1 sm:ring-white/15 ${
          background.textTone === 'light' ? 'text-white' : 'text-stone-900'
        }`}
        style={{ background: background.css }}
      >
        <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-6 pt-6">
          <div className="relative flex flex-1 items-center justify-center">
            <ProfileHeader
              handle={settings.handle}
              bio={settings.bio}
              avatarUrl={settings.avatarUrl}
              accentColor={background.accentColor}
            />
            <button
              type="button"
              onClick={() => openEditor('background')}
              aria-label="Editar página"
              className="absolute right-0 top-0 flex h-10 w-10 shrink-0 items-center justify-center border bg-black/70 backdrop-blur-sm hover:bg-black"
              style={{ borderColor: background.accentColor, color: background.accentColor }}
            >
              <Ellipsis className="h-5 w-5" />
            </button>
          </div>

          <ul className="space-y-3">
            {settings.links.map((link, index) => (
              <LinkButton
                key={link.id}
                link={link}
                index={index}
                accentColor={background.accentColor}
                onEdit={() => openEditor('links')}
              />
            ))}
          </ul>

          <footer className="flex justify-center pt-6 text-white">
            <Wordmark />
          </footer>
        </div>

        {editorOpen && (
          <EditorSheet
            settings={settings}
            actions={actions}
            tab={editorTab}
            onTabChange={setEditorTab}
            onClose={() => setEditorOpen(false)}
          />
        )}
      </div>
    </main>
  )
}
