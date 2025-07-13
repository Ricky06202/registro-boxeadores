'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { name: 'Historia', href: '/' },
  { name: 'Miembros', href: '/miembros' },
  { name: 'Boxeadores', href: '/boxeadores' },
  { name: 'Eventos', href: '/eventos' },
  // { name: 'Campeones', href: '/campeones' },
  // { name: 'Schedule', href: '/schedule' },
  // { name: 'Resultados', href: '/resultados' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center flex-wrap justify-center gap-2">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-blue-100'
            }`}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}
