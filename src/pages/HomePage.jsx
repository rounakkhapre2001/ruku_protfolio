import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets, exhibitions, gallery } from "../data.js";
import Marquee from "../components/Marquee.jsx";
import DisplayText from "../components/DisplayText.jsx";
import MotionImage from "../components/MotionImage.jsx";
import { PillButton, PlayButton } from "../components/Buttons.jsx";
import { Sparkles } from "../components/PagePrimitives.jsx";

function Hero() {
  return (
    <section className="relative mx-auto min-h-[930px] max-w-[1384px] px-6 pt-20 sm:px-10 lg:px-0">
      <MotionImage src={assets.heroPortrait} alt="Alex Pintre painting" className="hero-portrait absolute left-[70px] top-[96px] h-[335px] w-[254px] rotate-[10deg] max-md:hidden" />
      <MotionImage src={assets.heroRight} alt="Artist holding leaves" className="absolute right-[18px] top-[240px] h-[590px] w-[392px] max-md:relative max-md:right-auto max-md:top-auto max-md:mt-8 max-md:h-[360px] max-md:w-full max-md:rotate-0" delay={0.1} />
      <div className="absolute right-0 top-[121px] flex w-[520px] items-center overflow-hidden max-lg:hidden">
        <img src={assets.smallSea} alt="" className="h-[76px] w-[76px] flex-none border border-paper object-cover" />
        <div className="min-w-0 flex-1">
          <Marquee />
        </div>
      </div>
      <motion.div className="relative z-10 mx-auto w-fit pt-[145px]" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }}>
        <DisplayText as="h1" className="hero-title text-[292px] tracking-[-2px]">
          Magic
          <br />
          Artsy
        </DisplayText>
        <Sparkles className="absolute left-[442px] top-[445px] text-[28px] max-md:hidden" />
      </motion.div>
      <div className="absolute left-[60px] top-[566px] grid grid-cols-2 gap-[22px] max-md:relative max-md:left-auto max-md:top-auto max-md:mt-10 max-md:w-full">
        <MotionImage src={assets.heroWave} alt="Blue abstract wave painting" className="h-[190px] w-[216px] border-[5px] border-paper max-md:h-[170px] max-md:w-full" delay={0.15} />
        <MotionImage src={assets.heroYellow} alt="Yellow abstract painting" className="h-[190px] w-[220px] border-[5px] border-paper max-md:h-[170px] max-md:w-full" delay={0.2} />
        <p className="col-span-2 mx-auto mt-3 max-w-[330px] text-center font-body text-[16px] font-bold uppercase leading-[1.18] text-dim">
          The excellence of my art shown to people every art for every soul
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-[1384px] px-6 pt-[40px] sm:px-10 lg:px-0">
      <div className="mb-8 grid grid-cols-12 items-end gap-6">
        <div className="col-span-6 max-lg:col-span-12">
          <Sparkles className="mb-[-8px] text-[24px]" />
          <DisplayText className="section-title text-[102px]">About Rukhmini</DisplayText>
        </div>
        <p className="col-span-6 justify-self-end pb-4 text-right font-body text-[17px] font-bold uppercase leading-[1.15] text-dim max-lg:col-span-12 max-lg:text-left">
          An artist's outlook on life has a million dimensions, an artist's outlook on life has a million dimensions, there's art inside you
        </p>
      </div>
      <Link to="/about" className="relative block">
        <MotionImage src={assets.video} alt="Artist video preview" className="h-[592px] w-full max-md:h-[360px]" />
        <div className="absolute inset-0 grid place-items-center">
          <PlayButton />
        </div>
      </Link>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-[1384px] px-6 pt-[96px] sm:px-10 lg:px-0">
      <div className="mb-8 grid grid-cols-12 items-start gap-6">
        <p className="col-span-6 max-w-[560px] font-body text-[17px] font-bold uppercase leading-[1.14] text-dim max-lg:col-span-12">
          Art is the voice of millions of hearts in pain and struggle. What you instill in your artwork, I instill in the people that see it
        </p>
        <div className="col-span-6 justify-self-end text-right max-lg:col-span-12">
          <DisplayText className="section-title text-[103px]">Rukhmini Gallery</DisplayText>
          <Sparkles className="mt-[-112px] text-right text-[25px] max-lg:mt-0" />
        </div>
      </div>
      <div className="grid auto-rows-[326px] grid-cols-1 gap-[26px] max-md:auto-rows-[280px] lg:grid-cols-12">
        {gallery.map((item, index) => (
          <motion.div key={item.src} className={`relative overflow-hidden ${item.className}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.04, duration: 0.55 }}>
            <img src={item.src} alt="" className="h-full w-full object-cover" />
            {item.cta && (
              <Link to="/blog" className="absolute inset-0 grid place-items-center">
                <PillButton>{item.cta}</PillButton>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Exhibition() {
  return (
    <section className="mx-auto max-w-[1384px] px-6 pt-[92px] sm:px-10 lg:px-0">
      <div className="mb-8 grid grid-cols-12 items-end gap-6">
        <div className="col-span-6 max-lg:col-span-12">
          <Sparkles className="mb-[-8px] text-[24px]" />
          <DisplayText className="section-title text-[100px]">Exhibition Schedule</DisplayText>
        </div>
        <p className="col-span-6 justify-self-end pb-4 text-right font-body text-[17px] font-bold uppercase leading-[1.15] text-dim max-lg:col-span-12 max-lg:text-left">
          Art is perception, developed when imagination coincidences with the soul, starts as an argument between the artist and his imagination
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[27px] sm:grid-cols-2 lg:grid-cols-4">
        {exhibitions.map((item, index) => (
          <motion.div key={item.src} className="relative h-[588px] overflow-hidden max-md:h-[430px]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.06, duration: 0.55 }}>
            <img src={item.src} alt="" className="h-full w-full object-cover" />
            {index === 2 && (
              <Link to="/exhibition" className="absolute inset-0 grid place-items-center">
                <PillButton>Buy Ticket</PillButton>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative mx-auto min-h-[845px] max-w-[1384px] px-6 pt-[170px] sm:px-10 lg:px-0 max-md:min-h-0 max-md:pt-24">
      <MotionImage src={assets.contactFace} alt="Alex Pintre portrait" className="absolute left-[235px] top-[210px] h-[356px] w-[282px] rotate-[-13deg] max-md:hidden" />
      <MotionImage src={assets.contactPalette} alt="Painter palette" className="absolute right-[255px] top-[525px] h-[356px] w-[282px] rotate-[14deg] max-md:relative max-md:right-auto max-md:top-auto max-md:mt-8 max-md:h-[280px] max-md:w-full max-md:rotate-0" delay={0.1} />
      <Link to="/contact">
        <DisplayText className="contact-title relative z-10 mx-auto w-fit text-center text-[282px]">
          Contact
          <br />
          Now
        </DisplayText>
      </Link>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Exhibition />
      <Contact />
    </>
  );
}
