import { Evento } from "../types/eventosTypes";

export const parseEvento = (evento: any): Evento => {
  return {
    id: evento.id,
    nombre: evento.nombre,
    fecha: evento.fecha,
    lugar_id: evento.lugar_id,
    lugar: evento.lugar,
    comision: evento.comision,
    doctor: evento.doctor,
    promotor: evento.promotor,
    matchmaker: evento.matchmaker,
    imagen: evento.imagen,
    liveStream: evento.liveStream,
    resumen: evento.resumen,
  };
};