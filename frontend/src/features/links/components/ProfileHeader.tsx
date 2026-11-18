import { UserRound } from 'lucide-react'

import { SocialIcons } from '@/components/ui/SocialIcons'

interface ProfileHeaderProps {
  handle: string
  bio: string
  avatarUrl: string
  accentColor: string
}

export function ProfileHeader({ handle, bio, avatarUrl, accentColor }: ProfileHeaderProps) {
  return (
    <header className="flex flex-1 min-w-0 flex-col items-center gap-2 text-center">
      <div
        className="h-[88px] w-[88px] overflow-hidden rounded-full border-[3px]"
        style={{ borderColor: accentColor }}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="Foto de perfil" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-black/30">
            <UserRound className="h-10 w-10 opacity-50" />
          </div>
        )}
      </div>

      <div>
        <h1 className="title-display truncate text-xl font-bold leading-tight">{handle}</h1>
        {bio && (
          <p className="mt-0.5 text-sm opacity-70">{bio}</p>
        )}
      </div>

      <SocialIcons />
    </header>
  )
}
