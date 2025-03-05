"use client"

import type React from "react"
import { useState, useRef, type ChangeEvent } from "react"
import { X } from "lucide-react"

export interface ImgFieldProps {
  label: string
  id: string
  required?: boolean
  value?: any
  onChange: (file: any) => void
  error?: string
  className?: string
}

export const ImgField: React.FC<ImgFieldProps> = ({ label, id, required = false, value, onChange, error, className = '' }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [localError, setLocalError] = useState<string | null>(null)
  const imageInputRef = useRef<HTMLInputElement | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    // Validar tipo de archivo (solo imágenes)
    if (!file.type.startsWith("image/")) {
      setLocalError("Por favor, seleccione un archivo de imagen (PNG, JPG, JPEG).")
      return
    }

    // Mostrar preview de la imagen
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
      setLocalError(null)
    }
    reader.readAsDataURL(file)

    // Llamar a onChange con el archivo
    onChange(file)
  }

  const handleImageContainerClick = () => {
    imageInputRef.current?.click()
  }

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering the container click
    setImagePreview(null)
    setLocalError(null)
    onChange(null)
    if (imageInputRef.current) {
      imageInputRef.current.value = ""
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div
        className={`h-64 w-full rounded-lg border-2 border-dashed border-gray-300 p-4 flex justify-center items-center cursor-pointer relative transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
          ${localError || error ? 'border-red-500' : ''}`}
        onClick={handleImageContainerClick}
      >
        {imagePreview ? (
          <>
            <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="h-full w-full object-cover rounded-lg" />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-1.5 hover:bg-gray-700 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </>
        ) : (
          <div className="text-gray-600">Haz clic para subir una imagen</div>
        )}
      </div>

      <input value={value} type="file" id={id} ref={imageInputRef} accept="image/*" onChange={handleImageChange} className="hidden" />

      {(localError || error) && <div className="text-red-500 mt-2">{localError || error}</div>}
    </div>
  )
}
