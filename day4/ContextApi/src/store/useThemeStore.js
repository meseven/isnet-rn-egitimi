import { create } from "zustand";

const useThemeStore = (set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
});

export default create(useThemeStore);
