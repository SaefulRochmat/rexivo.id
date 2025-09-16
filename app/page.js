import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/HeroImage";
import Features from "@/components/Feature";
import Footer from "@/components/Footer";
import PreviewProject from "@/components/PreviewProject";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <PreviewProject></PreviewProject>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
