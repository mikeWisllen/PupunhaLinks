export interface LinkItem {
  id: string
  label: string
  url: string
}

export type TextTone = 'light' | 'dark'

export interface BackgroundPreset {
  id: string
  name: string
  /** Valor CSS aplicado em `background`. */
  css: string
  /** Tom do texto colocado direto sobre o fundo (título e ícones). */
  textTone: TextTone
  /** Cor de destaque dos painéis: bordas, índices e detalhes. */
  accentColor: string
}

export interface PageSettings {
  handle: string
  bio: string
  avatarUrl: string
  links: LinkItem[]
  /** Id de um preset ou `custom` para usar `customColor`. */
  backgroundId: string
  customColor: string
}
