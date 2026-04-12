import Image from "next/image";

const tools = [
  {
    id: 1,
    name: "PriceLabs",
    logo: "/image/tools-icon/price.png",
  },
  {
    id: 2,
    name: "Wheelhouse",
    logo: "/image/tools-icon/wheel.png",
  },
  {
    id: 3,
    name: "Beyond Pricing",
    logo: "/image/tools-icon/beyond.png",
  },
  {
    id: 4,
    name: "Hostfully",
    logo: "/image/tools-icon/host.png",
  },
  {
    id: 5,
    name: "Guesty For Hosts",
    logo: "/image/tools-icon/guesty.png",
  },
  {
    id: 6,
    name: "Lodgify",
    logo: "/image/tools-icon/lodgify.png",
  },
  {
    id: 7,
    name: "Hostfully",
    logo: "/image/tools-icon/host.png",
  },
  {
    id: 8,
    name: "Guesty For Hosts",
    logo: "/image/tools-icon/guesty.png",
  },
  {
    id: 9,
    name: "Lodgify",
    logo: "/image/tools-icon/lodgify.png",
  },
];

export default function Tools() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#E91E63]">Tools</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="bg-gray-100 rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-2xl flex items-center justify-center p-8 sm:p-10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[120px]"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={160}
                  height={60}
                  className="object-contain max-h-[60px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}