import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/HeroImage";
import Features from "@/components/Feature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}
