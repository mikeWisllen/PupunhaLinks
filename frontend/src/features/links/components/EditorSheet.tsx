import { X } from 'lucide-react'

import type { PageSettings } from '@/types'
import type { PageSettingsActions } from '../hooks/usePageSettings'
import { BackgroundPicker } from './BackgroundPicker'
import { LinksEditor } from './LinksEditor'

export type EditorTab = 'links' | 'background'

const TABS: { id: EditorTab; label: string }[] = [
  { id: 'links', label: 'Links' },
  { id: 'background', label: 'Fundo' },
]

interface EditorSheetProps {
  settings: PageSettings
  actions: PageSettingsActions
  tab: EditorTab
  onTabChange: (tab: EditorTab) => void
  onClose: () => void
}

/** Painel inferior de edição: links e fundo da página. */
export function EditorSheet({ settings, actions, tab, onTabChange, onClose }: EditorSheetProps) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-end">
      <button
        type="button"
        aria-label="Fechar edição"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <section
        role="dialog"
        aria-label="Editar página"
        className="sheet-enter relative flex max-h-[82%] flex-col border-t-2 border-alert bg-panel text-stone-100 shadow-2xl"
      >
        <div className="hazard-stripe h-1.5" />

        <header className="flex items-center justify-between px-5 pb-3 pt-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-alert">Editar página</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-10 w-10 items-center justify-center hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div role="tablist" className="mx-5 grid grid-cols-2 border border-white/15">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => onTabChange(id)}
              className={`py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                tab === id ? 'bg-alert text-black' : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {tab === 'links' ? (
            <LinksEditor
              settings={settings}
              onHandleChange={actions.updateHandle}
              onBioChange={actions.updateBio}
              onAvatarChange={actions.updateAvatarUrl}
              onLinkChange={actions.updateLink}
            />
          ) : (
            <BackgroundPicker
              settings={settings}
              onSelect={actions.selectBackground}
              onCustomColorChange={actions.updateCustomColor}
            />
          )}
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-white/15 px-5 py-3">
          <button
            type="button"
            onClick={actions.reset}
            className="px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400 hover:text-stone-100"
          >
            Restaurar padrão
          </button>
          <button
            type="button"
            onClick={onClose}
            className="panel-cut bg-alert px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-black hover:brightness-110"
          >
            Concluir
          </button>
        </footer>
      </section>
    </div>
  )
}
