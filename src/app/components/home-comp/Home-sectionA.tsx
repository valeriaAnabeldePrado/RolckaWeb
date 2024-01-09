import React from "react";
import "./styleHome.scss";
import Image from "next/image";
import logoMuestra from "@public/images/logos/logoRolckaNegro.png";

const HomeSectionA = () => {
  return (
    <>
      <div className="nuetra-main">
        <section className="nuestra-p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse possimus eaque laudantium nobis. Hic recusandae tenetur
            laboriosam mollitia reiciendis necessitatibus sunt neque quae
            blanditiis ex facilis obcaecati, ab quam!
          </p>
        </section>
        <section className="nuetra-contImg">
          <Image src={logoMuestra} alt="logoR" className="nuetra-img" />
        </section>
      </div>
    </>
  );
};

export default HomeSectionA;
