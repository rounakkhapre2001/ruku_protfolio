import React from "react";
import { Outlet } from "react-router-dom";
import Marquee from "./Marquee.jsx";
import Nav from "./Nav.jsx";

export default function Layout() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <Nav />
      <Outlet />
      <Marquee />
      <Nav bottom />
    </main>
  );
}
