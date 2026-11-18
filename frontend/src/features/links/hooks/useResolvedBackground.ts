import { backgroundPresets, CUSTOM_BACKGROUND_ID } from '@/data/backgrounds'
import { isLightColor } from '@/lib/color'
import type { BackgroundPreset, PageSettings } from '@/types'

/** Resolve o fundo ativo (preset ou cor personalizada) em um único formato. */
export function useResolvedBackground(settings: PageSettings): BackgroundPreset {
  if (settings.backgroundId === CUSTOM_BACKGROUND_ID) {
    return {
      id: CUSTOM_BACKGROUND_ID,
      name: 'Personalizado',
      css: settings.customColor,
      textTone: isLightColor(settings.customColor) ? 'dark' : 'light',
      accentColor: '#FF8A1F',
    }
  }

  return (
    backgroundPresets.find((preset) => preset.id === settings.backgroundId) ?? backgroundPresets[0]
  )
}
