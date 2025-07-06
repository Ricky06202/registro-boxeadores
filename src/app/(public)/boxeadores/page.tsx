'use client'
import { BoxeadorCard } from '@/modules/boxeadores/components/BoxeadorCard'
import { useEffect } from 'react'
import { NewBoxeadorPanel } from '@/modules/boxeadores/components/NewBoxeadorPanel'
import { useBoxeadoresStore } from '@/modules/boxeadores/store/boxeadoresStore'
import { redirect } from 'next/navigation'
import NuevoBoxeadorButton from '@/modules/boxeadores/components/NuevoBoxeadorButton'

export default function BoxeadoresPage() {
  const boxeadores = useBoxeadoresStore((state) => state.boxeadores)
  const fetchBoxeadores = useBoxeadoresStore((state) => state.fetchBoxeadores)

  useEffect(() => {
    fetchBoxeadores()
  }, [])

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">Boxeadores</h1>
        <div className="">
          <NuevoBoxeadorButton />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
