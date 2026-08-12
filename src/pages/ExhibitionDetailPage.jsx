import React from "react";
import { Link, useParams } from "react-router-dom";
import { exhibitionEvents } from "../data.js";
import DisplayText from "../components/DisplayText.jsx";
import { BodyCopy, CTA, MetaLine, PageShell, Sparkles } from "../components/PagePrimitives.jsx";

export default function ExhibitionDetailPage() {
  const { slug } = useParams();
  const event = exhibitionEvents.find((item) => item.slug === slug) ?? exhibitionEvents[0];
  return (
    <PageShell className="pt-24">
      <Sparkles className="text-[26px]" />
      <DisplayText as="h1" className="page-title text-[202px] max-lg:text-[130px] max-sm:text-[78px]">{event.title}</DisplayText>
      <div className="grid grid-cols-12 gap-[30px] pt-10">
        <img src={event.image} alt="" className="col-span-7 h-[680px] w-full object-cover max-lg:col-span-12 max-md:h-[430px]" />
        <div className="col-span-5 flex flex-col justify-between bg-[#0d0e0e] p-6 sm:p-8 max-lg:col-span-12">
          <div>
            <MetaLine>{event.date}</MetaLine>
            <h2 className="mt-5 font-body text-[34px] font-black uppercase leading-[1.05] max-sm:text-[28px]">{event.location}</h2>
            <BodyCopy className="mt-8">{event.detail} Expect intimate lighting, large-scale works, a short artist introduction, and a focused route through the exhibition.</BodyCopy>
          </div>
          <div className="mt-10 flex gap-4">
            <CTA>Buy Ticket</CTA>
            <Link className="rounded-full border border-paper px-8 py-3 font-body text-[14px] font-black uppercase text-paper" to="/exhibition">All Shows</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
