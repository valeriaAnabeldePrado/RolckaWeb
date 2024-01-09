"use client";
import React, { Children, ReactNode } from "react";
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
      <button
        onClick={handlerClick}
        className="botoncito"
        style={{
          border: `${bordeBoton} solid ${colorBorde}`,
          color: `${colorFuente}`,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default HomeButton;
