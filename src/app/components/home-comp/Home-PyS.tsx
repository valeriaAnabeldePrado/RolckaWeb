"use client";
import React, { useEffect, useState } from "react";
import "./styleHome.scss";
import imgProducto from "@public/images/pngProducto.png";
import imgAlquiler from "@public/images/pngAlquiler.png";
import HomeCard from "./Home-Card";

const HomePyS = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const marginTopTrasla = windowWidth <= 780 ? "0em" : "15em";
  const alquilerProps = {
    rotacion: "-8",
    colorFondo: "#000",
    colorFuente: "#fff",
    bordeColor: "#000",
    servicio: "Alquiler",
    texto: loremIpsumText,
    imagen: imgAlquiler,
    nombre: "muestra",
    traslacion: "0",
    colorDelBordeBoton: "#fff",
    colorFuenteBoton: "#fff",
    bordeBoton: "3px",
    enlaceBoton: "/alquiler",
  };

  const productosProps = {
    rotacion: "8",
    colorFondo: "#fff",
    colorFuente: "#000",
    bordeColor: "#000",
    servicio: "Productos",
    texto: loremIpsumText,
    imagen: imgProducto,
    nombre: "muestra",
    traslacion: `${marginTopTrasla}`,
    colorDelBordeBoton: "#000",
    colorFuenteBoton: "#000",
    bordeBoton: "3px",
    enlaceBoton: "/productos",
  };

  return (
    <>
      <section className="main-pyS">
        <h2 className="h2-pys">Productos</h2>
        <h2 className="h2-pys">& servicios</h2>
        <section className="containerCard-pys">
          <HomeCard {...alquilerProps} />
          <HomeCard {...productosProps} />
        </section>
      </section>
    </>
  );
};

const loremIpsumText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum reiciendis laborum repellendus enim deserunt iusto";

export default HomePyS;
