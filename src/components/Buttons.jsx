import React from "react";

export function PillButton({ children }) {
  return (
    <button className="inline-flex min-h-11 max-w-full items-center justify-center rounded-full bg-paper px-7 py-3 text-center font-body text-[13px] font-black uppercase leading-none text-ink shadow-sm transition hover:scale-105 sm:px-8 sm:text-[14px]">
      {children}
    </button>
  );
}

export function PlayButton() {
  return (
    <button aria-label="Play video" className="grid h-[132px] w-[132px] place-items-center rounded-full bg-paper text-ink shadow-xl transition hover:scale-105 max-sm:h-20 max-sm:w-20">
      <span className="ml-2 h-0 w-0 border-y-[21px] border-l-[33px] border-y-transparent border-l-ink max-sm:border-y-[14px] max-sm:border-l-[22px]" />
    </button>
  );
}
