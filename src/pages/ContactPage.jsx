import React from "react";
import { assets, faqs } from "../data.js";
import DisplayText from "../components/DisplayText.jsx";
import { BodyCopy, MetaLine, PageHero, PageShell, SectionHeading, Sparkles } from "../components/PagePrimitives.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Studio Contact" title="Contact Now" copy="For exhibitions, commissions, studio visits, interviews, and collector conversations." image={assets.contactPalette} reverse />
      <PageShell className="pt-10">
        <SectionHeading title="Write Studio" copy="Send a focused note. The studio responds to exhibition, commission, and press inquiries first." />
        <div className="grid grid-cols-12 gap-[26px]">
          <form className="col-span-7 grid gap-4 max-lg:col-span-12">
            {["Name", "Email", "Subject"].map((label) => <input key={label} placeholder={label.toUpperCase()} className="bg-paper px-5 py-5 font-body text-[15px] font-black uppercase text-ink outline-none placeholder:text-ink/60 sm:px-7" />)}
            <textarea placeholder="MESSAGE" rows="8" className="resize-none bg-paper px-5 py-5 font-body text-[15px] font-black uppercase text-ink outline-none placeholder:text-ink/60 sm:px-7" />
            <button type="button" className="w-fit rounded-full bg-sun px-8 py-3 font-body text-[14px] font-black uppercase text-ink">Send Message</button>
          </form>
          <div className="col-span-5 bg-[#0d0e0e] p-6 sm:p-8 max-lg:col-span-12">
            <Sparkles className="text-[24px]" />
            <DisplayText className="section-title mt-4 text-[84px]">Social Links</DisplayText>
            <div className="mt-8 grid gap-4">
              {["Instagram", "Dribbble", "Behance", "Mail"].map((item) => <a key={item} href="#" className="border-b border-paper/20 pb-3 font-body text-[18px] font-black uppercase text-paper">{item}</a>)}
            </div>
          </div>
        </div>
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Location Map" align="right" copy="A stylized map block in the same graphic language, ready to replace with an embedded map if needed." />
        <div className="relative h-[470px] overflow-hidden bg-sun text-ink">
          <div className="absolute left-[12%] top-[18%] h-[64%] w-[4px] rotate-[22deg] bg-ink" />
          <div className="absolute left-[28%] top-[8%] h-[82%] w-[4px] rotate-[-14deg] bg-ink" />
          <div className="absolute left-[8%] top-[55%] h-[4px] w-[84%] rotate-[-8deg] bg-ink" />
          <div className="absolute left-[18%] top-[34%] h-[4px] w-[72%] rotate-[12deg] bg-ink" />
          <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper font-body text-[13px] font-black uppercase">Studio</div>
          <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-auto">
            <MetaLine>Rukhmini's Studio</MetaLine>
            <h3 className="mt-2 font-body text-[22px] font-black uppercase leading-[1.05] sm:text-[24px]">Nagpur, MH</h3>
          </div>
        </div>
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Questions" copy="Short answers for collectors, curators, editors, and collaborators before the first message." />
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group bg-[#0d0e0e] p-7">
              <summary className="cursor-pointer font-body text-[18px] font-black uppercase text-paper">{question}</summary>
              <BodyCopy className="mt-5">{answer}</BodyCopy>
            </details>
          ))}
        </div>
      </PageShell>
    </>
  );
}
