import { NavLink } from 'react-router'

// http://localhost:5173/

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header>
      <nav>
        {navigations.map(nav => (
          <NavLink
            key={nav.to}
            to={nav.to}
            className={({ isActive }) => {
              return isActive ? 'text-red-500' : ''
            }}>
            {nav.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
