"use client";
import React from "react";
import SecHeroPages from "../components/alquiler-comp/sec-heroPages";
import SecSeccionesPages from "../components/alquiler-comp/sec-seccionesPages";
import SecGallery from "../components/alquiler-comp/sec-gallery";
import HomeFooter from "../components/home-comp/home-footer";
import datos from "../components/alquiler-comp/datosAlquiler";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "../globals.scss";

const Alquiler = () => {
  const { datosHero, datosSecciones } = datos;

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
      {datosHero.map((item, index) => (
        <SecHeroPages
          key={index}
          titulo={item.titulo}
          colorFondo={item.colorFondo}
          colorFuentes={item.colorFuentes}
        >
          {item.contenido}
        </SecHeroPages>
      ))}
      {datosSecciones.map((item, index) => (
        <SecSeccionesPages
          key={index}
          titulo={item.titulo}
          subtitulo={item.subtitulo}
          colorFondo={item.colorFondo}
          colorFuentes={item.colorFuentes}
        >
          {item.contenido}
        </SecSeccionesPages>
      ))}

      <SecGallery colorFondo="#f5f5f5" colorFuentes="#000" />
      <HomeFooter />
    </>
  );
};

export default Alquiler;
