import { Check } from 'lucide-react'

import { backgroundPresets, CUSTOM_BACKGROUND_ID } from '@/data/backgrounds'
import type { PageSettings } from '@/types'
import type { PageSettingsActions } from '../hooks/usePageSettings'

interface BackgroundPickerProps {
  settings: PageSettings
  onSelect: PageSettingsActions['selectBackground']
  onCustomColorChange: PageSettingsActions['updateCustomColor']
}

export function BackgroundPicker({ settings, onSelect, onCustomColorChange }: BackgroundPickerProps) {
  const customSelected = settings.backgroundId === CUSTOM_BACKGROUND_ID

  return (
    <div className="space-y-5">
      <ul className="grid grid-cols-3 gap-3">
        {backgroundPresets.map((preset) => {
          const selected = preset.id === settings.backgroundId

          return (
            <li key={preset.id}>
              <button
                type="button"
                onClick={() => onSelect(preset.id)}
                aria-pressed={selected}
                className="w-full text-center"
              >
                <span
                  className={`relative block h-24 border-2 ${selected ? 'border-alert' : 'border-white/15'}`}
                  style={{ background: preset.css }}
                >
                  {selected && (
                    <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center bg-alert text-black">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </span>
                <span
                  className={`mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em] ${selected ? 'text-alert' : 'text-stone-300'}`}
                >
                  {preset.name}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <label
        className={`flex items-center gap-3 border p-3 ${customSelected ? 'border-alert' : 'border-white/15'}`}
      >
        <input
          type="color"
          value={settings.customColor}
          onChange={(event) => {
            onCustomColorChange(event.target.value)
            onSelect(CUSTOM_BACKGROUND_ID)
          }}
          className="h-11 w-11 cursor-pointer border-0 bg-transparent p-0"
        />
        <span className="text-sm text-stone-400">
          <span className="block font-semibold text-stone-100">Cor personalizada</span>
          Escolha qualquer cor para o fundo
        </span>
      </label>
    </div>
  )
}
