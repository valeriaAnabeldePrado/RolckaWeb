import React from "react";
import "./styleHome.scss";
import imgProducto from "@public/images/pngProducto.png";
import imgAlquiler from "@public/images/pngAlquiler.png";
import HomeCard from "./Home-Card";

const HomePyS = () => {
  const alquilerProps = {
    rotacion: "-8",
    colorFondo: "#000",
    colorFuente: "#fff",
    bordeColor: "#000",
    servicio: "Alquiler",
    texto: loremIpsumText,
    imagen: imgAlquiler,
    nombre: "muestra",
    traslacion: "0",
    colorDelBordeBoton: "#fff",
    colorFuenteBoton: "#fff",
    enlaceBoton: "/alquiler",
  };

  const productosProps = {
    rotacion: "8",
    colorFondo: "#fff",
    colorFuente: "#000",
    bordeColor: "#000",
    servicio: "Productos",
    texto: loremIpsumText,
    imagen: imgProducto,
    nombre: "muestra",
    traslacion: "15em",
    colorDelBordeBoton: "#000",
    colorFuenteBoton: "#000",
    enlaceBoton: "/productos",
  };

  return (
    <>
      <section className="main-pyS">
        <h2 className="h2-pys">Productos</h2>
        <h2 className="h2-pys">& servicios</h2>
        <section className="containerCard-pys">
          <HomeCard {...alquilerProps} />
          <HomeCard {...productosProps} />
        </section>
      </section>
    </>
  );
};

const loremIpsumText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum reiciendis laborum repellendus enim deserunt iusto";

export default HomePyS;
