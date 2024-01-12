"use client";
import React from "react";
import "./styleHome.scss";
import { motion } from "framer-motion";

const h2Mision = {
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

const h2Vision = {
  //es el estado inicial
  hidden: {
    opacity: 0,
  },
  //es la animacion
  animation: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1.7,
    },
  },
};
const HomeVisionMision = () => {
  return (
    <>
      <div className="contenedor-mV">
        <section className="seccion-mision">
          <motion.h2
            variants={h2Mision}
            initial="hidden"
            whileInView="animation"
          >
            Misión
          </motion.h2>
          <p className="p-mision">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis sit dolorem blanditiis harum doloremque ea quisquam vel
            quae, eligendi hic enim consectetur, explicabo placeat a aliquid?
            Esse itaque sapiente voluptatum.
          </p>
        </section>
        <hr />
        <section className="seccion-vision">
          <motion.h2
            variants={h2Vision}
            initial="hidden"
            whileInView="animation"
          >
            Visión
          </motion.h2>
          <p className="p-vision">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis sit dolorem blanditiis harum doloremque ea quisquam vel
            quae, eligendi hic enim consectetur, explicabo placeat a aliquid?
            Esse itaque sapiente voluptatum.
          </p>
        </section>
      </div>
    </>
  );
};

export default HomeVisionMision;
