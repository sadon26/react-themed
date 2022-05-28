export const getCurrentTheme = () => {
    const darkMode = localStorage.getItem("darkMode");

    const isInDarkMode: Boolean = darkMode === "enabled";
    return { isInDarkMode };
};
