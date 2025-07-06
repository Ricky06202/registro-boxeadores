import { create } from "zustand";
import { BoxeadorGenericCard } from "@/modules/shared/types/boxeadoresTypes";
import { getBoxeadores } from "../services/boxeadoresService";

interface BoxeadoresStore {
  boxeadores: BoxeadorGenericCard[] | null;
  fetchBoxeadores: () => void;
}

export const useBoxeadoresStore = create<BoxeadoresStore>((set, get) => ({
  boxeadores: null,
  fetchBoxeadores: () => {
    getBoxeadores().then((data) => set({ boxeadores: data }));
  },
}));