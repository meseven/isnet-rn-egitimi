import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLangStore = (set) => ({
  lang: "tr-TR",
  setLang: (lang) => set({ lang }),
});

export default create(
  persist(useLangStore, {
    name: "language-storage",
    storage: createJSONStorage(() => AsyncStorage),
  })
);
