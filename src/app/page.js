import Image from "next/image";
import Navbar from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Service from "@/app/components/Service";
import Pricing from "@/app/components/Pricing";
import Tools from "@/app/components/Tools";
import Roadmap from "@/app/components/Roadmap";
import Meeting from "@/app/components/Meeting";
import Review from "@/app/components/Review";
import Faq from "@/app/components/Faq";
import Question from "@/app/components/Question";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="services">
      <Service />
      </section>

      <section id="pricing">
      <Pricing /> 
      </section>

      <Tools />
      
      <section id="about">
        <Roadmap />
      </section>

      <section id="resources">
      <Meeting />
      </section>

      <section id="blog">
      <Review />
      </section>

      <Faq />
      <Question />
      <Footer />
    </>
  );
}
