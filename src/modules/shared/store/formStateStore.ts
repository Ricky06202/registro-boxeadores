import { create } from "zustand";

interface FormStateStore {
  createPanel: boolean;
  editPanel: boolean;
  deletePanel: boolean;
  showCreate: () => void;
  hideCreate: () => void;
  showEdit: () => void;
  hideEdit: () => void;
  showDelete: () => void;
  hideDelete: () => void;

  currentPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;

  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

export const useFormStateStore = create<FormStateStore>()((set) => ({
  createPanel: false,
  editPanel: false,
  deletePanel: false,
  showCreate: () => set({ createPanel: true }),
  hideCreate: () => set({ createPanel: false }),
  showEdit: () => set({ editPanel: true }),
  hideEdit: () => set({ editPanel: false }),
  showDelete: () => set({ deletePanel: true }),
  hideDelete: () => set({ deletePanel: false }),

  currentPage: 1,
  setCurrentPage: (page: number) => set({ currentPage: page }),
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),

  currentTab: 0,
  setCurrentTab: (tab: number) => set({ currentTab: tab }),
}));
