import { Ellipsis } from 'lucide-react'

import { normalizeUrl } from '@/lib/url'
import type { LinkItem } from '@/types'

interface LinkButtonProps {
  link: LinkItem
  index: number
  accentColor: string
  onEdit: () => void
}

export function LinkButton({ link, index, accentColor, onEdit }: LinkButtonProps) {
  const href = normalizeUrl(link.url)

  return (
    <li
      className="panel-cut relative flex min-h-14 items-center border-l-4 bg-black/70 text-white backdrop-blur-sm transition-transform hover:translate-x-1"
      style={{ borderColor: accentColor }}
    >
      <a
        href={href ?? '#'}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        className="flex min-w-0 flex-1 items-center gap-3 py-4 pl-4 pr-14"
      >
        <span className="text-xs font-bold tabular-nums" style={{ color: accentColor }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="truncate text-sm font-semibold uppercase tracking-[0.12em]">
          {link.label || 'Sem título'}
        </span>
      </a>
      <button
        type="button"
        onClick={onEdit}
        aria-label={`Editar ${link.label || 'link'}`}
        className="absolute right-1.5 flex h-11 w-11 items-center justify-center hover:bg-white/10"
        style={{ color: accentColor }}
      >
        <Ellipsis className="h-5 w-5" />
      </button>
    </li>
  )
}
