import { create } from "zustand";

interface TabsStateStore {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

export const useTabsStateStore = create<TabsStateStore>()((set) => ({
  currentTab: 0,
  setCurrentTab: (tab: number) => set({ currentTab: tab }),
}));
