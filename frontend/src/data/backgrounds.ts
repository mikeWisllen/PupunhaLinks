import moonImage from '@/assets/backgrounds/lua.jpg'
import type { BackgroundPreset } from '@/types'

export const CUSTOM_BACKGROUND_ID = 'custom'

/** Foto de fundo com véu escuro no topo e na base, para o texto continuar legível. */
function photo(image: string): string {
  return [
    'linear-gradient(180deg, rgba(8,6,18,0.78) 0%, rgba(8,6,18,0) 24%, rgba(8,6,18,0) 46%, rgba(4,5,14,0.94) 100%)',
    `url(${image}) center top / cover no-repeat`,
  ].join(', ')
}

/** Fundo geométrico: faixa diagonal + canto inferior sobre uma cor base. */
function geometric(base: string, band: string, corner: string): string {
  return [
    `linear-gradient(165deg, transparent 0 18%, ${band} 18.2% 52%, transparent 52.2%)`,
    `linear-gradient(115deg, transparent 0 62%, ${corner} 62.2%)`,
    base,
  ].join(', ')
}

/** Painel preto com faixas de alerta no topo e na base. */
function hazard(stripe: string): string {
  return [
    'linear-gradient(#0A0A0A, #0A0A0A) center / 100% 90% no-repeat',
    `repeating-linear-gradient(135deg, ${stripe} 0 22px, #0A0A0A 22px 44px)`,
  ].join(', ')
}

export const backgroundPresets: BackgroundPreset[] = [
  {
    id: 'lua',
    name: 'Lua',
    css: photo(moonImage),
    textTone: 'light',
    accentColor: '#FF8A1F',
  },
  {
    id: 'roxo-verde',
    name: 'Roxo e verde',
    css: geometric('#1E0B36', '#5B2A86', '#7FE04B'),
    textTone: 'light',
    accentColor: '#9BEF5A',
  },
  {
    id: 'alerta',
    name: 'Alerta',
    css: hazard('#F5A300'),
    textTone: 'light',
    accentColor: '#F5A300',
  },
  {
    id: 'laranja',
    name: 'Laranja',
    css: geometric('#120A05', '#D9551A', '#1F1F1F'),
    textTone: 'light',
    accentColor: '#FF8A1F',
  },
  {
    id: 'vermelho',
    name: 'Vermelho',
    css: geometric('#0A0A0A', '#7A0C0C', '#C1121F'),
    textTone: 'light',
    accentColor: '#FF5A5A',
  },
  {
    id: 'noite',
    name: 'Noite',
    css: geometric('#070B1F', '#16255C', '#3B5BA8'),
    textTone: 'light',
    accentColor: '#8FD3FF',
  },
]

export const DEFAULT_BACKGROUND_ID = backgroundPresets[0].id
