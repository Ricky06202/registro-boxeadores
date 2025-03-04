import { BoxeadorGenericCard } from "@shared/types/boxeadoresTypes";

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
