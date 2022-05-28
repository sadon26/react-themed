import { useEffect, useState } from "react";
import "./theme-toggler.scss";
import { getCurrentTheme } from "../../utils";
import { useActionsContext } from "../../contexts/actionContext";

const ThemeToggler = () => {
    const [darkMode, setDarkMode] = useState<Boolean>(false);

    const { setActions } = useActionsContext();

    const toggleTheme = (darkTheme: Boolean, sendMessage: Boolean = false) => {
        document.body.classList[darkTheme ? "remove" : "add"]("dark__mode");
        localStorage.setItem("darkMode", !darkTheme ? "enabled" : "disabled");
        setDarkMode(!darkTheme);

        if (sendMessage) {
            setActions(`Theme was set to ${!darkMode ? "Dark" : "Light"}`);
        }
    };

    useEffect(() => {
        const { isInDarkMode } = getCurrentTheme();
        toggleTheme(isInDarkMode);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {}, []);

    const btnText = darkMode ? "Light" : "Dark";

    return (
        <div className="theme__body">
            <button
                className="theme__btn"
                onClick={() => toggleTheme(darkMode, true)}
            >
                Set {btnText} Theme
            </button>
        </div>
    );
};

export default ThemeToggler;
