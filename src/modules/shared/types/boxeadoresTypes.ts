export interface BoxeadorGenericCardAPI {
    id: number;
    nombre: string;
    apellido: string;
    alias: string;
    categoria: string;
    generoId: number;
    genero: string;
    nacionalidadId: number;
    nacionalidad: string;
    countryCode: string;
}

export interface BoxeadorGenericCard {
    id: number;
    nombre: string;
    apellido: string;
    alias: string;
    categoria: string;
    genero: {
        id: number;
        genero: string;
    };
    nacionalidad: {
        id: number;
        nacionalidad: string;
        codigo: string;
    }
}

export interface BoxeadorForm {
    
}