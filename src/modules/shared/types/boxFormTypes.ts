export interface PersonData {
  nombre: string;
  alias: string;
  birthname: string;
  trainer: number | null;
  imagen?: File;
}

export interface NationalityData {
  nacionalidad: string;
  codigo: string;
}

export interface PlaceData {
  ciudad?: string;
  provincia?: string;
  pais: string;
}

export interface RoleData {
  career_start: Date;
  career_end: Date | null;
  status: boolean;
  company: string | null;
  contact: string | null;
}

export interface BoxeadorData {
  encuentros: number | null;
  rondas: number | null;
  fecha_nacimiento: Date | null;
  categoria: number | string | null;
  genero: number | string | null;
  guardia: number | string | null;
  promotor: number | null;
  manager: number | null;
  altura: number | null;
  alcance: number | null;
  victorias: number | null;
  derrotas: number | null;
  empates: number | null;
  victorias_ko: number | null;
  derrotas_ko: number | null;
}
