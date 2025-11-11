'use client'
import { useEffect, useState } from 'react'
import { useEventosStore } from '@/modules/eventos/store/eventosStore'
import { SearchBar } from '@/modules/shared/components/SearchBar'
import { EventoCard } from '@/modules/eventos/components/EventoCard'
import NuevoEventoButton from '@/modules/eventos/components/NuevoEventoButton'
import { redirect } from 'next/navigation'

export default function EventosPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const fetchEventos = useEventosStore((state) => state.fetchEventos)
  const eventos = useEventosStore((state) => state.eventosFiltrados)
  const searchEventos = useEventosStore((state) => state.searchEventos)
  const resetFilter = useEventosStore((state) => state.resetFilter)
  useEffect(() => {
    fetchEventos()
  }, [])
  useEffect(() => {
    if (searchTerm === '') {
      resetFilter()
    } else {
      searchEventos(searchTerm)
    }
  }, [searchTerm])

  const onClickEditar = (id: number) => {
    console.log(id)
  }

  const onClickEliminar = (id: number) => {
    console.log(id)
  }

  const onClickVerDetalles = (id: number) => {
    redirect(`/eventos/${id}`)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">Eventos</h1>
        <SearchBar
          placeholder="Buscar evento..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <NuevoEventoButton />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {eventos?.map((evento) => (
          <EventoCard
            key={evento.id}
            evento={evento}
            onClickEditar={() => onClickEditar(evento.id)}
            onClickEliminar={() => onClickEliminar(evento.id)}
            onClickVerDetalles={() => onClickVerDetalles(evento.id)}
          />
        ))}
      </div>
    </div>
  )
}
