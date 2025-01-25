'use client'

import { User } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useClickAway } from 'react-use'
import { createPortal } from 'react-dom'

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useClickAway(menuRef, (e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  })

  const menu = isOpen && mounted ? (
    createPortal(
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom + 8 : 0,
          right: '1.5rem',
          width: '14rem',
          zIndex: 200,
        }}
        className="bg-white rounded-lg shadow-xl divide-y divide-gray-100 transform transition-all duration-200 ease-out"
      >
        {/* Profile section */}
        <div className="px-4 py-3 cursor-default">
          <p className="text-sm text-gray-900">Usuario</p>
          <p className="text-sm font-medium text-gray-900 truncate">
            usuario@ejemplo.com
          </p>
        </div>

        {/* Navigation section */}
        <ul className="py-1">
          <li>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-slate-100 transition-colors duration-200"
            >
              Perfil
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-slate-100 transition-colors duration-200"
            >
              Configuración
            </button>
          </li>
        </ul>

        {/* Sign out section */}
        <div className="py-1">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
          >
            Cerrar sesión
          </button>
        </div>
      </div>,
      document.body
    )
  ) : null

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 transition-colors duration-200 flex items-center justify-center"
        aria-label="Menú de usuario"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <User className="h-5 w-5 text-blue-600 transition-colors duration-200" />
      </button>
      {menu}
    </div>
  )
}
