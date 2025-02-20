import { db } from "@db/index"
import { boxeador } from "@db/schemas/boxeador"
import { categoria } from "@db/schemas/categoria"
import { genero } from "@db/schemas/genero"
import { nacionalidad } from "@db/schemas/nacionalidad"
import { eq } from "drizzle-orm"
export async function GET() {
    const boxeadores = await db.select({
        id: boxeador.id,
        nombre: boxeador.nombre,
        apellido: boxeador.apellido,
        alias: boxeador.alias,
        categoria: categoria.categoria,
        generoId: boxeador.generoId,
        genero: genero.genero,
        nacionalidadId: boxeador.nacionalidadId,
        nacionalidad: nacionalidad.nacionalidad,
        countryCode: nacionalidad.countryCode
        
    }).from(boxeador)
    .innerJoin(categoria, eq(boxeador.categoriaId, categoria.id))
    .innerJoin(genero, eq(boxeador.generoId, genero.id))
    .innerJoin(nacionalidad, eq(boxeador.nacionalidadId, nacionalidad.id))

    return new Response(JSON.stringify(boxeadores))
}