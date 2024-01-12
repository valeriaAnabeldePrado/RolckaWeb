/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "../home-comp/styleHome.scss";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import logo from "@public/images/logos/logoRolckaNegro.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Productos",
      path: "/productos",
    },
    {
      name: "Alquiler",
      path: "/alquiler",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position="sticky">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src={logo.src}
            alt="logo"
            style={{ width: "4vw", marginRight: "1rem" }}
          />
          <p className="font-bold text-inherit">ROLCKA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-xl color">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/productos" className="text-xl color">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="alquiler" className="text-xl color">
            Alquiler
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-xl color mt-5"
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
