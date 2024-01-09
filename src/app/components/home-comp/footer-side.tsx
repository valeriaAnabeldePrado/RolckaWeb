import Image from "next/image";
import React from "react";
import logo from "@public/images/logos/rolckaLogo.png";
import { Icons } from "./icons";
import "./styleHome.scss";

export const FooterSide = () => {
  return (
    <div className="footer-side-container">
      <div className="footer-side-logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="footer-side-icons">
        <div className="iconos-org">
          {Icons.map((icon) => (
            <div key={`${icon.id}_id`} className="footer-side-icons-i">
              <icon.icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
