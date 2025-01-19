import { CogIcon, LifeBuoyIcon, SearchIcon } from 'lucide-react'
import {
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  SquareStackIcon,
  UsersIcon,
} from 'lucide-react'

import { SvgComponent } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <SvgComponent />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <SearchIcon className="size-5 text-zinc-500" />

        <input
          type="text"
          className="border-o flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={HomeIcon} />
        <NavItem title="Dashboard" icon={BarChartIcon} />
        <NavItem title="Projects" icon={SquareStackIcon} />
        <NavItem title="Tasks" icon={CheckSquareIcon} />
        <NavItem title="Reporting" icon={FlagIcon} />
        <NavItem title="Users" icon={UsersIcon} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoyIcon} />
          <NavItem title="Settings" icon={CogIcon} />
        </nav>

        <UsedSpaceWidget />
      </div>
    </aside>
  )
}
