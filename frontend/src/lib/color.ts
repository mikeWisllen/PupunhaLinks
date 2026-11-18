/** Indica se uma cor hexadecimal (#RRGGBB) é clara, para escolher o contraste do texto. */
export function isLightColor(hex: string): boolean {
  const value = hex.replace('#', '')
  if (value.length !== 6) return false

  const [r, g, b] = [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16))
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.6
}
