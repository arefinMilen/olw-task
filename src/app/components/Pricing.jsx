"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

const plans = [
  {
    id: "freebie",
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    highlight: false,
    included: [true, true, false, false, false, false, false, false],
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    monthlyPrice: 25,
    yearlyPrice: 19,
    highlight: true,
    included: [true, true, true, true, true, true, false, false],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    yearlyPrice: 75,
    highlight: false,
    included: [true, true, true, true, true, true, true, true],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlanId, setHoveredPlanId] = useState(null);

  return (
    <section className="bg-gray pt-20 pb-0 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Airnbn Assistent <span className="text-[#E91E63]">pricing</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-bold">
            Choose a plan that&apos;s right for you
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-5 mb-16 relative">
          <span
            className={`text-sm font-medium transition-colors duration-200 ${!isYearly ? "text-gray-400" : "text-gray-800"}`}
          >
            Pay Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-gray-300 transition-colors duration-300 focus:outline-none shrink-0"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-[#E91E63] shadow transition-transform duration-300 ${
                isYearly ? "translate-x-1" : "-translate-x-6"
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium transition-colors duration-200 ${isYearly ? "text-gray-400" : "text-gray-800"}`}
          >
            Pay Yearly
          </span>

          {/* Save 25% badge */}
          <div className="absolute -right-4 md:right-auto md:left-[calc(50%+120px)] -top-4 flex items-center gap-1">
            <Image
              src="/image/price/save.png"
              alt="arrow"
              width={185}
              height={87.32}
              className="opacity-100 scale-x-100 h-20 w-20  sm:h-20 sm:w-35 object-contain"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isHighlighted = hoveredPlanId === plan.id;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlanId(plan.id)}
                onMouseLeave={() => setHoveredPlanId(null)}
                className={`flex flex-col p-8 rounded-3xl transition-all duration-300 cursor-pointer
                  ${
                    isHighlighted
                      ? "bg-[#E91E63] md:-mt-6 md:pb-14 z-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(233,30,99,0.4)] hover:scale-105"
                      : "bg-white border-2 border-[#FAC4D2] hover:shadow-lg hover:border-[#E91E63] hover:scale-105"
                  }`}
              >
                {/* Plan name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${isHighlighted ? "text-pink-100" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-8">
                  <span
                    className={`text-6xl font-bold leading-none ${isHighlighted ? "text-white" : "text-gray-900"}`}
                  >
                    ${price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${isHighlighted ? "text-pink-100" : "text-gray-500"}`}
                  >
                    / Month
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="/get-started"
                  className={`w-full text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 block
                    ${
                      isHighlighted
                        ? "bg-white text-[#E91E63] hover:bg-pink-50"
                        : "bg-white border-2 border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white"
                    }`}
                >
                  Get Started Now
                </Link>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-6 ${isHighlighted ? "bg-pink-400" : "bg-gray-100"}`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-4">
                  {features.map((feature, i) => {
                    const included = plan.included[i];
                    return (
                      <li key={i} className="flex items-center gap-3">
                        {included ? (
                          <Image
                            src="/image/price/right.png"
                            alt="included"
                            width={22}
                            height={22}
                            className="shrink-0"
                          />
                        ) : (
                          <Image
                            src="/image/price/cross.png"
                            alt="not included"
                            width={22}
                            height={22}
                            className="shrink-0 opacity-40"
                          />
                        )}
                        <span
                          className={`text-sm ${
                            isHighlighted
                              ? included
                                ? "text-white"
                                : "text-pink-200"
                              : included
                                ? "text-gray-800 font-medium"
                                : "text-gray-400"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
