import React from "react";
import serMuestra from "@public/images/muestraServ.png";
import Image from "next/image";

interface GaleriaProp {
  colorFondo: string;
  colorFuentes: string;
}

const SecGallery: React.FC<GaleriaProp> = ({ colorFondo, colorFuentes }) => {
  return (
    <>
      <section
        className="galeria-main"
        style={{ backgroundColor: `${colorFondo}`, color: `${colorFuentes}` }}
      >
        <h2 className="galeria-h2">Visita nuestra galeria</h2>
        <div className="galeria-container">
          <section className="galeria-conImagenes">
            <div className=" grande">
              <Image src={serMuestra} alt="muestra" fill />
            </div>
            <div className="contIMG desplazamientoAbajo">
              <Image src={serMuestra} alt="muestra" fill />
            </div>
          </section>
          <section className="espBlanco"></section>
          <section className="galeria-conImagenes">
            <div className="contIMG">
              <Image src={serMuestra} alt="muestra" fill />
            </div>
            <div className="chico">
              <Image src={serMuestra} alt="muestra" fill />
            </div>
          </section>
          <section className="espBlanco"></section>
          <section className="galeria-conImagenes">
            <div className="contIMG desplazamientoAbajo">
              <Image src={serMuestra} alt="muestra" fill />
            </div>
            <div className="grande desplazamientoArriba">
              <Image src={serMuestra} alt="muestra" fill />
            </div>
          </section>
          <section className="espBlanco"></section>
        </div>
      </section>
    </>
  );
};

export default SecGallery;
