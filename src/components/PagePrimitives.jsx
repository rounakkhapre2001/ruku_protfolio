import React from "react";
import { motion } from "framer-motion";
import DisplayText from "./DisplayText.jsx";
import { PillButton } from "./Buttons.jsx";

export function Sparkles({ className = "" }) {
  return <div className={`sparkles text-sun ${className}`}>* * *</div>;
}

export function PageShell({ children, className = "" }) {
  return <div className={`page-shell mx-auto max-w-[1384px] px-6 sm:px-10 lg:px-0 ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, copy, image, reverse = false }) {
  return (
    <PageShell className="relative pt-20 sm:pt-24">
      <div className="grid min-h-[520px] grid-cols-12 items-center gap-8 lg:min-h-[650px]">
        <motion.div
          className={`${reverse ? "col-span-7 order-2" : "col-span-8"} relative z-10 max-lg:col-span-12 max-lg:order-1`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles className="mb-[-10px] text-[26px]" />
          <DisplayText as="h1" className="page-title text-[214px] max-lg:text-[150px] max-sm:text-[92px]">
            {title}
          </DisplayText>
          <p className="mt-8 max-w-[610px] font-body text-[17px] font-bold uppercase leading-[1.18] text-dim">{copy}</p>
          {eyebrow && <p className="mt-8 font-body text-[14px] font-black uppercase tracking-[0.28em] text-sun">{eyebrow}</p>}
        </motion.div>
        <motion.img
          src={image}
          alt=""
          className={`${reverse ? "col-span-5 order-1 rotate-[-8deg]" : "col-span-4 rotate-[8deg]"} h-[470px] w-full object-cover max-lg:col-span-7 max-lg:order-2 max-sm:col-span-12 max-sm:h-[330px]`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        />
      </div>
    </PageShell>
  );
}

export function SectionHeading({ title, copy, align = "left" }) {
  return (
    <div className="mb-8 grid grid-cols-12 items-end gap-6">
      <div className={`${align === "right" ? "col-span-6 col-start-7 text-right" : "col-span-6"} max-lg:col-span-12`}>
        <Sparkles className={`mb-[-8px] text-[24px] ${align === "right" ? "text-right" : ""}`} />
        <DisplayText className={`section-title text-[98px] max-sm:text-[60px] ${align === "right" ? "origin-right" : ""}`}>{title}</DisplayText>
      </div>
      {copy && (
        <p className={`${align === "right" ? "col-span-6 col-start-1 row-start-1 text-left" : "col-span-6 text-right"} justify-self-end pb-4 font-body text-[17px] font-bold uppercase leading-[1.15] text-dim max-lg:col-span-12 max-lg:row-auto max-lg:text-left`}>
          {copy}
        </p>
      )}
    </div>
  );
}

export function ImageCard({ src, children, className = "" }) {
  return (
    <motion.article
      className={`relative overflow-hidden bg-[#111] ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      {src && <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="relative z-10 flex min-h-full flex-col justify-end p-6 sm:p-7">{children}</div>
    </motion.article>
  );
}

export function MetaLine({ children }) {
  return <p className="font-body text-[13px] font-black uppercase leading-[1.25] tracking-[0.14em] text-sun">{children}</p>;
}

export function BodyCopy({ children, className = "" }) {
  return <p className={`font-body text-[16px] font-bold uppercase leading-[1.28] text-dim sm:text-[17px] ${className}`}>{children}</p>;
}

export function CTA({ children }) {
  return <PillButton>{children}</PillButton>;
}
