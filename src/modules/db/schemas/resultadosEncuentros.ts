import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core'

export const resultadosEncuentros = mysqlTable('resultados_encuentros', {
	id: int().primaryKey().autoincrement(),
	resultado: varchar({ length: 10 }).notNull(),
})
