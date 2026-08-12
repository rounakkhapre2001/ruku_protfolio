import React from "react";

export default function DisplayText({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`display-text font-display uppercase leading-[.82]  text-paper ${className}`}>
      {children}
    </Tag>
  );
}
