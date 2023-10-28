import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {}
})