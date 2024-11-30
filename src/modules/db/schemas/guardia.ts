import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const guardia = mysqlTable('guardia', {
	id: int().primaryKey().autoincrement(),
	guardia: varchar({ length: 50 }).notNull(),
})
