import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    dark: false,
    toggle: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}