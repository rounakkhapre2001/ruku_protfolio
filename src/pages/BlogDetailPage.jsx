import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data.js";
import DisplayText from "../components/DisplayText.jsx";
import { BodyCopy, MetaLine, PageShell, Sparkles } from "../components/PagePrimitives.jsx";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug) ?? posts[0];
  return (
    <PageShell className="pt-24">
      <Sparkles className="text-[26px]" />
      <MetaLine>{post.category} / {post.date}</MetaLine>
      <DisplayText as="h1" className="page-title mt-4 text-[190px] max-lg:text-[120px] max-sm:text-[74px]">{post.title}</DisplayText>
      <img src={post.image} alt="" className="mt-12 h-[640px] w-full object-cover max-md:h-[420px]" />
      <article className="mx-auto grid max-w-[980px] gap-8 pt-14">
        <BodyCopy>{post.excerpt}</BodyCopy>
        <BodyCopy>Inside the studio, every decision is physical before it becomes intellectual. A color is mixed, poured, interrupted, and watched until the image begins to make its own argument.</BodyCopy>
        <BodyCopy>The result is a magazine-like field of movement: part note, part room, part memory of a painting becoming visible under pressure.</BodyCopy>
        <div className="flex flex-wrap gap-3 pt-4">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-sun px-5 py-2 font-body text-[12px] font-black uppercase text-ink">{tag}</span>)}</div>
        <Link to="/blog" className="mt-4 w-fit rounded-full border border-paper px-8 py-3 font-body text-[14px] font-black uppercase text-paper">Back To Blog</Link>
      </article>
    </PageShell>
  );
}
