import Image from "next/image";
import Navbar from "@/app/components/Nav";
import Service from "@/app/components/Service";
import Pricing from "@/app/components/Pricing";
import Tools from "@/app/components/Tools";
import Roadmap from "@/app/components/Roadmap";
import Meeting from "@/app/components/Meeting";
export default function Home() {
  return (
    <>
      <Navbar />
      <Service />
      <Pricing />
      <Tools />
      <Roadmap />
      <Meeting />
    </>
  );
}
