import React from "react";
import { NavLink } from "react-router-dom";
import DisplayText from "./DisplayText.jsx";

const links = [
  { label: "ABOUT", to: "/about" },
  { label: "EXHIBITION", to: "/exhibition" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
];

export default function Nav({ bottom = false }) {
  return (
    <nav className={`site-nav mx-auto grid w-full max-w-[1384px] grid-cols-4 items-center gap-y-5 px-6 text-[12px] font-bold text-dim sm:grid-cols-5 sm:px-10 sm:text-[14px] ${bottom ? "py-10" : "pt-10"}`}>
      <NavLink className="nav-link justify-self-start transition hover:text-paper sm:order-none" to={links[0].to}>{links[0].label}</NavLink>
      <NavLink className="nav-link justify-self-center transition hover:text-paper sm:order-none" to={links[1].to}>{links[1].label}</NavLink>
      <NavLink className="nav-logo order-first col-span-4 justify-self-center sm:order-none sm:col-span-1" to="/" aria-label="Alex Pintre home">
        <DisplayText as="div" className="logo text-[32px] leading-none">
          Rukhmini
        </DisplayText>
      </NavLink>
      <NavLink className="nav-link justify-self-center transition hover:text-paper sm:order-none" to={links[2].to}>{links[2].label}</NavLink>
      <NavLink className="nav-link justify-self-end transition hover:text-paper sm:order-none" to={links[3].to}>{links[3].label}</NavLink>
    </nav>
  );
}
