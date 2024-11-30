import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const categoria = mysqlTable('categoria', {
	id: int().primaryKey().autoincrement(),
	categoria: varchar({ length: 50 }).notNull(),
})
