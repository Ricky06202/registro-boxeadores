import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core'

export const pais = mysqlTable('pais', {
	id: int().primaryKey().autoincrement(),
	pais: varchar({ length: 50 }).notNull(),
})
