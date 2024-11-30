import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const genero = mysqlTable('genero', {
	id: int().primaryKey().autoincrement(),
	genero: varchar({ length: 255 }).notNull(),
})
