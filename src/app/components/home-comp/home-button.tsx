"use client";
import React, { Children, ReactNode } from "react";
import { motion } from "framer-motion";
interface HomeButtonProps {
  children: ReactNode;
  colorBorde: string;
  colorFuente: string;
  bordeBoton: string;
  enlace: string;
}
const HomeButton: React.FC<HomeButtonProps> = ({
  children,
  colorBorde,
  colorFuente,
  enlace,
  bordeBoton,
}) => {
  const handlerClick = () => {
    window.location.href = enlace;
  };

  return (
    <>
      <motion.button
        onClick={handlerClick}
        className="botoncito"
        whileHover={{ scale: 1.2 }}
        transition={{
          stiffness: 300,
          type: "spring",
        }}
        style={{
          border: `${bordeBoton} solid ${colorBorde}`,
          color: `${colorFuente}`,
        }}
      >
        {children}
      </motion.button>
    </>
  );
};

export default HomeButton;
