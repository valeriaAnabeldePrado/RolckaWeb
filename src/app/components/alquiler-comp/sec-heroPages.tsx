import React, { ReactNode } from "react";
import "./styleSecciones.scss";

interface HeroProps {
  children: ReactNode;
  titulo: string;
  colorFondo: string;
  colorFuentes: string;
}
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
        <h1 className="hero-secciones-h1 font-avenir">{titulo}</h1>
        <p className="hero-secciones-p font-avenir">{children}</p>
      </section>
    </>
  );
};

export default SecHeroPages;
