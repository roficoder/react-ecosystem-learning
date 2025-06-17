import { createContext, FC, ReactNode, useContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider: FC<any> = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
};