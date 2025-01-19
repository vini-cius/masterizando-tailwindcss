import { SearchIcon } from 'lucide-react'

import { SvgComponent } from './logo'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <SvgComponent />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <SearchIcon className="size-5 text-zinc-500" />

        <input
          type="text"
          className="border-o flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
