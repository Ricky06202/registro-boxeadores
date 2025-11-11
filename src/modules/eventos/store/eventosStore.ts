import { Evento } from '@/modules/shared/types/eventosTypes'
import { create } from 'zustand'
import { getEventos } from '../services/eventosServices'

interface EventosStore {
  eventos: Evento[] | null
  eventosFiltrados: Evento[] | null
  fetchEventos: () => void
  searchEventos: (searchTerm: string) => void
  resetFilter: () => void
}

export const useEventosStore = create<EventosStore>((set, get) => ({
  eventos: null,
  eventosFiltrados: null,
  fetchEventos: () => {
    getEventos().then((data) => set({ eventos: data, eventosFiltrados: data }))
  },
  searchEventos: (searchTerm: string) => {
    const filteredEventos = get().eventos?.filter((evento) => {
      return evento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    })
    set({ eventosFiltrados: filteredEventos })
  },
  resetFilter: () => {
    set({ eventosFiltrados: get().eventos })
  },
}))
