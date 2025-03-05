import { X } from "lucide-react"
import type React from "react"

export interface PanelFlotanteProps {
  children: React.ReactNode
  onClose: () => void
  onAccept: () => void
  title?: string
  acceptText?: string
}

export const PanelFlotante: React.FC<PanelFlotanteProps> = ({
  children,
  onClose,
  onAccept,
  title = "Panel Flotante",
  acceptText = "Aceptar",
}) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="relative bg-white rounded-lg p-4 w-full max-w-xl z-30">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-2 rounded-full"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="mt-4 flex items-center justify-evenly">
          <button
            className="transition duration-200 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm mr-2"
            onClick={onAccept}
          >
            {acceptText}
          </button>
          <button
            className="transition duration-200 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

