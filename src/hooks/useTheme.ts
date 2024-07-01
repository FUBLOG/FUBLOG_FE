
import {create} from 'zustand';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  darkMode: localStorage.getItem('displayMode') === 'dark',
  toggleDarkMode: () => set((state) => {
    const newMode = !state.darkMode;
    localStorage.setItem('displayMode', newMode ? 'dark' : 'light');
    return { darkMode: newMode };
  }),
}));

export default useThemeStore;
