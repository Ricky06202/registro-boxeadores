import { Evento } from '@/modules/shared/types/eventosTypes'
import { create } from 'zustand'
import { getEventos } from '../services/eventosServices'

interface EventosStore {
  eventos: Evento[] | null
  fetchEventos: () => void
}

export const useEventosStore = create<EventosStore>((set, get) => ({
  eventos: null,
  fetchEventos: () => {
    getEventos().then((data) => set({ eventos: data }))
  },
}))
