"use client";
import React from "react";
import "./styleHome.scss";
import { useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import HomeButton from "./home-button";

interface HomeCardProps {
  servicio: string;
  texto: string;
  imagen: StaticImageData;
  nombre: string;
  style: string;
  animate: string;
  rotacion: string;
  colorFondo: string;
  colorFuente: string;
  bordeColor: string;
  //--propiedades del boton--//
  colorDelBordeBoton: string;
  colorFuenteBoton: string;
  enlaceBoton: string;
  bordeBoton: string;
}
const HomeCard: React.FC<HomeCardProps> = ({
  servicio,
  texto,
  imagen,
  nombre,
  style,
  animate,
  rotacion,
  colorFondo,
  colorFuente,
  bordeColor,
  //--propiedades del boton--//
  colorDelBordeBoton,
  colorFuenteBoton,
  bordeBoton,
  enlaceBoton,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);
  console.log(isVisible);

  const borderThickness = windowWidth <= 780 ? "2px" : "3px";

  return (
    <>
      <section ref={sectionRef}>
        <div
          className={`${style} cont-card ${isVisible ? `${animate}` : ""}`}
          style={{
            transform: `rotate(${rotacion}deg)`,
            backgroundColor: `${colorFondo}`,
            color: `${colorFuente}`,
            border: `${borderThickness} solid ${bordeColor}`,
          }}
        >
          <h3 className="h3-card">{servicio}</h3>
          <p>{texto}</p>
          <div className="cont-img-card">
            <Image src={imagen} alt={nombre} className="imagen-card" />
          </div>
          <HomeButton
            colorBorde={colorDelBordeBoton}
            colorFuente={colorFuenteBoton}
            enlace={enlaceBoton}
            bordeBoton={borderThickness}
          >
            Ver más
          </HomeButton>
        </div>
      </section>
    </>
  );
};

export default HomeCard;
