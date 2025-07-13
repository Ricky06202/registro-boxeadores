'use client'

import Link from 'next/link'
import { Navigation } from './Navigation'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu'

export function Header() {
  return (
    <>
      {/* Barra superior normal (no sticky) */}
      <div className="w-full bg-white border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            ComiBox
          </Link>
          <UserMenu />
        </div>
      </div>
      
      {/* Barra de navegación sticky */}
      <div className="sticky top-0 z-10 w-full bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/60 shadow-xs">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-32 md:h-16 px-6">
          <Navigation />
        </div>
      </div>
    </>
  )
}
