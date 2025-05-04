import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Intro() {
    const backgroundImageRef = useRef(null);
    const introImageRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top ",
                end: "+=500px",
                scrub: true,
            },
        });
        tl.from(backgroundImageRef.current, {
            clipPath: "inset(10%)",
        });
        tl.to(introImageRef.current, {
            clipPath: "inset(10%)",
        });
    }, []);
    return (
        <div className={styles.intro}>
            <div ref={backgroundImageRef} className={styles.backgroundImage}>
                <Image
                    src="/images/_DSC3210.jpg"
                    alt="Intro Background"
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.introContent}>
                <div
                    ref={introImageRef}
                    data-scroll
                    data-scroll-speed="0.3"
                    className={styles.introImage}
                >
                    <Image
                        src="/images/02c0d42c-feee-42d2-ba8d-9fcf3da8b9ac.jpg"
                        alt="Intro Background"
                        fill
                    />
                </div>{" "}
                <h1
                    data-scroll
                    data-scroll-speed="0.7"
                    className={styles.introTitle}
                >
                    Alan Brim
                </h1>
            </div>
        </div>
    );
}
