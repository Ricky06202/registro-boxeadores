import { date, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { genero } from './genero'
import { lugar } from './lugar'
import { manager } from './manager'
import { nacionalidad } from './nacionalidad'
import { guardia } from './guardia'
import { categoria } from './categoria'

export const boxeador = mysqlTable('boxeador', {
	id: int().primaryKey().autoincrement(),
	nombre: varchar({ length: 50 }),
	segundoNombre: varchar('segundo_nombre', { length: 50 }),
	apellido: varchar({ length: 50 }),
	segundoApellido: varchar('segundo_apellido', { length: 50 }),

	alias: varchar({ length: 100 }),

	encuentros: int(),
	rondas: int(),

	categoriaId: int('categoria_id').references(() => categoria.id),

	inicioCarrera: date('inicio_carrera'),
	finCarrera: date('fin_carrera'),

	generoId: int('genero_id').references(() => genero.id),
	fechaNacimiento: date('fecha_nacimiento'),
	nacionalidadId: int('nacionalidad_id').references(() => nacionalidad.id),
	guardiaId: int('guardia_id').references(() => guardia.id),
	altura: int(),
	alcance: int(),
	residenciaId: int().references(() => lugar.id),
	lugarDeNacimientoId: int().references(() => lugar.id),
	managerId: int('manager_id').references(() => manager.id),
	victorias: int(),
	derrotas: int(),
	empates: int(),
	victoriasKO: int('victorias_ko'),
	derrotasKO: int('derrotas_ko'),
})
