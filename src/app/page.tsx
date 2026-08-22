import fs from "node:fs";
import path from "node:path";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Capabilities from "@/components/sections/Capabilities";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const hasPortrait = fs.existsSync(path.join(process.cwd(), "public/images/portrait.jpg"));

  return (
    <>
      <Navbar />
      <main>
        <Hero hasPortrait={hasPortrait} />
        <About />
        <SelectedWork />
        <Capabilities />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
