import { useLayoutEffect } from "react";
import gsap from "gsap";

export default (ref) => {
    useLayoutEffect(() => callbackAnimation(ref), [ref]);
};

export const callbackAnimation = (ref) => {
    const tl = gsap.timeline({ delay: window.innerWidth < 1024 ? 0.6 : 0 });
    const target = ref.current;
    tl.fromTo(
        target,
        {
            transform: "translateX(-400px)",
            opacity: 0,
        },
        {
            transform: "translateX(0)",
            opacity: 1,
            ease: "power2.in",
            duration: 0.6,
        }
    );
};
