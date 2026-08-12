import React from "react";

export default function Marquee() {
  const copy = "PAINTER ARTIST + ";
  return (
    <div className="overflow-hidden bg-sun py-[7px] text-ink">
      <div className="marquee-track whitespace-nowrap font-body text-[14px] font-black uppercase leading-none">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index}>{copy}</span>
        ))}
      </div>
    </div>
  );
}
