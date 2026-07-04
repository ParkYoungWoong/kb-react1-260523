import { NavLink } from 'react-router'

// http://localhost:5173/

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/signin', label: 'Sign In' },
  { to: '/todos', label: 'Todos' }
]

export default function Header() {
  return (
    <header className="border-line bg-surface/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1000px] items-center justify-between gap-4 px-6">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2.5">
          <span className="bg-kb-yellow text-kb-black font-display grid h-9 w-9 place-items-center rounded-[10px] text-[15px] font-bold">
            KB
          </span>
          <span className="font-display text-ink hidden text-[17px] font-bold sm:block">
            스타뱅킹
          </span>
        </NavLink>

        <nav className="flex items-center gap-1">
          {navigations.map(nav => (
            <NavLink
              key={nav.to}
              to={nav.to}
              end={nav.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-[14px] font-medium transition-colors sm:px-3.5 ${
                  isActive
                    ? 'bg-kb-yellow-soft text-ink font-bold'
                    : 'text-ink-2 hover:text-ink hover:bg-line'
                }`
              }>
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
