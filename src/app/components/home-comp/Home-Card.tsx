"use client";
import React from "react";
import "./styleHome.scss";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import HomeButton from "./home-button";

interface HomeCardProps {
  servicio: string;
  texto: string;
  imagen: StaticImageData;
  nombre: string;
  rotacion: string;
  colorFondo: string;
  colorFuente: string;
  bordeColor: string;
  traslacion: string;
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
  rotacion,
  traslacion,
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
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const borderThickness = windowWidth <= 790 ? "1px" : "3px";
  return (
    <>
      <div
        className="cont-card"
        style={{
          transform: `rotate(${rotacion}deg)`,
          backgroundColor: `${colorFondo}`,
          color: `${colorFuente}`,
          border: `${borderThickness} solid ${bordeColor}`,
          marginTop: `${traslacion}`,
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
    </>
  );
};

export default HomeCard;
