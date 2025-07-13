import { lugar, person } from "./boxeadoresTypes";

export interface Evento {
  id: number;
  nombre: string;
  fecha: string;
  lugar_id: number;
  lugar: lugar;
  comision?: string;
  doctor?: person;
  promotor?: person;
  matchmaker?: person;
  imagen?: string;
  liveStream?: string;
  resumen?: string;
}