import React, { createContext, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useDebounce } from "./../../utils/debounce";

export const navigationContext = createContext({
    isNavOpened: false,
    navVisible: false,
    currentY: 0,
    toggleClick: () => {},
});

const NavigationProvider = ({ children }) => {
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [navVisible, setNavVisibility] = useState(true);
    const [currentY, setCurrY] = useState(0);
    const debouncedCurrY = useDebounce(currentY, 200);

    const toggleNavClick = () => setIsNavOpened((prevState) => !prevState);

    useScrollPosition(({ prevPos, currPos }) => {
        const isVisible = currPos.y > prevPos.y;
        if (navVisible !== isVisible) setNavVisibility(isVisible);

        if (currPos.y === 0) setCurrY(currPos.y);
        else setCurrY(-currPos.y);
    });

    return (
        <navigationContext.Provider
            value={{
                isNavOpened,
                toggleClick: toggleNavClick,
                navVisible,
                currentY: debouncedCurrY,
            }}
        >
            {children}
        </navigationContext.Provider>
    );
};

export default NavigationProvider;
