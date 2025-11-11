'use client'

import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchBar({ placeholder = 'Buscar boxeador por nombre o ID...', value, onChange }: SearchBarProps) {

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <div className="absolute left-3 text-gray-400">
          <SearchIcon className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-72 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  )
}
