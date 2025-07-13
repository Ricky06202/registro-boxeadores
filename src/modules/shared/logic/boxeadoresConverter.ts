import { BoxeadorData, BoxeadorGenericCard } from '@/modules/shared/types/boxeadoresTypes'

export function parseBoxeadorGC(boxeador: any): BoxeadorGenericCard {
  return {
    id: boxeador.id,
    categoria: boxeador.categoria.categoria,
    genero: boxeador.genero.genero,
    persona: {
      id: boxeador.person.id,
      nombre: boxeador.person.name,
      alias: boxeador.person.alias,
      imagen: boxeador.person.image,
      nacionalidad: {
        nacionalidad: boxeador.person.nationality.nacionalidad,
        codigo: boxeador.person.nationality.countryCode,
      },
    },
  };
}

export function parseBoxeador(boxeador: any): BoxeadorData {
  return {
    id: boxeador.id,
    encuentros: boxeador.encuentros,
    rondas: boxeador.rondas,
    fecha_nacimiento: boxeador.fecha_nacimiento,
    altura: boxeador.altura,
    alcance: boxeador.alcance,
    victorias: boxeador.victorias,
    derrotas: boxeador.derrotas,
    empates: boxeador.empates,
    victorias_ko: boxeador.victorias_ko,
    derrotas_ko: boxeador.derrotas_ko,
    person: boxeador.person,
    categoria: boxeador.categoria,
    genero: boxeador.genero,
    guardia: boxeador.guardia,
    manager: boxeador.manager,
    promotor: boxeador.promotor,
  };
}
