"use client"
import { useState } from "react"

export default function Home() {
  const [imagen, setImagen] = useState<File | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImagen(e.target.files?.[0])
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Subir imagen de un boxeador
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <label 
              htmlFor="imagen" 
              className="flex flex-col items-center px-4 py-6 bg-gray-100 text-blue-400 rounded-lg shadow-lg tracking-wide uppercase border border-blue-200 cursor-pointer hover:bg-gray-200 hover:text-blue-300 transition-colors"
            >
              <svg 
                className="w-8 h-8" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12.81l-6.5 6.5c-.18.16-.39.25-.59.25-.09 0-.18-.02-.27-.08-6.52-6.93-6.88-6.06l-6.5-6.5c-.06-.08-.08-.17-.08-.27.02-.47.36-.81 1.08-1.78l6.5-6.5c.18-.17.39-.18.58-.18.09 0 .18.02.27.08 6.52 6.93 6.88 6.06l6.5 6.5c.06.08.08.17.08.27-.02.21-.14.46-.45.82l-6.5 6.5c-.18.16-.39.25-.59.25-.09 0-.18-.02-.27-.08-6.93-6.52-6.06-6.88l6.5-6.5c.18-.17.39-.18.58-.18.09 0 .18.02.27.08 6.52 6.93 6.88 6.06z"/>
              </svg>
              <span className="mt-2 text-sm">Seleccione una imagen</span>
            </label>

            <input 
              type="file" 
              id="imagen" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden"
            />

            <div className="mt-4">
              {imagen ? (
                <img 
                  src={URL.createObjectURL(imagen)} 
                  alt="Vista previa" 
                  className="w-full h-auto rounded-lg object-cover shadow-md"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg 
                    className="w-32 h-48 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.5 5.477 3 6.253v13C4.5 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.835 5.477 15.301 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.5 18.477 18.301 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
