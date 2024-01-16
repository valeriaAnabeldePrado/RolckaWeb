"use client";
import React, { useEffect, useState } from "react";
import "./styleHome.scss";
import imgProducto from "@public/images/pngProducto.png";
import imgAlquiler from "@public/images/pngAlquiler.png";
import HomeCard from "./Home-Card";
import { motion } from "framer-motion";

const tituloo = {
  //es el estado inicial
  hidden: {
    opacity: 0,
  },
  //es la animacion
  animation: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.5,
    },
  },
};

const HomePyS = () => {
  const alquilerProps = {
    rotacion: "-8",
    colorFondo: "#000",
    colorFuente: "#fff",
    bordeColor: "#000",
    servicio: "Alquiler",
    texto: loremIpsumText,
    imagen: imgAlquiler,
    nombre: "alquiler",
    style: "",
    animate: "animaAlquiler",
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
    nombre: "productos",
    style: "productoStyle",
    animate: "animaProducto",
    colorDelBordeBoton: "#000",
    colorFuenteBoton: "#000",
    bordeBoton: "3px",
    enlaceBoton: "/productos",
  };

  return (
    <>
      <section className="main-pyS">
        <motion.h2
          variants={tituloo}
          initial="hidden"
          whileInView="animation"
          className="h2-pys"
        >
          Productos
        </motion.h2>
        <motion.h2
          variants={tituloo}
          initial="hidden"
          whileInView="animation"
          className="h2-pys"
        >
          & servicios
        </motion.h2>
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
