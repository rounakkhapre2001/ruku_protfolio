import React from "react";
import { assets, awards, gallery, skills, timeline } from "../data.js";
import { BodyCopy, ImageCard, MetaLine, PageHero, PageShell, SectionHeading } from "../components/PagePrimitives.jsx";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Artist Biography" title="About Rukhmini" copy="A painter building cinematic rooms from color, pressure, portrait, and the strange electricity of everyday life." image={assets.heroPortrait} />
      <PageShell className="pt-10">
        <SectionHeading title="Biography" copy="Rukhmini makes paintings that behave like scenes: saturated, physical, and full of private weather." />
        <div className="grid grid-cols-12 gap-[26px]">
          <div className="col-span-7 max-lg:col-span-12">
            <img src={assets.video} alt="" className="h-[560px] w-full object-cover max-md:h-[360px]" />
          </div>
          <div className="col-span-5 flex flex-col justify-between gap-8 bg-[#0d0e0e] p-6 sm:p-8 max-lg:col-span-12">
            <BodyCopy>Raised between sketchbooks, city walls, and improvised studio floors, Rukhmini developed a language where abstraction and portraiture keep interrupting each other.</BodyCopy>
            <BodyCopy>The work is direct and theatrical: yellow spills, blue rooms, black flowers, and bodies caught at the exact point where emotion becomes shape.</BodyCopy>
          </div>
        </div>
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Journey Timeline" align="right" copy="A career measured by rooms, experiments, public shows, and the courage to keep changing the canvas." />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-4">
          {timeline.map(([year, text]) => (
            <div key={year} className="border-t-4 border-sun pt-5">
              <MetaLine>{year}</MetaLine>
              <BodyCopy className="mt-5">{text}</BodyCopy>
            </div>
          ))}
        </div>
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Skills Expertise" copy="The practice is built from technique, instinct, installation thinking, and a refusal to let color sit still." />
        <div className="grid grid-cols-2 gap-[18px] md:grid-cols-3">
          {skills.map((skill) => <div key={skill} className="bg-paper px-5 py-5 font-body text-[14px] font-black uppercase leading-tight text-ink sm:px-7 sm:text-[15px]">{skill}</div>)}
        </div>
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Awards" align="right" copy="Selected recognition from galleries, residencies, and public art programs." />
        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-4">
          {awards.map((award, index) => <ImageCard key={award} src={gallery[index % gallery.length].src} className="min-h-[330px]"><MetaLine>0{index + 1}</MetaLine><h3 className="mt-3 font-body text-[20px] font-black uppercase leading-[1.05]">{award}</h3></ImageCard>)}
        </div>
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Studio Gallery" copy="Workspace fragments: wet tables, reference walls, canvas stacks, and the yellow-blue evidence of process." />
        <div className="grid auto-rows-[300px] grid-cols-1 gap-[26px] md:grid-cols-6">
          {gallery.slice(0, 6).map((item, index) => <img key={item.src} src={item.src} alt="" className={`h-full w-full object-cover ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`} />)}
        </div>
      </PageShell>
    </>
  );
}
