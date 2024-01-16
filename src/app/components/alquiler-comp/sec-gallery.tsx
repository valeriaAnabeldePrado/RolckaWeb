"use client";
import React from "react";
import serMuestra from "@public/images/muestraServ.png";
import Image from "next/image";
import "./styleSecciones.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
interface GaleriaProp {
  colorFondo: string;
  colorFuentes: string;
}

const SecGallery: React.FC<GaleriaProp> = ({ colorFondo, colorFuentes }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cuadrado = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const cuadradoRosa = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const cuadradochico = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const cuadradochico2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <>
      <section
        className="galeria-main"
        style={{ backgroundColor: `${colorFondo}`, color: `${colorFuentes}` }}
      >
        <h2 className="galeria-h2">Visita nuestra galeria</h2>
        <section className="contDos" ref={ref}>
          <div className="cont-cuadrado">
            <motion.div className="cuadrado3" style={{ y: cuadradoRosa }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
            <motion.div className="cuadrado4" style={{ y: cuadrado }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
          </div>

          <div className="cont-cuadrado">
            <motion.div className="cuadrado4" style={{ y: cuadrado }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
            <motion.div className="cuadrado3" style={{ y: cuadradoRosa }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
          </div>

          <div className="cont-cuadrado">
            <motion.div className="cuadrado4" style={{ y: cuadradochico }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
            <motion.div className="cuadrado4" style={{ y: cuadradochico2 }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
          </div>

          <div className="cont-cuadrado">
            <div className="cuadrado3 espacio">
              <Image src={serMuestra} alt="nombre" fill />
            </div>
            <motion.div className="cuadrado4" style={{ y: cuadrado }}>
              <Image src={serMuestra} alt="nombre" fill />
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SecGallery;
