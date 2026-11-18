import brandIcon from '@/assets/favicon.png'

interface BrandMarkProps {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <img src={brandIcon} alt="" aria-hidden="true" className={className} />
  )
}

/** Assinatura "PupunhaLinks" usada no rodapé da página. */
export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-1.5 text-lg font-semibold tracking-tight">
      <BrandMark className="h-6 w-6" />
      PupunhaLinks
    </span>
  )
}
