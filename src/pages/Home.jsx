import React from "react";
import Hero from "../components/Hero";
import MarqueeStrip from "../components/MarqueeStrip";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedPrograms from "../components/FeaturedPrograms";
import CodePlayground from "../components/CodePlayground";
import SoftwareSaaS from "../components/SoftwareSaaS";
import StatsSection from "../components/StatsSection";
import WhyVault from "../components/WhyVault";
import HowItWorks from "../components/HowItWorks";
import Community from "../components/Community";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WhatWeDo />
      <FeaturedPrograms limit={3} />
      <CodePlayground />
      <SoftwareSaaS />
      <StatsSection />
      <WhyVault />
      <HowItWorks />
      <Community />
      <FinalCTA />
    </>
  );
}
