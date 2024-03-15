import { Header } from "./sections/Header";
import { AboutUs } from "./sections/AboutUs";
import { Features } from "./sections/Features";
import { Team } from "./sections/Team";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Features />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}
