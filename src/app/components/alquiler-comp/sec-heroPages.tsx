import React, { ReactNode } from "react";
import "./styleSecciones.scss";
import { motion } from "framer-motion";
interface HeroProps {
  children: ReactNode;
  titulo: string;
  colorFondo: string;
  colorFuentes: string;
}

const tituloAnimacion = {
  //es el estado inicial
  hidden: {
    x: -200,
    opacity: 0,
  },
  //es la animacion
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.5,
      stiffness: 100,
      type: "spring",
    },
  },
};

const subTituloAnimacion = {
  //es el estado inicial
  hidden: {
    x: -200,
    opacity: 0,
  },
  //es la animacion
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1.5,
      stiffness: 100,
      type: "spring",
    },
  },
};

const SecHeroPages: React.FC<HeroProps> = ({
  children,
  titulo,
  colorFondo,
  colorFuentes,
}) => {
  return (
    <>
      <section
        className="hero-secciones"
        style={{ backgroundColor: `${colorFondo}`, color: `${colorFuentes}` }}
      >
        <motion.h1
          variants={tituloAnimacion}
          initial="hidden"
          whileInView="visible"
          className="hero-secciones-h1 font-avenir"
        >
          {titulo}
        </motion.h1>
        <motion.p
          variants={subTituloAnimacion}
          initial="hidden"
          whileInView="visible"
          className="hero-secciones-p font-avenir"
        >
          {children}
        </motion.p>
      </section>
    </>
  );
};

export default SecHeroPages;
