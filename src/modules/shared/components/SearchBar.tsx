'use client'

import { Search, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { useSearch } from '../hooks/useSearch'
import Link from 'next/link'

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({ placeholder = 'Buscar boxeador por nombre o ID...', onSearch }: SearchBarProps) {
  const { query, setQuery, results, isLoading } = useSearch()
  const [isResultsVisible, setIsResultsVisible] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => {
    setIsResultsVisible(false)
  })

  const handleInputChange = (value: string) => {
    setQuery(value)
    setIsResultsVisible(true)
    onSearch?.(value)
  }

  return (
    <div ref={ref} className="relative">
      <div className="relative flex items-center">
        <div className="absolute left-3 text-gray-400">
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsResultsVisible(true)}
          placeholder={placeholder}
          className="w-72 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Results dropdown */}
      {isResultsVisible && results.length > 0 && (
        <div className="absolute mt-1 w-full bg-white rounded-lg border border-gray-300 shadow-lg max-h-96 overflow-auto z-200">
          {results.map((result) => (
            <Link
              key={result.id}
              href={`/boxeadores/${result.id}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsResultsVisible(false)}
            >
              <div className="flex items-center space-x-3">
                {result.imagen && (
                  <img
                    src={result.imagen}
                    alt={result.nombre}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-medium">{result.nombre}</div>
                  {result.apodo && (
                    <div className="text-sm text-gray-500">{result.apodo}</div>
                  )}
                  <div className="text-sm text-gray-500">{result.categoria}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
