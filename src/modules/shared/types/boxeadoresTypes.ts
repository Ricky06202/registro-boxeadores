export interface BoxeadorGenericCard {
  id: number;
  categoria: string;
  genero: string;
  persona: {
    id: number;
    nombre: string;
    alias: string;
    imagen?: any;
    nacionalidad: {
      nacionalidad: string;
      codigo: string;
    };
  };
}
