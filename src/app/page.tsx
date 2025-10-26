"use client";
import React, { useState } from "react";

const colors = {
  bg: "#101316",
  slate600: "#64748B",
  slate200: "#E2E8F0",
  slate400: "#94A3B8",
};

const demoProjects = [
  {
    id: 1,
    title: "123 Oak Ave – Listing Highlight",
    role: "Director / Editor",
    type: "Real Estate",
    metrics: "+27% showings in week 1",
    thumb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    video: "https://cdn.coverr.co/videos/coverr-cityscape-aerial-6096/1080p.mp4",
  },
  {
    id: 2,
    title: "Gym Brand Social Reel",
    role: "DP / Editor",
    type: "Commercial",
    metrics: "120k organic views",
    thumb: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    video: "https://cdn.coverr.co/videos/coverr-running-man-5639/1080p.mp4",
  },
  {
    id: 3,
    title: "Restaurant Launch Spot",
    role: "Director / Color",
    type: "Commercial",
    metrics: "Sold out opening week",
    thumb: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    video: "https://cdn.coverr.co/videos/coverr-plating-food-0887/1080p.mp4",
  },
];

export default function Home() {
  const [mode, setMode] = useState<"hero" | "grid">("hero");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-800/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-2xl bg-slate-200/10 grid place-items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 17h16l-1.5-8-4.5 3-3-5-3 5-4.5-3L4 17z" fill={colors.slate200} />
              </svg>
            </div>
            <span className="font-head text-xl" style={{ color: colors.slate200 }}>
              KMTV Creative Media
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("hero")}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium font-body transition ${
                mode === "hero" ? "bg-slate-200 text-black" : "text-slate-300 hover:bg-slate-200/10"
              }`}
            >
              Minimal Hero
            </button>
            <button
              onClick={() => setMode("grid")}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium font-body transition ${
                mode === "grid" ? "bg-slate-200 text-black" : "text-slate-300 hover:bg-slate-200/10"
              }`}
            >
              Portfolio Grid
            </button>
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 rounded-xl bg-slate-200 text-black text-sm font-medium font-body hover:opacity-90"
            >
              Book a Shoot
            </a>
          </div>
        </div>
      </header>

      {mode === "hero" && (
        <section className="relative">
          <div className="absolute inset-0">
            <video
              className="w-full h-[70vh] object-cover opacity-70"
              src="https://cdn.coverr.co/videos/coverr-cinematic-drone-shot-over-the-water-5585/1080p.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-28">
            <h1 className="font-head text-5xl md:text-6xl leading-tight text-slate-200">
              Video. Photo. Social.
              <span className="block text-2xl md:text-3xl mt-4 font-body text-slate-400">
                Cinematic media that helps listings move and brands grow.
              </span>
            </h1>
            <div className="mt-8 flex gap-3">
              <a href="#work" className="px-5 py-2 rounded-2xl bg-slate-200 text-black font-body font-medium">
                See Work
              </a>
              <a href="#contact" className="px-5 py-2 rounded-2xl border border-slate-600 text-slate-200 font-body hover:bg-white/5">
                Get a Quote
              </a>
            </div>
          </div>
        </section>
      )}

      {mode === "grid" && (
        <section id="work" className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-8">
            <h2 className="font-head text-3xl text-slate-200">Selected Projects</h2>
            <p className="font-body text-slate-400">Curated reels, listings, and campaigns.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((p) => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-slate-800 bg-white/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.thumb} alt={p.title} className="w-full h-full object-cover transition group-hover:scale-105" />
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                    src={p.video}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-head text-xl text-slate-200">{p.title}</h3>
                  <p className="font-body text-sm text-slate-400 mt-1">{p.type} • {p.role}</p>
                  <p className="font-body text-sm text-slate-300 mt-3">{p.metrics}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { h: "Listing Media", p: "Pro photos, cinematic walkthroughs, drone, reels." },
            { h: "Brand Content", p: "Short-form packages for IG/TikTok/YouTube Shorts." },
            { h: "Edit-Only", p: "Send footage; get color, sound, and story treatment." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 p-6 bg-white/5">
              <h3 className="font-head text-xl text-slate-200">{item.h}</h3>
              <p className="font-body text-slate-400 mt-2">{item.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-3xl border border-slate-800 p-8 bg-white/5">
          <h2 className="font-head text-3xl text-slate-200">Let’s build something cinematic</h2>
          <p className="font-body text-slate-400 mt-2">Tell me about your listing or brand. I’ll reply with a timeline and a quote.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl bg-transparent border border-slate-700 text-slate-200 font-body" placeholder="Your name" />
            <input className="px-4 py-3 rounded-xl bg-transparent border border-slate-700 text-slate-200 font-body" placeholder="Email or phone" />
            <input className="md:col-span-2 px-4 py-3 rounded-xl bg-transparent border border-slate-700 text-slate-200 font-body" placeholder="Project/link (optional)" />
            <textarea rows={5} className="md:col-span-2 px-4 py-3 rounded-xl bg-transparent border border-slate-700 text-slate-200 font-body" placeholder="What do you need?" />
            <button type="button" className="w-full md:w-auto px-5 py-3 rounded-2xl bg-slate-200 text-black font-body font-semibold">Send Inquiry</button>
          </form>
          <p className="font-body text-slate-500 text-sm mt-4">Or email: hello@kmtv.media • IG: @kmtv</p>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <p className="font-body text-slate-500 text-sm">© {new Date().getFullYear()} KMTV Creative Media</p>
          <p className="font-body text-slate-500 text-sm">Made with League Spartan & Work Sans</p>
        </div>
      </footer>
    </div>
  );
}
