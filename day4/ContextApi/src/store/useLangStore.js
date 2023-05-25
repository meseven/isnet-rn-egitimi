import { create } from "zustand";

const useLangStore = (set) => ({
  lang: "tr-TR",
  setLang: (lang) => set({ lang }),
});

export default create(useLangStore);
