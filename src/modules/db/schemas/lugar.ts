import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const lugar = mysqlTable('lugar', {
	id: int().primaryKey().autoincrement(),
	ciudad: varchar({ length: 50 }),
	provincia: varchar({ length: 50 }),
	pais: varchar({ length: 50 }),
})
