export interface BoxeadorGenericCard {
  id: number
  categoria: string
  genero: string
  persona: {
    id: number
    nombre: string
    alias: string
    imagen?: any
    nacionalidad: {
      nacionalidad: string
      codigo: string
    }
  }
}

export interface BoxeadorData {
  id: number
  encuentros: number
  rondas: number
  fecha_nacimiento: string
  altura: number
  alcance: number
  victorias: number
  derrotas: number
  empates: number
  victorias_ko: number
  derrotas_ko: number
  person: person
  categoria: categoria
  genero: genero
  guardia: guardia
  manager: person
  promotor: person
}

export interface person {
  id: number
  image: string
  name: string
  birthname: string
  alias: string
  trainer_id: number
  nationality_id: number
  residence_id: number
  birthplace_id: number
  trainer?: person
  nationality?: nationality
  residence?: lugar
  birthplace?: lugar
}

export interface lugar {
  id: number
  pais_id: number
  provincia_id: number
  ciudad_id: number
  pais?: pais
  provincia?: provincia
  ciudad?: ciudad
}

export interface pais {
  id: number
  nombre: string
}

export interface provincia {
  id: number
  nombre: string
  pais_id: number
  pais?: pais
}

export interface ciudad {
  id: number
  nombre: string
  provincia_id: number
  provincia?: provincia
}

export interface nationality {
  id: number
  pais_id: number
  provincia_id: number
  ciudad_id: number
}

export interface nationality {
  id: number
  nacionalidad: string
  countryCode: string
}

export interface categoria {
  id: number
  categoria: string
}

export interface genero {
  id: number
  genero: string
}

export interface guardia {
  id: number
  guardia: string
}
