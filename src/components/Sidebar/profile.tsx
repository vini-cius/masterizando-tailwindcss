import { LogOutIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/vini-cius.png"
        className="size-10 rounded-full"
        width={100}
        height={100}
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Vinícius</span>{' '}
        <span className="truncate text-sm text-zinc-500">
          viniciuskt0@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOutIcon className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
