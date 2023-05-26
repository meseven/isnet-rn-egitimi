import { create } from "zustand";

const useMessageStore = (set) => ({
  messages: [
    // {
    //   id: 1,
    //   text: "Merhaba",
    // },
    // {
    //   id: 2,
    //   text: "Nasılsın?",
    // },
    // {
    //   id: 3,
    //   text: "İyiyim, sen?",
    // },
    // {
    //   id: 4,
    //   text: "İyiyim, teşekkürler",
    // },
    // {
    //   id: 5,
    //   text: "Neler yapıyorsun?",
    // },
  ],
  addMessage: (message) =>
    set((state) => ({ messages: [message, ...state.messages] })),

  setMessages: (messages) => set(() => ({ messages })),

  userLocation: {
    latitude: 41.0082,
    longitude: 28.9784,
  },
  setUserLocation: (location) => set(() => ({ userLocation: location })),

  focusedLocation: null,
  setFocusedLocation: (location) => set(() => ({ focusedLocation: location })),
});

export default create(useMessageStore);
