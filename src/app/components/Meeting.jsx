import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const reasons = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expert in our team",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#FCE8EE] rounded-3xl overflow-hidden border border-[#fa91b4]">
          <div className="flex flex-col lg:flex-row items-stretch">

            {/* ── Left Content ── */}
            <div className="w-full lg:w-1/2 p-8 sm:p-10 xl:p-14 flex flex-col gap-6">

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Few Reasons Why you Choose us?
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {/*  check icon path */}
                    <Image
                      src="/image/meeting/right.png"
                      alt="check"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    <span className="text-gray-800 font-medium text-base">{reason}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-2">
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white font-semibold text-sm px-7 py-4 rounded-xl transition-colors duration-200"
                >
                  Schedule A Meeting
                  {/*  arrow icon path */}
                  <ArrowRight className="w-5 h-5" />  
                </Link>
              </div>
            </div>

            {/* ── Right Image  */}
            <div className="w-full lg:w-1/2 min-h-70 sm:min-h-90 md:m-8 relative">
              <Image
                src="/image/meeting/meeting.png"
                alt="Why choose us visual"
                fill
                className="object-content object-center"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}