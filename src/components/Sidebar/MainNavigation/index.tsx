import {
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  SquareStackIcon,
  UsersIcon,
} from 'lucide-react'

import { NavItem } from './nav-item'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={HomeIcon} />
      <NavItem title="Dashboard" icon={BarChartIcon} />
      <NavItem title="Projects" icon={SquareStackIcon} />
      <NavItem title="Tasks" icon={CheckSquareIcon} />
      <NavItem title="Reporting" icon={FlagIcon} />
      <NavItem title="Users" icon={UsersIcon} />
    </nav>
  )
}
