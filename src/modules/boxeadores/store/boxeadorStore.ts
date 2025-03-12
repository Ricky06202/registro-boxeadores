import { Prisma } from "@prisma/client";
import {
  BoxeadorData,
  NationalityData,
  PersonData,
  PlaceData,
  RoleData,
} from "@shared/types/boxFormTypes";
import { create } from "zustand";

interface BoxeadorStore {
  person: PersonData | null | number;
  nationality: NationalityData | null | number;
  residence: PlaceData | null | number;
  birthplace: PlaceData | null | number;
  role: RoleData | null | number;
  boxeador: BoxeadorData | null;
  resetAll: () => void;
  setPerson: (value: PersonData) => void;
  setNationality: (value: NationalityData) => void;
  setResidence: (value: PlaceData) => void;
  setBirthplace: (value: PlaceData) => void;
  setRole: (value: RoleData) => void;
  setBoxeador: (value: BoxeadorData) => void;

  getBoxeadorCreateInput: () => Prisma.boxeadorCreateInput | null;
  getBoxeadorUpdateInput: () => Prisma.boxeadorUpdateInput | null;
}

export const useBoxeadorStore = create<BoxeadorStore>((set, get) => ({
  person: null,
  nationality: null,
  residence: null,
  birthplace: null,
  role: null,
  boxeador: null,
  resetAll: () =>
    set({
      boxeador: null,
      person: null,
      nationality: null,
      residence: null,
      birthplace: null,
      role: null,
    }),
  setBoxeador: (value: BoxeadorData) => set({ boxeador: value }),
  setPerson: (value: PersonData) => set({ person: value }),
  setNationality: (value: NationalityData) => set({ nationality: value }),
  setResidence: (value: PlaceData) => set({ residence: value }),
  setBirthplace: (value: PlaceData) => set({ birthplace: value }),
  setRole: (value: RoleData) => set({ role: value }),
  getBoxeadorCreateInput: () => null,
  getBoxeadorUpdateInput: () => null,
}));
