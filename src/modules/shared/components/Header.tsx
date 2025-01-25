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
      <div className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Navigation />
          <SearchBar onSearch={(query) => console.log('Searching:', query)} />
        </div>
      </div>
    </>
  )
}
