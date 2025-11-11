import { Evento } from '@/modules/shared/types/eventosTypes'
import { formatearUbicacion } from '@/modules/shared/logic/formatLocation'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'

interface EventoCardProps {
  evento: Evento
  isAdmin?: boolean
  onClickEditar?: () => void
  onClickEliminar?: () => void
  onClickVerDetalles?: () => void
}

export function EventoCard({
  evento,
  isAdmin = true,
  onClickEditar,
  onClickEliminar,
  onClickVerDetalles,
}: EventoCardProps) {
  const fecha = new Date(evento.fecha).toLocaleDateString('es-PA')
  // Imagen de respaldo si evento.imagen no se proporciona o falla al cargar
  const fallbackImage = 'https://placehold.co/300x180/cccccc/333333?text=Evento'

  return (
    <div className="relative group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl font-sans m-2 w-full sm:w-72 md:w-80 lg:w-96">
        {/* Imagen del Evento */}
        <div className="relative w-full h-48 sm:h-40 md:h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={evento.imagen || fallbackImage}
            alt={`Imagen de ${evento.nombre}`}
            onError={(e) => {
              e.currentTarget.src = fallbackImage
            }}
          />
          {evento.liveStream && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              EN VIVO
            </div>
          )}
        </div>

        {/* Contenido del Evento */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1 truncate">
            {evento.nombre}
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            <span className="font-semibold">Fecha:</span> {fecha}
          </p>

          {/* Detalles clave en un formato compacto */}
          <div className="text-gray-700 text-sm space-y-1">
            {evento.lugar && (
              <p>
                <span className="font-semibold">Lugar:</span>{' '}
                {formatearUbicacion(evento.lugar)}
              </p>
            )}
            {evento.promotor && (
              <p>
                <span className="font-semibold">Promotor:</span>{' '}
                {evento.promotor.name}
              </p>
            )}
            {evento.comision && (
              <p>
                <span className="font-semibold">Comisión:</span>{' '}
                {evento.comision}
              </p>
            )}
            {evento.doctor && (
              <p>
                <span className="font-semibold">Doctor:</span>{' '}
                {evento.doctor.name}
              </p>
            )}
            {evento.matchmaker && (
              <p>
                <span className="font-semibold">Matchmaker:</span>{' '}
                {evento.matchmaker.name}
              </p>
            )}
          </div>

          {evento.resumen && (
            <p className="text-gray-800 text-sm mt-3 border-t pt-3 border-gray-200">
              <span className="font-semibold">Resumen:</span>{' '}
              {evento.resumen.substring(0, 100)}...{' '}
              {/* Truncar para mantenerlo compacto */}
            </p>
          )}
        </div>
      </div>
      {isAdmin && (
        <div className="absolute top-2 right-2 left-2 bottom-2 flex flex-col rounded-lg items-center justify-evenly bg-black/20 opacity-0 group-hover:opacity-100">
          <Button
            variant="contained"
            color="primary"
            onClick={onClickEditar}
            startIcon={<EditIcon />}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={onClickVerDetalles}
            startIcon={<InfoIcon />}
          >
            Ver Detalles
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onClickEliminar}
            startIcon={<DeleteIcon />}
          >
            Eliminar
          </Button>
        </div>
      )}
    </div>
  )
}
