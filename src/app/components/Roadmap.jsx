"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    number: "01",
    icon: "/image/roadmap/sign.png",
    title: "Add requirements & sign up today",
  },
  {
    id: 2,
    number: "02",
    icon: "/image/roadmap/csm.png",
    title: "Connect with your CSM & onboarding team",
  },
  {
    id: 3,
    number: "03",
    icon: "/image/roadmap/str.png",
    title: "Meet your STR Assistant next week",
  },
];

export default function GettingStarted() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Animation */}
        <div 
          className={`text-center mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Getting Started is <span className="text-[#E91E63]">Easy</span>
          </h2>
          <p className="text-gray-800 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
            >
              {/* Card with number badge */}
              <div className="relative w-full">
                {/* Number badge */}
                <div className="absolute -top-5 left-1/2 sm:left-1 -translate-x-1/2 z-10 w-11 h-11 rounded-full border-4 border-[#E91E63] bg-white flex items-center justify-center shadow-sm">
                  <span className="text-[#E91E63] text-sm font-semibold">{step.number}</span>
                </div>

                {/* Icon card */}
                <div className="border border-gray-200 rounded-2xl pt-10 pb-8 px-8 flex items-center justify-center min-h-40 bg-white hover:shadow-xl hover:border-[#E91E63]/20 transition-all duration-300">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <p className="mt-5 text-gray-900 font-semibold text-base leading-snug max-w-45">
                {step.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}