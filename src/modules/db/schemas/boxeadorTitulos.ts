import { mysqlTable, int } from 'drizzle-orm/mysql-core'
import { boxeador } from './boxeador'
import { titulo } from './titulo'

export const boxeadorTitulos = mysqlTable('boxeador_titulos', {
	id: int().primaryKey().autoincrement(),
	boxeadorId: int('boxeador_id').references(() => boxeador.id),
	tituloId: int('titulo_id').references(() => titulo.id),
})
