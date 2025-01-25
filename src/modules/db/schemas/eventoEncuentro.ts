import { int, mysqlTable } from 'drizzle-orm/mysql-core';
import { evento } from './evento';
import { encuentro } from './encuentro';

export const eventoEncuentro = mysqlTable('evento_encuentro', {
    eventoId: int('evento_id').references(() => evento.id),
    encuentroId: int('encuentro_id').references(() => encuentro.id),
});
