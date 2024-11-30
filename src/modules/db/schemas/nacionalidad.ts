import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const nacionalidad = mysqlTable('nacionalidad', {
	id: int().primaryKey().autoincrement(),
	nacionalidad: varchar({ length: 255 }).notNull(),
})
