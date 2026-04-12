import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fade-in-up-delay-1 {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-2 {
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }

  .logos-container {
    animation: slideLeft 20s linear infinite;
  }

  .logos-container:hover {
    animation-play-state: paused;
  }
`;

const floatingIcons = [
  {
    src: "/image/hero/airbnb.png",
    alt: "Airbnb",
    top: "12%",
    left: "18%",
    size: 80,
    rotate: "-12deg",
  },
  {
    src: "/image/hero/booking.png",
    alt: "Booking",
    top: "8%",
    right: "20%",
    size: 72,
    rotate: "10deg",
  },
  {
    src: "/image/hero/wheelhouse.png",
    alt: "Wheelhouse",
    top: "58%",
    left: "18%",
    size: 80,
    rotate: "-8deg",
  },
  {
    src: "/image/hero/tripad.png",
    alt: "Tripadvisor",
    top: "55%",
    right: "20%",
    size: 76,
    rotate: "10deg",
  },
];

const dots = [
  { top: "10%", left: "6%", color: "#7C3AED", size: 8 },
  { top: "30%", left: "22%", color: "#E91E63", size: 7 },
  { top: "72%", left: "32%", color: "#F9A825", size: 8 },
  { top: "88%", left: "50%", color: "#26C6DA", size: 8 },
  { top: "18%", right: "30%", color: "#26C6DA", size: 7 },
  { top: "45%", right: "6%", color: "#F9A825", size: 8 },
  { top: "75%", right: "22%", color: "#7C3AED", size: 7 },
];

const trustedLogos = [
  { src: "/image/hero/airbnb.svg", alt: "Airbnb" },
  { src: "/image/hero/booking.svg", alt: "Booking.com" },
  { src: "/image/hero/vrbo.svg", alt: "Vrbo" },
  { src: "/image/hero/tripad.svg", alt: "Tripadvisor" },
  { src: "/image/hero/agoda.svg", alt: "Agoda" },
  { src: "/image/hero/expedia.svg", alt: "Expedia" },
  { src: "/image/hero/home.svg", alt: "HomeToGo" },
];

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <style>{styles}</style>

      {/* ── Hero Content Area ── */}
      <div className="relative min-h-145 sm:min-h-160 flex flex-col items-center justify-center px-4 py-20">
        {/* Grid background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/image/hero/grid.png"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Floating icons — hidden on mobile, visible md+ */}
        {floatingIcons.map((icon, i) => (
          <div
            key={i}
            className="absolute hidden md:block z-10 pointer-events-none"
            style={{
              top: icon.top,
              left: icon.left,
              right: icon.right,
              transform: `rotate(${icon.rotate})`,
            }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.size}
              height={icon.size}
              className="rounded-2xl shadow-lg"
            />
          </div>
        ))}

        {/* Decorative dots — hidden on mobile */}
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute hidden md:block rounded-full pointer-events-none z-10"
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
            }}
          />
        ))}

        {/* Center text content */}
        <div className="relative z-20 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Airbnb Assistants For{" "}
            <span className="block text-gray-800">Property Management</span>
          </h1>

          <p className="animate-fade-in-up-delay-1 text-gray-500 text-base leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="animate-fade-in-up-delay-2 flex flex-col items-center gap-4 mt-2">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white font-semibold text-sm px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Schedule A Meeting
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-[#E91E63] text-sm font-semibold underline underline-offset-4 transition-colors duration-200"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* ── Trusted By Strip ── */}
      <div className="bg-[#F6F6F6] py-12 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <p className="text-gray-700 font-semibold text-sm text-center">
            Trusted by leaders in 50+ industries
          </p>

          {/* Smooth scrolling logos animation */}
          <div className="w-full overflow-hidden">
            <div className="logos-container flex items-center gap-12">
              {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                <div key={idx} className="shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={110}
                    height={36}
                    className="object-contain h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
