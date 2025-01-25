import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core'
import { pais } from './pais'

export const provincia = mysqlTable('provincia', {
	id: int().primaryKey().autoincrement(),
	provincia: varchar({ length: 50 }).notNull(),
	paisId: int('pais_id').references(() => pais.id),
})
