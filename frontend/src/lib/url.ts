/** Garante que o endereço digitado tenha protocolo; vazio vira `undefined`. */
export function normalizeUrl(url: string): string | undefined {
  const trimmed = url.trim()
  if (!trimmed) return undefined

  return /^(https?:|mailto:|tel:)/i.test(trimmed) ? trimmed : `https://${trimmed}`
}
