import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function index() {
    const phrases = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    ];

    return (
        <div className={styles.des}>
            {phrases.map((phrase: string, index: number) => (
                <AnimatedText key={index}>{phrase}</AnimatedText>
            ))}
        </div>
    );
}

import { ReactNode } from "react";

function AnimatedText({ children }: { children: ReactNode }) {
    const text = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0 bottom",
                end: "bottom+=400px bottom",
                scrub: true,
            },
            left: "-200px",
            opacity: 0,
        });
    }, []);
    return <p ref={text}>{children}</p>;
}
