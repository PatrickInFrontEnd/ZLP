import React, { createContext, useState } from "react";

export const navigationContext = createContext({
    isNavOpened: false,
    toggleClick: () => {},
});

const NavigationProvider = ({ children }) => {
    const [isNavOpened, setIsNavOpened] = useState(false);

    const toggleNavClick = () => setIsNavOpened(!isNavOpened);

    return (
        <navigationContext.Provider
            value={{ isNavOpened, toggleClick: toggleNavClick }}
        >
            {children}
        </navigationContext.Provider>
    );
};

export default NavigationProvider;
