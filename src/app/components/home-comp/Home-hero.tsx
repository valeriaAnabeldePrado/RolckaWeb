"use client";
import React from "react";
import "./styleHome.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Homehero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const letraY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="main-hero" ref={ref}>
      <section className="izquierda-hero">
        <motion.h1 className="h1-rol" style={{ y: letraY }}>
          ROL
        </motion.h1>
      </section>
      <section className="derecha-hero">
        <motion.h1 className="h1-cka" style={{ y: letraY }}>
          CKA
        </motion.h1>
        <h3 className="p-hero">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, commodi
          odit beatae in vel asperiores consequuntur, iusto sit, ipsa officiis
          odio voluptas laboriosam aperiam dolorum.
        </h3>
      </section>
    </div>
  );
};

export default Homehero;
