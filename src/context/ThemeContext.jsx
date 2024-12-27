import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {}, 
});

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("current-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }
    }
    if (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
    }
    return "light";
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);
        localStorage.setItem("current-theme", theme);
    }, [theme]); // Only run when theme changes

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;