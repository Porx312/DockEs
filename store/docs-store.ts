import { create } from "zustand";

type DocsState = {
  name: string;
  setName: (name: string) => void;
};

export const useDocsStore = create<DocsState>((set) => ({
  name: "zustand",
  setName: (name) => set({ name }),
}));
