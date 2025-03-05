"use client"

import type React from "react"

export interface OptionFieldProps {
  label: string
  id: string
  options: { label: string; id: number ; countryCode?: string }[]
  required?: boolean
  selectedOption?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  error?: string
  className?: string
  inputSize?: 'sm' | 'md' | 'lg'
}

export const OptionField: React.FC<OptionFieldProps> = ({ label, id, options, required = false, onChange, selectedOption, placeholder = "Selecciona una opción", error, className = '', inputSize = 'md' }) => {

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          value={selectedOption}
          onChange={onChange}
          className={`block w-full rounded-lg border border-gray-200 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none
            ${inputSize === 'sm' ? 'px-3 py-2 text-sm' :
             inputSize === 'md' ? 'px-4 py-2' :
             'px-5 py-3 text-lg'}
            ${error ? 'border-red-500' : ''}`}
        >
          <option value="0" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              <div className="flex items-center">
                {option.label}
              </div>
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  )
}
