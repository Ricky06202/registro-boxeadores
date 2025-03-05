import React, { FC } from 'react'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  className?: string
  inputSize?: 'sm' | 'md' | 'lg'
}

export const TextField: FC<TextFieldProps> = ({
  label,
  error,
  className = '',
  inputSize = 'md',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={props.id} className="font-medium text-gray-700">{label}</label>
      <input
        type="text"
        id={props.id}
        className={`block w-full rounded-lg border border-gray-200 bg-white transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 
          ${inputSize === 'sm' ? 'px-3 py-2 text-sm' :
           inputSize === 'md' ? 'px-4 py-2' :
           'px-5 py-3 text-lg'}
          ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  )
}
