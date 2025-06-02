"use client";


// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OurPartners from "./Our-Partners";
import AboutEvent from "./about-event";
import EventContent from "./event-content";
import Faq from "./faq";
import OurSpeakers from "./ourspeakers";
import CallToAction from "./Call-to-Action";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurSpeakers />
      <OurPartners />
      <AboutEvent />
      <EventContent />
      <CallToAction />
      <Faq />
      <Footer />
    </>
  );
}
