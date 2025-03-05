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
}));
