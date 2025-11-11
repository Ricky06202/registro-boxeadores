'use client'
import { BoxeadorCard } from '@/modules/boxeadores/components/BoxeadorCard'
import { useEffect, useState } from 'react'
import { useBoxeadoresStore } from '@/modules/boxeadores/store/boxeadoresStore'
import { redirect } from 'next/navigation'
import NuevoBoxeadorButton from '@/modules/boxeadores/components/NuevoBoxeadorButton'
import { SearchBar } from '@/modules/shared/components/SearchBar'

export default function BoxeadoresPage() {
  const boxeadores = useBoxeadoresStore((state) => state.boxeadoresFiltrados)
  const fetchBoxeadores = useBoxeadoresStore((state) => state.fetchBoxeadores)
  const searchBoxeadores = useBoxeadoresStore((state) => state.searchBoxeadores)
  const resetFilter = useBoxeadoresStore((state) => state.resetFilter)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchBoxeadores()
  }, [])
  useEffect(() => {
    if (searchTerm === '') {
      resetFilter()
    } else {
      searchBoxeadores(searchTerm)
    }
  }, [searchTerm])

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">Boxeadores</h1>
        <SearchBar placeholder="Buscar boxeador..." value={searchTerm} onChange={setSearchTerm} />
        <NuevoBoxeadorButton />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {boxeadores?.map((boxeador) => (
          <BoxeadorCard
            key={boxeador.id}
            boxeadorId={boxeador.id}
            nombre={boxeador.persona.nombre}
            categoria={boxeador.categoria}
            imagen={boxeador.persona.imagen}
            nacionalidad={boxeador.persona.nacionalidad.nacionalidad}
            countryCode={boxeador.persona.nacionalidad.codigo}
            onClickVerDetalles={() => redirect(`/boxeadores/${boxeador.id}`)}
            onClickEditar={() => redirect(`/boxeadores/edit/${boxeador.id}`)}
            onClickEliminar={() => {}}
          />
        ))}
      </div>
    </>
  )
}
