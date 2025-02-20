import { BoxeadorGenericCard, BoxeadorGenericCardAPI } from "@shared/types/boxeadoresTypes";

export function parseBoxeadorGCAPI(boxeador: BoxeadorGenericCard): BoxeadorGenericCardAPI {
    return {
        id: boxeador.id,
        nombre: boxeador.nombre,
        apellido: boxeador.apellido,
        alias: boxeador.alias,
        categoria: boxeador.categoria,
        generoId: boxeador.genero.id,
        genero: boxeador.genero.genero,
        nacionalidadId: boxeador.nacionalidad.id,
        nacionalidad: boxeador.nacionalidad.nacionalidad,
        countryCode: boxeador.nacionalidad.codigo
    }
}

export function parseBoxeadorGC(boxeador: BoxeadorGenericCardAPI): BoxeadorGenericCard {
    return {
        id: boxeador.id,
        nombre: boxeador.nombre,
        apellido: boxeador.apellido,
        alias: boxeador.alias,
        categoria: boxeador.categoria,
        genero: {
            id: boxeador.generoId,
            genero: boxeador.genero
        },
        nacionalidad: {
            id: boxeador.nacionalidadId,
            nacionalidad: boxeador.nacionalidad,
            codigo: boxeador.countryCode
        }
    }
}