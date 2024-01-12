"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Homehero from "./components/home-comp/Home-hero";
import HomeNuestrosClientes from "./components/home-comp/home-nuestrosClientes";
import HomePyS from "./components/home-comp/Home-PyS";
import HomeSectionA from "./components/home-comp/Home-sectionA";
import HomeVisionMision from "./components/home-comp/Home-visionMision";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Homehero />
      <main>
        <HomeSectionA />
        <HomeVisionMision />
        <HomePyS />
        <HomeNuestrosClientes />
      </main>
    </>
  );
}
