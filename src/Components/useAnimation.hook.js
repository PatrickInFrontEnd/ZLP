import { useEffect } from "react";
import gsap from "gsap";

export default (ref) => {
    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.3 });
        const target = ref.current;
        tl.fromTo(
            target,
            {
                transform: "translateX(-200px)",
                opacity: 0,
                immediateRender: false,
            },
            {
                transform: "translateX(0)",
                opacity: 1,
                duration: 0.6,
                ease: "power2.in",
            }
        );
    }, [ref]);
};

export const callbackAnimation = (ref) => {
    const tl = gsap.timeline();
    const target = ref.current;
    tl.fromTo(
        target,
        { transform: "translateX(-200px)", opacity: 0 },
        {
            transform: "translateX(0)",
            opacity: 1,
            duration: 0.6,
            ease: "power2.in",
        }
    );
};
