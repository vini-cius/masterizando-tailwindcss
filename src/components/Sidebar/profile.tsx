import { LogOutIcon } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
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

      <button type="button" className="ml-auto rounded p-2 hover:bg-zinc-50">
        <LogOutIcon className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
