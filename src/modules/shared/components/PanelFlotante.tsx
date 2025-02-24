import { X } from 'lucide-react'
import React from 'react'

export interface PanelFlotanteProps {
    children: React.ReactNode
    onClose: () => void
    onAccept: () => void
    title?: string
    acceptText?: string
}

export const PanelFlotante: React.FC<PanelFlotanteProps> = ({ children, onClose, onAccept, title = 'Panel Flotante', acceptText = 'Aceptar' }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 z-20 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-2 rounded-full" onClick={onClose}>
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-4">
                    {children}
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onAccept}>
                        {acceptText}
                    </button>
                </div>
            </div>
        </div>
    )
}
