import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { assets, posts } from "../data.js";
import { BodyCopy, ImageCard, MetaLine, PageHero, PageShell, SectionHeading } from "../components/PagePrimitives.jsx";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const filtered = useMemo(() => posts.filter((post) => {
    const haystack = `${post.title} ${post.category} ${post.tags.join(" ")} ${post.excerpt}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === "All" || post.category === category);
  }), [query, category]);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero eyebrow="Magazine Layout" title="Artist Blog" copy="Essays, studio notes, exhibition thinking, categories, tags, and searchable fragments from the practice." image={assets.heroYellow} />
      <PageShell className="pt-10">
        <div className="mb-10 grid grid-cols-12 gap-[26px]">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="SEARCH ARTICLES" className="col-span-7 bg-paper px-7 py-5 font-body text-[16px] font-black uppercase text-ink outline-none placeholder:text-ink/60 max-lg:col-span-12" />
          <div className="col-span-5 flex flex-wrap gap-3 max-lg:col-span-12">
            {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-6 py-3 font-body text-[13px] font-black uppercase ${category === item ? "bg-sun text-ink" : "border border-paper text-paper"}`}>{item}</button>)}
          </div>
        </div>
        {featured && (
          <Link to={`/blog/${featured.slug}`}>
            <ImageCard src={featured.image} className="min-h-[620px] max-md:min-h-[520px]">
              <MetaLine>Featured / {featured.date}</MetaLine>
              <h2 className="mt-3 font-display text-[118px] uppercase leading-[.88] max-lg:text-[92px] max-sm:text-[54px]">{featured.title}</h2>
              <BodyCopy className="mt-6 max-w-[720px]">{featured.excerpt}</BodyCopy>
            </ImageCard>
          </Link>
        )}
      </PageShell>
      <PageShell className="pt-24">
        <SectionHeading title="Latest Articles" align="right" copy="Filtered notes from the studio floor, written in the same visual language as the homepage." />
        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <ImageCard src={post.image} className="min-h-[430px]">
                <MetaLine>{post.category} / {post.date}</MetaLine>
                <h3 className="mt-3 font-body text-[28px] font-black uppercase leading-[1.05]">{post.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="bg-paper px-3 py-1 font-body text-[12px] font-black uppercase leading-none text-ink">{tag}</span>)}</div>
              </ImageCard>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}
