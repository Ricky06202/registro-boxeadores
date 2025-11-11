import { create } from 'zustand'
import { BoxeadorGenericCard } from '@/modules/shared/types/boxeadoresTypes'
import { getBoxeadores } from '../services/boxeadoresService'

interface BoxeadoresStore {
  boxeadores: BoxeadorGenericCard[] | null
  boxeadoresFiltrados: BoxeadorGenericCard[] | null
  fetchBoxeadores: () => void
  searchBoxeadores: (searchTerm: string) => void
  resetFilter: () => void
}

export const useBoxeadoresStore = create<BoxeadoresStore>((set, get) => ({
  boxeadores: null,
  boxeadoresFiltrados: null,
  fetchBoxeadores: () => {
    getBoxeadores().then((data) =>
      set({ boxeadores: data, boxeadoresFiltrados: data })
    )
  },
  searchBoxeadores: (searchTerm: string) => {
    const filteredBoxeadores = get().boxeadores?.filter((boxeador) => {
      return boxeador.persona.nombre
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    })
    set({ boxeadoresFiltrados: filteredBoxeadores })
  },
  resetFilter: () => {
    set({ boxeadoresFiltrados: get().boxeadores })
  },
}))
