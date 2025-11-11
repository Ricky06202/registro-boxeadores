'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getEventoById } from '@/modules/eventos/services/eventosServices'
import { parseEvento } from '@/modules/shared/logic/parseEvento'
import { Evento } from '@/modules/shared/types/eventosTypes'
import { formatearUbicacion } from '@/modules/shared/logic/formatLocation'

export default function page() {
  const [evento, setEvento] = useState<Evento | null>(null)
  const { id } = useParams()

  useEffect(() => {
    getEventoById(parseInt(id as string)).then((data) => {
      setEvento(parseEvento(data))
    })
  }, [])
  return (
    <div>
      {evento && <EventoInfo evento={evento} />}
    </div>
  )
}

function EventoInfo({ evento }: { evento: Evento }) {
  return (
    <div>
      <h1>{evento.nombre}</h1>
      <p>{evento.fecha}</p>
      <p>{formatearUbicacion(evento.lugar)}</p>
    </div>
  )
}