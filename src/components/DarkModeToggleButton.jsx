import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import { useEffect, useRef } from "react";

const DarkModeToggleButton = ({ toggleDarkMode }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Ensure the button exists before clicking it
            if (buttonRef.current) {
                buttonRef.current.click();
            }
        }
    }, []);

    return (
        <Around className={`text-4xl text-toggle`} ref={buttonRef} onToggle={toggleDarkMode} duration={650} />
    );
}

export default DarkModeToggleButton;