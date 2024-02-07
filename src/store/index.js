import { create } from 'zustand';

const useStore = create((set) => ({
  link: null,
  error: null,
  setLink: (link) => set(() => ({ link })),
  setError: (error) => set(() => ({ error })),
}));

export default useStore;
