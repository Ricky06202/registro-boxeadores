import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Sembrar datos en la tabla categoria
    await prisma.categoria.createMany({
      data: [
        { categoria: "Peso Mosca" },
        { categoria: "Peso Gallo" },
        { categoria: "Peso Pluma" },
        { categoria: "Peso Ligero" },
        { categoria: "Peso Welter" },
        { categoria: "Peso Medio" },
        { categoria: "Peso Semipesado" },
        { categoria: "Peso Pesado" },
      ],
    });

    // Sembrar datos en la tabla genero
    await prisma.genero.createMany({
      data: [{ genero: "Masculino" }, { genero: "Femenino" }],
    });

    // Sembrar datos en la tabla guardia
    await prisma.guardia.createMany({
      data: [{ guardia: "Orthodox" }, { guardia: "Southpaw" }],
    });

    // Sembrar datos en la tabla titulo
    await prisma.titulo.createMany({
      data: [
        { titulo: "Campeón Mundial" },
        { titulo: "Campeón Nacional" },
        { titulo: "Campeón Regional" },
        { titulo: "Titular" },
        { titulo: "Contratitular" },
      ],
    });

    // Sembrar datos en la tabla role_types
    await prisma.role_type.createMany({
      data: [
        { role_type: "Boxeador" },
        { role_type: "Manager" },
        { role_type: "Promotor" },
        { role_type: "Doctor" },
        { role_type: "Inspector" },
        { role_type: "Matchmaker" },
        { role_type: "Entrenador" },
        { role_type: "Referí" },
        { role_type: "Juez" },
      ],
    });

    // Sembrar datos en la tabla nacionalidad
    await prisma.nacionalidad.createMany({
      data: [
        { nacionalidad: "Panameño", countryCode: "PAN" },
        { nacionalidad: "Costarricense", countryCode: "CRI" },
        { nacionalidad: "Nicaragüense", countryCode: "NIC" },
        { nacionalidad: "Colombiano", countryCode: "COL" },
        { nacionalidad: "Venezolano", countryCode: "VEN" },
      ],
    });

    // Sembrar datos en la tabla pais
    await prisma.pais.createMany({
      data: [
        { nombre: "Panamá" },
        { nombre: "Colombia" },
        { nombre: "Venezuela" },
        { nombre: "Costa Rica" },
        { nombre: "Nicaragua" },
      ],
    });

    // Sembrar datos en la tabla provincia
    await prisma.provincia.createMany({
      data: [
        { nombre: "Chiriquí", pais_id: 1 },
        { nombre: "Panamá", pais_id: 1 },
        { nombre: "Bocas del Toro", pais_id: 1 },
        { nombre: "Veraguas", pais_id: 1 },
        { nombre: "Coclé", pais_id: 1 },
      ],
    });

    // Sembrar datos en la tabla ciudad
    await prisma.ciudad.createMany({
      data: [
        { nombre: "Boquete", provincia_id: 1 },
        { nombre: "Dolega", provincia_id: 1 },
        { nombre: "Bugaba", provincia_id: 1 },
        { nombre: "Barú", provincia_id: 1 },
        { nombre: "Boqueron", provincia_id: 1 },
      ],
    });

    // Sembrar datos en la tabla lugar
    await prisma.lugar.createMany({
      data: [
        { ciudad_id: 1 },
        { ciudad_id: 2 },
        { ciudad_id: 3 },
        { ciudad_id: 4 },
        { ciudad_id: 5 },
        { provincia_id: 2 },
        { provincia_id: 3 },
        { pais_id: 2 },
        { pais_id: 3 },
      ],
    });

    //Sembrar datos en la tabla person
    await prisma.person.createMany({
      data: [
        {
          name: "Juan",
          birthname: "Juan",
          alias: "Perico",
          nationality_id: 1,
          residence_id: 1,
          birthplace_id: 1,
        },
        {
          name: "Pedro",
          birthname: "Pedro",
          alias: "Pete",
          trainer_id: 1,
          nationality_id: 2,
          residence_id: 2,
          birthplace_id: 2,
        },
        {
          name: "María",
          birthname: "María",
          alias: "Mary",
          trainer_id: 1,
          nationality_id: 3,
          residence_id: 3,
          birthplace_id: 3,
        },
        {
          name: "Luis",
          birthname: "Luis",
          alias: "Lucho",
          trainer_id: 3,
          nationality_id: 4,
          residence_id: 4,
          birthplace_id: 4,
        },
        {
          name: "Ana",
          birthname: "Ana",
          alias: "Anita",
          trainer_id: 4,
          nationality_id: 5,
          residence_id: 5,
          birthplace_id: 5,
        },
      ],
    });

    //Sembrar datos en la tabla role
    await prisma.role.createMany({
      data: [
        {
          person_id: 1,
          role_type_id: 1,
          career_start: new Date(),
          status: true,
          company: "Compañía 1",
          contact: "Contacto 1",
        },
        {
          person_id: 1,
          role_type_id: 2,
          career_start: new Date(),
          status: true,
          company: "Compañía 2",
          contact: "Contacto 2",
        },
        {
          person_id: 1,
          role_type_id: 3,
          career_start: new Date(),
          status: true,
          company: "Compañía 3",
          contact: "Contacto 3",
        },
        {
          person_id: 2,
          role_type_id: 1,
          career_start: new Date(),
          status: false,
          company: "Compañía 4",
          contact: "Contacto 4",
        },
        {
          person_id: 2,
          role_type_id: 2,
          career_start: new Date(),
          status: false,
          company: "Compañía 5",
          contact: "Contacto 5",
        },
        {
          person_id: 3,
          role_type_id: 1,
          career_start: new Date(),
          status: true,
          company: "Compañía 6",
          contact: "Contacto 6",
        },
        {
          person_id: 3,
          role_type_id: 3,
          career_start: new Date(),
          status: true,
          company: "Compañía 7",
          contact: "Contacto 7",
        },
        {
          person_id: 4,
          role_type_id: 2,
          career_start: new Date(),
          status: true,
          company: "Compañía 8",
          contact: "Contacto 8",
        },
        {
          person_id: 4,
          role_type_id: 3,
          career_start: new Date(),
          status: true,
          company: "Compañía 9",
          contact: "Contacto 9",
        },
        {
          person_id: 5,
          role_type_id: 1,
          career_start: new Date(),
          status: true,
          company: "Compañía 10",
          contact: "Contacto 10",
        },
        {
          person_id: 5,
          role_type_id: 2,
          career_start: new Date(),
          status: true,
          company: "Compañía 11",
          contact: "Contacto 11",
        },
      ],
    });

    //Sembrar datos en la tabla boxeador
    await prisma.boxeador.createMany({
      data: [
        {
          person_id: 1,
          encuentros: 10,
          rondas: 5,
          categoria_id: 1,
          genero_id: 1,
          fecha_nacimiento: new Date("1990-01-01"),
          guardia_id: 1,
          altura: 170,
          alcance: 180,
          promotor_id: 4,
          victorias: 5,
          derrotas: 2,
          empates: 3,
          victorias_ko: 2,
          derrotas_ko: 1,
        },
        {
          person_id: 2,
          encuentros: 15,
          rondas: 8,
          categoria_id: 2,
          genero_id: 2,
          fecha_nacimiento: new Date("1995-01-01"),
          guardia_id: 2,
          altura: 180,
          alcance: 190,
          promotor_id: 1,
          victorias: 10,
          derrotas: 5,
          empates: 0,
          victorias_ko: 5,
          derrotas_ko: 2,
        },
        {
          person_id: 3,
          encuentros: 20,
          rondas: 10,
          categoria_id: 3,
          genero_id: 1,
          fecha_nacimiento: new Date("1990-01-01"),
          guardia_id: 1,
          altura: 190,
          alcance: 200,
          manager_id: 5,
          victorias: 15,
          derrotas: 5,
          empates: 0,
          victorias_ko: 10,
          derrotas_ko: 3,
        },
        {
          person_id: 5,
          encuentros: 25,
          rondas: 12,
          categoria_id: 4,
          genero_id: 2,
          fecha_nacimiento: new Date("1995-01-01"),
          guardia_id: 1,
          altura: 200,
          alcance: 210,
          manager_id: 4,
          promotor_id: 3,
          victorias: 20,
          derrotas: 5,
          empates: 0,
          victorias_ko: 15,
          derrotas_ko: 4,
        },
      ],
    });

    //Sembrar datos en la tabla club_gym
    await prisma.club_gym.createMany({
      data: [
        { name: "Knockout Fitness" },
        { name: "Pugilato Panamá" },
        { name: "Rincon de Boxeo" },
        { name: "Boxeo El Dorado" },
        { name: "Boxeo La Piedad" },
      ],
    });

    // Sembrar datos en la tabla club_gym_member
    await prisma.club_gym_member.createMany({
      data: [
        { club_gym_id: 1, person_id: 1 },
        { club_gym_id: 1, person_id: 2 },
        { club_gym_id: 1, person_id: 3 },
        { club_gym_id: 2, person_id: 4 },
        { club_gym_id: 2, person_id: 5 },
      ],
    });

    // Sembrar datos en la tabla arena
    await prisma.arena.createMany({
      data: [
        {
          nombre: "Arena 1",
          lugar_id: 1,
          capacidad: 100,
          direccion: "Calle 1",
        },
        {
          nombre: "Arena 2",
          lugar_id: 2,
          capacidad: 200,
          direccion: "Calle 2",
        },
        {
          nombre: "Arena 3",
          lugar_id: 3,
          capacidad: 300,
          direccion: "Calle 3",
        },
        {
          nombre: "Arena 4",
          lugar_id: 4,
          capacidad: 400,
          direccion: "Calle 4",
        },
        {
          nombre: "Arena 5",
          lugar_id: 5,
          capacidad: 500,
          direccion: "Calle 5",
        },
      ],
    });

    // Sembrar datos en la tabla boxeadorTitulos
    await prisma.boxeador_titulos.createMany({
      data: [
        { boxeador_id: 1, titulo_id: 1 },
        { boxeador_id: 2, titulo_id: 2 },
        { boxeador_id: 3, titulo_id: 3 },
        { boxeador_id: 4, titulo_id: 4 },
        { boxeador_id: 1, titulo_id: 5 },
      ],
    });

    // Sembrar datos en la tabla resultadoEncuentro
    await prisma.resultados_encuentros.createMany({
      data: [
        { resultado: "Ganador" },
        { resultado: "Ganador por KO" },
        { resultado: "Perdedor" },
        { resultado: "Perdedor por KO" },
        { resultado: "Empate" },
      ],
    });

    // Sembrar datos en la tabla encuentro
    await prisma.encuentro.createMany({
      data: [
        {
          fecha: new Date(2022, 0, 15),
          boxeador1_id: 1,
          boxeador2_id: 2,
          resultado_id: 1,
          asaltos_totales: 100,
          asaltos_boxeados: 50,
        },
        {
          fecha: new Date(2022, 2, 20),
          boxeador1_id: 2,
          boxeador2_id: 1,
          resultado_id: 2,
          asaltos_totales: 200,
          asaltos_boxeados: 100,
        },
        {
          fecha: new Date(2022, 4, 15),
          boxeador1_id: 3,
          boxeador2_id: 4,
          resultado_id: 3,
          asaltos_totales: 300,
          asaltos_boxeados: 150,
        },
        {
          fecha: new Date(2022, 6, 20),
          boxeador1_id: 4,
          boxeador2_id: 3,
          resultado_id: 4,
          asaltos_totales: 400,
          asaltos_boxeados: 200,
        },
        {
          fecha: new Date(2022, 8, 15),
          boxeador1_id: 3,
          boxeador2_id: 1,
          resultado_id: 5,
          asaltos_totales: 500,
          asaltos_boxeados: 250,
        },
      ],
    });

    // Sembrar datos en la tabla evento
    await prisma.evento.createMany({
      data: [
        {
          nombre: "Noche de Campeones",
          fecha: new Date(2022, 0, 15),
          lugar_id: 1,
        },
        {
          nombre: "Batalla de Gigantes",
          fecha: new Date(2022, 2, 20),
          lugar_id: 2,
        },
        {
          nombre: "El Regreso del Rey",
          fecha: new Date(2022, 4, 15),
          lugar_id: 3,
        },
        {
          nombre: "La Lucha por la Supremacia",
          fecha: new Date(2022, 6, 20),
          lugar_id: 4,
        },
        {
          nombre: "La Guerra de los Pesos",
          fecha: new Date(2022, 8, 15),
          lugar_id: 5,
        },
      ],
    });

    // Sembrar datos en la tabla eventoEncuentro
    await prisma.evento_encuentro.createMany({
      data: [
        { evento_id: 1, encuentro_id: 1 },
        { evento_id: 1, encuentro_id: 2 },
        { evento_id: 2, encuentro_id: 3 },
        { evento_id: 2, encuentro_id: 4 },
        { evento_id: 3, encuentro_id: 5 },
      ],
    });

    console.log("Datos sembrados con éxito");
  } catch (error) {
    console.log("Error al sembrar datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
