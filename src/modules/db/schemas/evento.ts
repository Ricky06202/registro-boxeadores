import { date, int, mysqlTable, varchar, boolean } from 'drizzle-orm/mysql-core';
import { lugar } from './lugar';

export const evento = mysqlTable('evento', {
    id: int().primaryKey().autoincrement(),
    nombre: varchar({ length: 100 }),
    fecha: date(),
    lugarId: int('lugar_id').references(() => lugar.id),
    comision: varchar({ length: 100 }),
    promotor: varchar({ length: 100 }),
    matchmaker: varchar({ length: 100 }),
    doctor: varchar({ length: 100 }),
    liveStream: boolean(),
    fotoEvento: varchar({ length: 255 }), // URL de la foto del evento
    resumen: varchar({ length: 255 }),
});