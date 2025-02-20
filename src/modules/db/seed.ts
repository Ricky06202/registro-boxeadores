import { db } from './index'; // Asegúrate de importar tu instancia de base de datos
import { categoria } from './schemas/categoria';
import { genero } from './schemas/genero';
import { guardia } from './schemas/guardia';
import { titulo } from './schemas/titulo';
import { nacionalidad } from './schemas/nacionalidad';
import { pais } from './schemas/pais';
import { provincia } from './schemas/provincia';
import { lugar } from './schemas/lugar';
import { resultadosEncuentros } from './schemas/resultadosEncuentros';
import { eventoEncuentro } from './schemas/eventoEncuentro';
import { evento } from './schemas/evento';
import { encuentro } from './schemas/encuentro';
import { boxeadorTitulos } from './schemas/boxeadorTitulos';
import { boxeador } from './schemas/boxeador';
import { arena } from './schemas/arena';
import { manager } from './schemas/manager';

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
            { titulo: 'Titular' },
            { titulo: 'Contratitular' }
        ]);

        // Sembrar datos en la tabla nacionalidad
        await db.insert(nacionalidad).values([
            { nacionalidad: 'Panameño' , countryCode: 'PAN' },
            { nacionalidad: 'Costarricense' , countryCode: 'CRI' },
            { nacionalidad: 'Nicaragüense' , countryCode: 'NIC' },
            { nacionalidad: 'Colombiano' , countryCode: 'COL' },
            { nacionalidad: 'Venezolano' , countryCode: 'VEN' }
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

        // Sembrar datos en la tabla arena
        await db.insert(arena).values([
            { nombre: 'Arena 1', lugarId: 1, capacidad: 100, direccion: 'Calle 1' },
            { nombre: 'Arena 2', lugarId: 2, capacidad: 200, direccion: 'Calle 2' },
            { nombre: 'Arena 3', lugarId: 3, capacidad: 300, direccion: 'Calle 3' },
            { nombre: 'Arena 4', lugarId: 4, capacidad: 400, direccion: 'Calle 4' },
            { nombre: 'Arena 5', lugarId: 5, capacidad: 500, direccion: 'Calle 5' }
        ]);

        // Sembrar datos en la tabla manager
        await db.insert(manager).values([
            { nombre: 'Manager 1', segundoNombre: 'Juan', apellido: 'Apellido 1', segundoApellido: 'Gonzalez' },
            { nombre: 'Manager 2', segundoNombre: 'Pedro', apellido: 'Apellido 2', segundoApellido: 'Perez' },
            { nombre: 'Manager 3', segundoNombre: 'Ana', apellido: 'Apellido 3', segundoApellido: 'Rodriguez' },
            { nombre: 'Manager 4', segundoNombre: 'Maria', apellido: 'Apellido 4', segundoApellido: 'Garcia' },
            { nombre: 'Manager 5', segundoNombre: 'Carlos', apellido: 'Apellido 5', segundoApellido: 'Sanchez' }
        ]);

        // Sembrar datos en la tabla boxeador
        await db.insert(boxeador).values([
            {nombre: 'Ricardo', segundoNombre: 'Amado', apellido: 'Sanjur', segundoApellido: 'Gomez', alias: 'Ricky', encuentros: 100, rondas: 50, categoriaId: 1, inicioCarrera: new Date('1990-01-01'), finCarrera: new Date('2000-01-01'), generoId: 1, fechaNacimiento: new Date('1970-01-01'), nacionalidadId: 1, guardiaId: 1, altura: 175, alcance: 70, residenciaId: 1, lugarDeNacimientoId: 1, managerId: 1, victorias: 100, derrotas: 50, empates: 25, victoriasKO: 50, derrotasKO: 25 },   
            {nombre: 'Juan', segundoNombre: 'Pablo', apellido: 'Gonzalez', segundoApellido: 'Garcia', alias: 'Juanito', encuentros: 200, rondas: 100, categoriaId: 2, inicioCarrera: new Date('1995-01-01'), finCarrera: new Date('2005-01-01'), generoId: 1, fechaNacimiento: new Date('1975-01-01'), nacionalidadId: 2, guardiaId: 2, altura: 180, alcance: 75, residenciaId: 2, lugarDeNacimientoId: 2, managerId: 2, victorias: 150, derrotas: 50, empates: 50, victoriasKO: 75, derrotasKO: 25 },   
            {nombre: 'Pedro', segundoNombre: 'Andres', apellido: 'Gomez', segundoApellido: 'Rodriguez', alias: 'Pedrito', encuentros: 300, rondas: 150, categoriaId: 3, inicioCarrera: new Date('2000-01-01'), finCarrera: new Date('2010-01-01'), generoId: 1, fechaNacimiento: new Date('1980-01-01'), nacionalidadId: 3, guardiaId: 1, altura: 185, alcance: 80, residenciaId: 3, lugarDeNacimientoId: 3, managerId: 3, victorias: 200, derrotas: 100, empates: 75, victoriasKO: 100, derrotasKO: 50 },   
            {nombre: 'María', segundoNombre: 'Luisa', apellido: 'Garcia', segundoApellido: 'Gonzalez', alias: 'Marilu', encuentros: 400, rondas: 200, categoriaId: 4, inicioCarrera: new Date('2005-01-01'), finCarrera: new Date('2015-01-01'), generoId: 2, fechaNacimiento: new Date('1990-01-01'), nacionalidadId: 4, guardiaId: 2, altura: 170, alcance: 70, residenciaId: 4, lugarDeNacimientoId: 4, managerId: 4, victorias: 250, derrotas: 150, empates: 100, victoriasKO: 125, derrotasKO: 75 },   
            {nombre: 'Ana', segundoNombre: 'Leticia', apellido: 'Rodriguez', segundoApellido: 'Gomez', alias: 'Anita', encuentros: 500, rondas: 250, categoriaId: 5, inicioCarrera: new Date('2010-01-01'), finCarrera: new Date('2020-01-01'), generoId: 2, fechaNacimiento: new Date('1995-01-01'), nacionalidadId: 5, guardiaId: 1, altura: 175, alcance: 75, residenciaId: 5, lugarDeNacimientoId: 5, managerId: 5, victorias: 300, derrotas: 200, empates: 125, victoriasKO: 150, derrotasKO: 100 },   
        ]);
        
        // Sembrar datos en la tabla boxeadorTitulos
        await db.insert(boxeadorTitulos).values([
            { boxeadorId: 1, tituloId: 1 },
            { boxeadorId: 2, tituloId: 2 },
            { boxeadorId: 3, tituloId: 3 },
            { boxeadorId: 4, tituloId: 4 },
            { boxeadorId: 5, tituloId: 5 }
        ]);

        // Sembrar datos en la tabla resultadoEncuentro
        await db.insert(resultadosEncuentros).values([
            { resultado: 'Ganador' },
            { resultado: 'Ganador por KO' },
            { resultado: 'Perdedor' },
            { resultado: 'Perdedor por KO' },
            { resultado: 'Empate' }
        ]);

        // Sembrar datos en la tabla encuentro
        await db.insert(encuentro).values([
            { fecha: new Date(2022, 0, 15), boxeador1Id: 1, boxeador2Id: 2, lugarId: 1, resultadoId: 1, asaltosTotales: 100, asaltosBoxeados: 50 },
            { fecha: new Date(2022, 2, 20), boxeador1Id: 2, boxeador2Id: 1, lugarId: 2, resultadoId: 2, asaltosTotales: 200, asaltosBoxeados: 100 },
            { fecha: new Date(2022, 4, 15), boxeador1Id: 3, boxeador2Id: 4, lugarId: 3, resultadoId: 3, asaltosTotales: 300, asaltosBoxeados: 150 },
            { fecha: new Date(2022, 6, 20), boxeador1Id: 4, boxeador2Id: 3, lugarId: 4, resultadoId: 4, asaltosTotales: 400, asaltosBoxeados: 200 },
            { fecha: new Date(2022, 8, 15), boxeador1Id: 5, boxeador2Id: 1, lugarId: 5, resultadoId: 5, asaltosTotales: 500, asaltosBoxeados: 250 }
        ]);

        // Sembrar datos en la tabla evento
        await db.insert(evento).values([
            { nombre: 'Evento 1', fecha: new Date(2022, 0, 15), lugarId: 1 },
            { nombre: 'Evento 2', fecha: new Date(2022, 2, 20), lugarId: 2 },
            { nombre: 'Evento 3', fecha: new Date(2022, 4, 15), lugarId: 3 },
            { nombre: 'Evento 4', fecha: new Date(2022, 6, 20), lugarId: 4 },
            { nombre: 'Evento 5', fecha: new Date(2022, 8, 15), lugarId: 5 }
        ]);

        // Sembrar datos en la tabla eventoEncuentro
        await db.insert(eventoEncuentro).values([
            { eventoId: 1, encuentroId: 1 },
            { eventoId: 1, encuentroId: 2 },
            { eventoId: 2, encuentroId: 3 },
            { eventoId: 2, encuentroId: 4 },
            { eventoId: 3, encuentroId: 5 }
        ]);

        

       


        console.log('Datos sembrados correctamente.');
    } catch (err: any) {
        console.error('Error general:', err.message);
    }
}

seed().catch(err => console.error('Error al sembrar datos:', err))
    
