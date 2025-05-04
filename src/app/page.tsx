"use client";
import Intro from "@/components/intro";
import Des from "@/components/des";
import styles from "./page.module.css";
import Project from "@/components/projects/inedx";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            new LocomotiveScroll();
        })();
    }, []);
    return (
        <div className={styles.main}>
            <Intro />
            <Des />
            <Project />
        </div>
    );
}
