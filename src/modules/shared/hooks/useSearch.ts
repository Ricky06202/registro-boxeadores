'use client'

import { useState, useEffect } from 'react'

export interface BoxeadorResult {
  id: string
  nombre: string
  apodo?: string
  categoria: string
  imagen?: string
}

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<BoxeadorResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const searchBoxeadores = async () => {
      if (!query.trim()) {
        setResults([])
        return
      }

      setIsLoading(true)
      try {
        // TODO: Implementar la llamada real a la API
        // Simulación de resultados
        const mockResults: BoxeadorResult[] = [
          {
            id: '1',
            nombre: 'Canelo Álvarez',
            apodo: 'Canelo',
            categoria: 'Peso Medio',
            imagen: '/boxeadores/canelo.jpg'
          },
          {
            id: '2',
            nombre: 'Tyson Fury',
            apodo: 'Gypsy King',
            categoria: 'Peso Pesado',
            imagen: '/boxeadores/fury.jpg'
          },
        ].filter(boxer => 
          boxer.nombre.toLowerCase().includes(query.toLowerCase()) ||
          boxer.apodo?.toLowerCase().includes(query.toLowerCase())
        )

        setResults(mockResults)
      } catch (error) {
        console.error('Error searching boxeadores:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimeout = setTimeout(searchBoxeadores, 300)
    return () => clearTimeout(debounceTimeout)
  }, [query])

  return {
    query,
    setQuery,
    results,
    isLoading
  }
}
