import React, { createContext, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
export const navigationContext = createContext({
    isNavOpened: false,
    navVisible: false,
    toggleClick: () => {},
});

const NavigationProvider = ({ children }) => {
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [navVisible, setNavVisibility] = useState(true);

    const toggleNavClick = () => setIsNavOpened((prevState) => !prevState);

    useScrollPosition(({ prevPos, currPos }) => {
        const isVisible = currPos.y > prevPos.y;
        if (navVisible !== isVisible) setNavVisibility(isVisible);
    });

    return (
        <navigationContext.Provider
            value={{
                isNavOpened,
                toggleClick: toggleNavClick,
                navVisible,
            }}
        >
            {children}
        </navigationContext.Provider>
    );
};

export default NavigationProvider;
