"use client";

import { useEffect } from "react";

import Hero from "@/components/hero/hero";
import Features from "@/components/hero/features";
import Gallery from "@/components/hero/gallery";
import Review from "@/components/hero/review";
import About from "@/components/hero/about";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Review />
    </>
  );
}