import Image from "next/image";
import Navbar from "@/app/components/Nav";
import Service from "@/app/components/Service";
import Pricing from "@/app/components/Pricing";
export default function Home() {
  return (
    <>
      <Navbar />
      <Service />
      <Pricing />
    </>
  );
}
