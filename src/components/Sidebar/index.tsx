'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { CogIcon, LifeBuoyIcon, MenuIcon, SearchIcon } from 'lucide-react'
import {
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  SquareStackIcon,
  UsersIcon,
} from 'lucide-react'

import { Button } from '../button'
import * as Input from '../input'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpaceWidget } from './used-space-widget'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <MenuIcon className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
