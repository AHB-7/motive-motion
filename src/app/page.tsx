"use client";
import Intro from "@/components/intro";
import styles from "./page.module.css";
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <div className={styles.main}>
            <Intro />
        </div>
    );
}
