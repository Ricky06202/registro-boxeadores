import { create } from "zustand";

interface BoxeadorStore extends Boxeador {
  resetBoxeador: () => void;
  setNombre: (value: string) => void;
  setAlias: (value: string) => void;
  setCategoria: (value: number) => void;
  setGenero: (value: number) => void;
  setNacionalidad: (value: number) => void;
  setImagen: (value: string) => void;
}

interface Boxeador {
  nombre: string;
  alias: string;
  categoria: number;
  genero: number;
  nacionalidad: number;
  imagen: any;
}

export const useBoxeadorStore = create<BoxeadorStore>((set) => ({
  nombre: "",
  alias: "",
  categoria: 0,
  genero: 0,
  nacionalidad: 0,
  imagen: "",

  resetBoxeador: () =>
    set({
      nombre: "",
      alias: "",
      categoria: 0,
      genero: 0,
      nacionalidad: 0,
      imagen: "",
    }),

  setNombre: (value: string) => set({ nombre: value }),
  setAlias: (value: string) => set({ alias: value }),
  setCategoria: (value: number) => set({ categoria: value }),
  setGenero: (value: number) => set({ genero: value }),
  setNacionalidad: (value: number) => set({ nacionalidad: value }),
  setImagen: (value: any) => set({ imagen: value }),
}));
