import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { lugar } from './lugar';

export const arena = mysqlTable('arena', {
    id: int().primaryKey().autoincrement(),
    nombre: varchar({ length: 100 }),
    lugarId: int('lugar_id').references(() => lugar.id), // Relación con lugar
    capacidad: int(), // Capacidad de la arena
    direccion: varchar({ length: 255 }), // Dirección de la arena
});
