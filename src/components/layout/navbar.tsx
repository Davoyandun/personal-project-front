"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { ModeToggle } from "@/components/theme/buttonToggleDark";
import { cn } from "@/lib/utils";

export function NavbarComponent() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <div className="w-full fixed justify-end items-center p-4 z-50 mt-10">
        <ModeToggle />
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Servicios">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Asesoramiento</HoveredLink>
            <HoveredLink href="/interface-design">
              Venta de productos
            </HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/productos">Productos</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Sobre Nosotros">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Contactos</HoveredLink>
            <HoveredLink href="/individual">Información</HoveredLink>
          </div>
        </MenuItem>
      </Menu>

    </div>
  );
}
