import type { PageSettings } from '@/types'
import { DEFAULT_BACKGROUND_ID } from './backgrounds'

/** Quantidade fixa de links da página (igual ao modelo). */
export const LINK_COUNT = 4

export const defaultSettings: PageSettings = {
  handle: '@pupunhalinks',
  bio: '',
  avatarUrl: '',
  links: Array.from({ length: LINK_COUNT }, (_, index) => ({
    id: `link-${index + 1}`,
    label: `Link ${index + 1}`,
    url: '',
  })),
  backgroundId: DEFAULT_BACKGROUND_ID,
  customColor: '#5B2A86',
}
