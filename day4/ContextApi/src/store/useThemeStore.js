import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useThemeStore = (set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
});

export default create(
  persist(useThemeStore, {
    name: "theme-storage",
    storage: createJSONStorage(() => AsyncStorage),
  })
);
