import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const manager = mysqlTable('manager', {
	id: int().primaryKey().autoincrement(),
	nombre: varchar({ length: 50 }),
	segundoNombre: varchar('segundo_nombre', { length: 50 }),
	apellido: varchar({ length: 50 }),
	segundoApellido: varchar('segundo_apellido', { length: 50 }),
})
