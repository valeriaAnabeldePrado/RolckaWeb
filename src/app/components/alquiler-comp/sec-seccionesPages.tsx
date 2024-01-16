"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const animacionAppears = {
  //es el estado inicial
  hidden: {
    opacity: 0,
  },
  //es la animacion
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.5,
    },
  },
};
interface SeccionesProps {
  children: ReactNode;
  titulo: string;
  subtitulo: string;
  colorFondo: string;
  colorFuentes: string;
}

const SecSeccionesPages: React.FC<SeccionesProps> = ({
  children,
  titulo,
  subtitulo,
  colorFondo,
  colorFuentes,
}) => {
  return (
    <>
      <div
        className="secciones-main "
        style={{ color: `${colorFuentes}`, backgroundColor: `${colorFondo}` }}
      >
        <motion.section
          variants={animacionAppears}
          initial="hidden"
          whileInView="visible"
        >
          <h2
            className="secciones-titulo"
            style={{ display: titulo.length > 3 ? "flex" : "none" }}
          >
            {titulo}
          </h2>
          <h3 className="secciones-subtitulo ">{subtitulo}</h3>
          <p className="secciones-p">{children}</p>
        </motion.section>
      </div>
    </>
  );
};

export default SecSeccionesPages;
