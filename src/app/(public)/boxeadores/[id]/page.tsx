'use client'
import { getBoxeadorById } from '@/modules/boxeadores/services/boxeadoresService'
import { parseBoxeador } from '@/modules/shared/logic/boxeadoresConverter'
import { formatearUbicacion } from '@/modules/shared/logic/formatLocation'
import { BoxeadorData } from '@/modules/shared/types/boxeadoresTypes'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Flag from 'react-world-flags'

export default function Page() {
  const { id } = useParams()
  const [boxeador, setBoxeador] = useState<BoxeadorData | null>(null)
  useEffect(() => {
    getBoxeadorById(parseInt(id as string)).then(({ data }) => {
      setBoxeador(parseBoxeador(data))
    })
  }, [])
  return (
    <div>
      {boxeador && <PersonCard title="Boxeador" person={boxeador.person} />}
      {boxeador && <BoxeadorCardInfo boxeador={boxeador} />}
    </div>
  )
}

function PersonCard({
  title,
  person,
}: {
  title: string
  person: BoxeadorData['person']
}) {
  const fallbackImage =
    'https://placehold.co/150x150/e0e0e0/000000?text=No+Image'
  return (
    <div className=" bg-white rounded-xl shadow-lg overflow-hidden w-full my-6 font-sans">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 rounded-t-xl md:rounded-l-xl md:rounded-t-none"
            src={person.image || fallbackImage}
            alt={`Ladawan ni ${person.name}`}
            // Handle image loading errors
            onError={(e) => {
              e.currentTarget.src = fallbackImage
            }}
          />
        </div>
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <h2 className="block mt-1 text-3xl leading-tight font-extrabold text-gray-900">
            {person.name}
          </h2>
          {person.alias && (
            <p className="mt-2 text-gray-600 text-lg italic">
              {`"${person.alias}"`}
            </p>
          )}
          {person.birthname && (
            <p className="mt-2 text-gray-700 text-sm">
              <span className="font-semibold">Nombre de Nacimiento:</span>{' '}
              {person.birthname}
            </p>
          )}

          <div className="mt-4 border-t border-gray-200 pt-4">
            {person.trainer && (
              <p className="mt-1 text-gray-700 text-sm">
                <span className="font-semibold">Entrenador:</span>{' '}
                {person.trainer.name}
              </p>
            )}
            {person.nationality && (
              <p className="mt-1 text-gray-700 text-sm flex items-center">
                <span className="font-semibold">Nacionalidad:</span>{' '}
                <Flag
                  code={person.nationality.countryCode}
                  className="w-4 h-4 mx-1"
                />{' '}
                {person.nationality.nacionalidad}
              </p>
            )}
            {person.residence && (
              <p className="mt-1 text-gray-700 text-sm">
                <span className="font-semibold">Residencia:</span>{' '}
                {formatearUbicacion(person.residence)}
              </p>
            )}
            {person.birthplace && (
              <p className="mt-1 text-gray-700 text-sm">
                <span className="font-semibold">Lugar de Nacimiento:</span>{' '}
                {formatearUbicacion(person.birthplace)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function BoxeadorCardInfo({ boxeador }: { boxeador: BoxeadorData }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-4 font-sans w-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        Estadísticas y Detalles del Boxeador
      </h3>

      {/* Detalles Físicos Básicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
        {boxeador.alcance && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Alcance:</span>{' '}
            {boxeador.alcance}
          </p>
        )}
        {boxeador.altura && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Altura:</span>{' '}
            {boxeador.altura}
          </p>
        )}
        {boxeador.categoria && boxeador.categoria.categoria && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Categoría:</span>{' '}
            {boxeador.categoria.categoria}
          </p>
        )}
        {boxeador.genero && boxeador.genero.genero && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Género:</span>{' '}
            {boxeador.genero.genero}
          </p>
        )}
        {boxeador.guardia && boxeador.guardia.guardia && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Guardia:</span>{' '}
            {boxeador.guardia.guardia}
          </p>
        )}
      </div>

      {/* Estadísticas de Combate */}
      <h4 className="text-xl font-semibold text-gray-700 mb-3 mt-6 border-b pb-1">
        Estadísticas de Combate
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 mb-4">
        {typeof boxeador.encuentros === 'number' && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Encuentros:</span>{' '}
            {boxeador.encuentros}
          </p>
        )}
        {typeof boxeador.rondas === 'number' && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Rondas:</span>{' '}
            {boxeador.rondas}
          </p>
        )}
        {typeof boxeador.victorias_ko === 'number' && (
          <p className="text-gray-700 text-base text-green-600">
            <span className="font-semibold text-gray-900">Victorias (KO):</span>{' '}
            {boxeador.victorias_ko}
          </p>
        )}
        {typeof boxeador.victorias === 'number' && (
          <p className="text-gray-700 text-base text-green-700">
            <span className="font-semibold text-gray-900">Victorias:</span>{' '}
            {boxeador.victorias}
          </p>
        )}
        {typeof boxeador.empates === 'number' && (
          <p className="text-gray-700 text-base text-yellow-700">
            <span className="font-semibold text-gray-900">Empates:</span>{' '}
            {boxeador.empates}
          </p>
        )}
        {typeof boxeador.derrotas === 'number' && (
          <p className="text-gray-700 text-base text-red-700">
            <span className="font-semibold text-gray-900">Derrotas:</span>{' '}
            {boxeador.derrotas}
          </p>
        )}

        {typeof boxeador.derrotas_ko === 'number' && (
          <p className="text-gray-700 text-base text-red-600">
            <span className="font-semibold text-gray-900">Derrotas (KO):</span>{' '}
            {boxeador.derrotas_ko}
          </p>
        )}
      </div>

      {/* Detalles de Gestión */}
      <h4 className="text-xl font-semibold text-gray-700 mb-3 mt-6 border-b pb-1">
        Gestión
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        {boxeador.promotor && boxeador.promotor.name && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Promotor:</span>{' '}
            {boxeador.promotor.name}
          </p>
        )}
        {boxeador.manager && boxeador.manager.name && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold text-gray-900">Manager:</span>{' '}
            {boxeador.manager.name}
          </p>
        )}
      </div>
    </div>
  )
}
