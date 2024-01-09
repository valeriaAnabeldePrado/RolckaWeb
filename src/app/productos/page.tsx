import React from "react";
import "../components/alquiler-comp/styleSecciones.scss";
import SecHeroPages from "../components/alquiler-comp/sec-heroPages";
import SecSeccionesPages from "../components/alquiler-comp/sec-seccionesPages";
import datos from "../components/productos-comp/data";
import SecGallery from "../components/alquiler-comp/sec-gallery";
import HomeFooter from "../components/home-comp/home-footer";

const Productos = () => {
  const { datosHero, piletasPetroleras } = datos;
  return (
    <>
      {datosHero.map((item, index) => (
        <SecHeroPages
          key={index}
          titulo={item.titulo}
          colorFondo={item.colorFondo}
          colorFuentes={item.colorFuentes}
        >
          {item.contenido}
        </SecHeroPages>
      ))}

      <section className="secciones-main">
        <h2 className="secciones-titulo">
          Nuestros servicios metalúrgicos incluyen
        </h2>
        {piletasPetroleras.map((dato, id) => (
          <div key={id} className="secciones-piletas">
            <h3 className="secciones-subtitulo">{dato.tipo}</h3>
            <p className="secciones-p">{dato.descripcion}</p>
          </div>
        ))}
      </section>
      <SecSeccionesPages
        titulo=""
        subtitulo="Cisternas y Tanques para Gas Oil:"
        colorFondo="#000"
        colorFuentes="#f5f5f5"
      >
        {
          "Contenedores diseñados para el almacenamiento y transporte seguro de combustible diesel y otros derivados del petróleo, construidos con materiales resistentes y características específicas."
        }
      </SecSeccionesPages>
      <SecSeccionesPages
        titulo=""
        subtitulo="Trailers y Módulos Habitacionales:"
        colorFondo="#f5f5f5"
        colorFuentes="#000"
      >
        {
          "Vehículos de transporte y estructuras móviles que ofrecen soluciones flexibles para oficinas móviles, dormitorios o instalaciones temporales en sitios remotos."
        }
      </SecSeccionesPages>
      <SecSeccionesPages
        titulo=""
        subtitulo="Estructuras y Plataformas:"
        colorFondo="#000"
        colorFuentes="#f5f5f5"
      >
        {
          "Elementos diseñados para proporcionar soporte y acceso a equipos en diferentes entornos industriales, ideales para instalaciones de procesamiento, perforación u otras operaciones petroleras y de gas."
        }
      </SecSeccionesPages>
      <SecSeccionesPages
        titulo=""
        subtitulo="Skids y Skid Gas Lift:"
        colorFondo="#f5f5f5"
        colorFuentes="#000"
      >
        {
          "Plataformas modulares versátiles para el montaje rápido de equipos, desde componentes mecánicos hasta sistemas específicos como el skid gas lift, diseñado para mejorar la recuperación de petróleo mediante la inyección de gas."
        }
      </SecSeccionesPages>
      <SecGallery colorFondo="#000" colorFuentes="#f5f5f5" />
      <HomeFooter />
    </>
  );
};

export default Productos;
