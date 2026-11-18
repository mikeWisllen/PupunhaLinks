import type { ReactNode } from 'react'

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const SOCIAL_ICONS = [
  {
    label: 'Foto',
    icon: (
      <SocialIcon>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.800" />
        <circle cx="17" cy="7" r="0.600" fill="currentColor" />
      </SocialIcon>
    ),
  },
  {
    label: 'Comunidade',
    icon: (
      <SocialIcon>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="2.800" />
        <path d="M6.500 18.500c1.200-2.400 3.200-3.600 5.500-3.600s4.300 1.200 5.500 3.600" />
      </SocialIcon>
    ),
  },
  {
    label: 'Mensagens',
    icon: (
      <SocialIcon>
        <path d="M4 6.500A2.500 2.500 0 0 1 6.500 4h11A2.500 2.500 0 0 1 20 6.500v7a2.500 2.500 0 0 1-2.500 2.500H11l-4.500 3.500V16A2.500 2.500 0 0 1 4 13.500Z" />
      </SocialIcon>
    ),
  },
]

/** Linha de ícones sociais (genéricos, sem marcas de terceiros). */
export function SocialIcons() {
  return (
    <ul className="-ml-2 flex items-center gap-1">
      {SOCIAL_ICONS.map(({ label, icon }) => (
        <li key={label}>
          <a
            href="#"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
