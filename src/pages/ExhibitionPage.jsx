import React from "react";
import { Link } from "react-router-dom";
import { exhibitionEvents } from "../data.js";
import { BodyCopy, CTA, ImageCard, MetaLine, PageHero, PageShell, SectionHeading } from "../components/PagePrimitives.jsx";
import { assets } from "../data.js";

function EventGrid({ events }) {
  return (
    <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Link key={event.slug} to={`/exhibition/${event.slug}`}>
          <ImageCard src={event.image} className="min-h-[470px]">
            <MetaLine>{event.date} / {event.location}</MetaLine>
            <h3 className="mt-3 font-body text-[30px] font-black uppercase leading-[1.02]">{event.title}</h3>
            <BodyCopy className="mt-4">{event.detail}</BodyCopy>
          </ImageCard>
        </Link>
      ))}
    </div>
  );
}

export default function ExhibitionPage() {
  const upcoming = exhibitionEvents.filter((event) => event.status === "Upcoming");
  const past = exhibitionEvents.filter((event) => event.status === "Past");
  return (
    <>
      <PageHero eyebrow="Tickets Available" title="Exhibition" copy="Upcoming and past rooms of color, architecture, portrait, and painterly atmosphere." image={assets.galleryBlue} reverse />
      <PageShell className="pt-10">
        <SectionHeading title="Upcoming Shows" copy="Select an event for details, location notes, date information, and booking action." />
        <EventGrid events={upcoming} />
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Past Exhibitions" align="right" copy="Archived rooms, completed shows, and earlier fragments from the continuing body of work." />
        <EventGrid events={past} />
      </PageShell>
      <PageShell className="pt-24">
        <div className="grid min-h-[360px] place-items-center bg-sun p-8 text-center text-ink">
          <div>
            <h2 className="font-display text-[96px] uppercase leading-[.86] max-sm:text-[56px]">Book A Ticket</h2>
            <p className="mx-auto mb-8 mt-5 max-w-[620px] font-body text-[17px] font-black uppercase leading-[1.15]">Reserve a place for the next exhibition room and receive studio notes before opening night.</p>
            <CTA>Reserve Now</CTA>
          </div>
        </div>
      </PageShell>
    </>
  );
}
