import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { provincia } from './provincia'

export const lugar = mysqlTable('lugar', {
	id: int().primaryKey().autoincrement(),
	ciudad: varchar({ length: 50 }),
	provinciaId: int('provincia_id').references(() => provincia.id),
})
