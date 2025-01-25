import { date, float, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { boxeador } from './boxeador'
import { lugar } from './lugar'
import { resultadosEncuentros } from './resultadosEncuentros'

export const encuentro = mysqlTable('encuentro', {
	id: int().primaryKey().autoincrement(),
	fecha: date(),
	boxeador1Id: int('boxeador1_id').references(() => boxeador.id),
	pesoBoxeador1: float('peso_boxeador1'),
	boxeador2Id: int('boxeador2_id').references(() => boxeador.id),
	pesoBoxeador2: float('peso_boxeador2'),
	lugarId: int('lugar_id').references(() => lugar.id),
	nombreLugar: varchar('nombre_lugar', { length: 50 }),
	descripcion: varchar('descripcion', { length: 255 }),
	resultadoId: int('resultado_id').references(() => resultadosEncuentros.id),
	asaltosTotales: int('asaltos_totales'),
	asaltosBoxeados: int('asaltos_boxeados'),
})
