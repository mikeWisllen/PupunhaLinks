import { useEffect, useState } from 'react'

import { defaultSettings, LINK_COUNT } from '@/data/defaults'
import type { LinkItem, PageSettings } from '@/types'

const STORAGE_KEY = 'pupunha-links:settings'

function loadSettings(): PageSettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return defaultSettings

    const parsed = JSON.parse(stored) as Partial<PageSettings>
    const links =
      Array.isArray(parsed.links) && parsed.links.length === LINK_COUNT
        ? parsed.links
        : defaultSettings.links

    return { ...defaultSettings, ...parsed, links }
  } catch {
    return defaultSettings
  }
}

function saveSettings(settings: PageSettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch {
    // Armazenamento indisponível: as alterações valem só para esta sessão.
  }
}

/** Estado da página (links, fundo e @) com persistência no navegador. */
export function usePageSettings() {
  const [settings, setSettings] = useState<PageSettings>(loadSettings)

  useEffect(() => {
    saveSettings(settings)
  }, [settings])

  const updateHandle = (handle: string) => setSettings((current) => ({ ...current, handle }))

  const updateBio = (bio: string) => setSettings((current) => ({ ...current, bio }))

  const updateAvatarUrl = (avatarUrl: string) => setSettings((current) => ({ ...current, avatarUrl }))

  const updateLink = (id: string, changes: Partial<Omit<LinkItem, 'id'>>) =>
    setSettings((current) => ({
      ...current,
      links: current.links.map((link) => (link.id === id ? { ...link, ...changes } : link)),
    }))

  const selectBackground = (backgroundId: string) =>
    setSettings((current) => ({ ...current, backgroundId }))

  const updateCustomColor = (customColor: string) =>
    setSettings((current) => ({ ...current, customColor }))

  const reset = () => setSettings(defaultSettings)

  return { settings, updateHandle, updateBio, updateAvatarUrl, updateLink, selectBackground, updateCustomColor, reset }
}

export type PageSettingsActions = Omit<ReturnType<typeof usePageSettings>, 'settings'>
