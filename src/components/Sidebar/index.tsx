import { CogIcon, LifeBuoyIcon, SearchIcon } from 'lucide-react'
import {
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  SquareStackIcon,
  UsersIcon,
} from 'lucide-react'

import * as Input from '../input'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpaceWidget } from './used-space-widget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <SearchIcon className="size-5 text-zinc-500" />
        </Input.Prefix>

        <Input.Control placeholder="Search..." />
      </Input.Root>

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

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
