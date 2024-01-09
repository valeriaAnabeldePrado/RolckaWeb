import React, { ReactNode } from "react";

interface SeccionesProps {
  children: ReactNode;
  titulo: string;
  subtitulo: string;
  colorFondo: string;
  colorFuentes: string;
}

const SecSeccionesPages: React.FC<SeccionesProps> = ({
  children,
  titulo,
  subtitulo,
  colorFondo,
  colorFuentes,
}) => {
  return (
    <>
      <div
        className="secciones-main "
        style={{ color: `${colorFuentes}`, backgroundColor: `${colorFondo}` }}
      >
        <h2
          className="secciones-titulo"
          style={{ display: titulo.length > 3 ? "flex" : "none" }}
        >
          {titulo}
        </h2>
        <h3 className="secciones-subtitulo ">{subtitulo}</h3>
        <p className="secciones-p">{children}</p>
      </div>
    </>
  );
};

export default SecSeccionesPages;
