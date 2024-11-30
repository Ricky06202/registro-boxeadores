import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const titulo = mysqlTable('titulo', {
	id: int().primaryKey().autoincrement(),
	titulo: varchar({ length: 50 }).notNull(),
})
