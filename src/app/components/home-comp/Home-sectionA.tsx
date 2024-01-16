"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import "./styleHome.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import logoMuestra from "@public/images/logos/logoRolckaNegro.png";

const variantContenedor = {
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

const HomeSectionA = () => {
  const divref = useRef(null);
  // const estaVista = useInView(divref, { once: true });
  // const controlAnimacion = useAnimation();

  // useEffect(() => {
  //   if (estaVista) {
  //     controlAnimacion.start("visible");
  //   }
  // }, [controlAnimacion, estaVista]);

  return (
    <>
      <div className="nuetra-main">
        <section className="nuestra-p" ref={divref}>
          <motion.p
            variants={variantContenedor}
            initial="hidden"
            whileInView="visible"

            // animate={controlAnimacion}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse possimus eaque laudantium nobis. Hic recusandae tenetur
            laboriosam mollitia reiciendis necessitatibus sunt neque quae
            blanditiis ex facilis obcaecati, ab quam!
          </motion.p>
        </section>
        <section className="nuetra-contImg">
          <Image src={logoMuestra} alt="logoR" className="nuetra-img" />
        </section>
      </div>
    </>
  );
};

export default HomeSectionA;
