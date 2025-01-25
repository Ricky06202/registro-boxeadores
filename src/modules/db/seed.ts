import { db, connection } from './index'; // Asegúrate de importar tu instancia de base de datos
import { categoria } from './schemas/categoria';
import { genero } from './schemas/genero';
import { guardia } from './schemas/guardia';
import { titulo } from './schemas/titulo';
import { nacionalidad } from './schemas/nacionalidad';
import { pais } from './schemas/pais';
import { provincia } from './schemas/provincia';
import { lugar } from './schemas/lugar';

async function seed() {
    try {
        // Sembrar datos en la tabla categoria
        await db.insert(categoria).values([
            { categoria: 'Peso Mosca' },
            { categoria: 'Peso Gallo' },
            { categoria: 'Peso Pluma' },
            { categoria: 'Peso Ligero' },
            { categoria: 'Peso Welter' },
            { categoria: 'Peso Medio' },
            { categoria: 'Peso Semipesado' },
            { categoria: 'Peso Pesado' },
        ]);

        // Sembrar datos en la tabla genero
        await db.insert(genero).values([
            { genero: 'Masculino' },
            { genero: 'Femenino' },
        ]);

        // Sembrar datos en la tabla guardia
        await db.insert(guardia).values([
            { guardia: 'Orthodox' },
            { guardia: 'Southpaw' },
        ]);

        // Sembrar datos en la tabla titulo
        await db.insert(titulo).values([
            { titulo: 'Campeón Mundial' },
            { titulo: 'Campeón Nacional' },
            { titulo: 'Campeón Regional' },
        ]);

        // Sembrar datos en la tabla nacionalidad
        await db.insert(nacionalidad).values([
            { nacionalidad: 'Panameña' },
            { nacionalidad: 'Costarricense' },
            { nacionalidad: 'Nicaragüense' },
            { nacionalidad: 'Colombiana' },
            { nacionalidad: 'Venezolana' }
        ]);

        // Sembrar datos en la tabla pais
        await db.insert(pais).values([
            { pais: 'Panamá' },
            { pais: 'Costa Rica' },
            { pais: 'Nicaragua' },
            { pais: 'Colombia' },
            { pais: 'Venezuela' }
        ]);

        // Sembrar datos en la tabla provincia
        await db.insert(provincia).values([
            { provincia: 'Chiriquí', paisId: 1 },
            { provincia: 'Bocas del Toro', paisId: 1 },
            { provincia: 'Veraguas', paisId: 1 },
            { provincia: 'Coclé', paisId: 1 },
            { provincia: 'Panamá', paisId: 1 }
        ]);

        // Sembrar datos en la tabla lugar
        await db.insert(lugar).values([
            { ciudad: 'David', provinciaId: 1 },
            { ciudad: 'Boquete', provinciaId: 1 },
            { ciudad: 'Dolega', provinciaId: 1 },
            { ciudad: 'Bugaba', provinciaId: 1 },
            { ciudad: 'Barú', provinciaId: 1 }
        ]);

        console.log('Datos sembrados correctamente.');
    } catch (err: any) {
        console.error('Error general:', err.message);
    }
}

seed()
    .catch(err => console.error('Error al sembrar datos:', err))
    .finally(async () => {
        const conn = await connection;
        await conn.end();
    });
