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
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Getting Started is <span className="text-[#E91E63]">Easy</span>
          </h2>
          <p className="text-gray-800 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">

              {/* Card with number badge */}
              <div className="relative w-full">

                {/* Number badge */}
                <div className="absolute -top-5 left-1/2 sm:left-1 -translate-x-1/2 z-10 w-11 h-11 rounded-full border-4 border-[#E91E63] bg-white flex items-center justify-center">
                  <span className="text-[#E91E63] text-sm font-semibold">{step.number}</span>
                </div>

                {/* Icon card */}
                <div className="border border-gray-200 rounded-2xl pt-10 pb-8 px-8 flex items-center justify-center min-h-40 bg-white hover:shadow-md transition-shadow duration-300">
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