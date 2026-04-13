"use client"; // Required for Intersection Observer
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const tools = [
  { id: 1, name: "PriceLabs", logo: "/image/tools-icon/price.png" },
  { id: 2, name: "Wheelhouse", logo: "/image/tools-icon/wheel.png" },
  { id: 3, name: "Beyond Pricing", logo: "/image/tools-icon/beyond.png" },
  { id: 4, name: "Hostfully", logo: "/image/tools-icon/host.png" },
  { id: 5, name: "Guesty For Hosts", logo: "/image/tools-icon/guesty.png" },
  { id: 6, name: "Lodgify", logo: "/image/tools-icon/lodgify.png" },
  { id: 7, name: "Hostfully", logo: "/image/tools-icon/host.png" },
  { id: 8, name: "Guesty For Hosts", logo: "/image/tools-icon/guesty.png" },
  { id: 9, name: "Lodgify", logo: "/image/tools-icon/lodgify.png" },
];

export default function Tools() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Run animation only once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <div 
          className={`text-center mb-14 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#E91E63]">Tools</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="bg-gray-100 rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms" 
                }}
                className={`bg-white rounded-2xl flex items-center justify-center p-8 sm:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={160}
                  height={60}
                  className="object-contain max-h-15 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}