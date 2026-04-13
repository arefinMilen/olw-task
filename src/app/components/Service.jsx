import Link from "next/link";
import Image from "next/image";

const animationStyles = `
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

  @keyframes iconBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  .service-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .service-card:nth-child(1) { animation-delay: 0.1s; }
  .service-card:nth-child(2) { animation-delay: 0.2s; }
  .service-card:nth-child(3) { animation-delay: 0.3s; }
  .service-card:nth-child(4) { animation-delay: 0.4s; }
  .service-card:nth-child(5) { animation-delay: 0.5s; }
  .service-card:nth-child(6) { animation-delay: 0.6s; }

  .service-icon {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
  }
`;

const services = [
  {
    id: 1,
    icon: (
      <Image
        src="image/serviceImg/listing.svg"
        alt="Listing Icon"
        width={84}
        height={84}
        className="object-contain"
      />
    ),
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/services/property-listings",
  },
  {
    id: 2,
    icon: (
      <Image
        src="image/serviceImg/booking.svg"
        alt="Listing Icon"
        width={98}
        height={97}
        className="object-contain "
      />
    ),
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/services/customer-bookings",
  },
  {
    id: 3,
    icon: (
      <Image
        src="image/serviceImg/cleaning.svg"
        alt="Listing Icon"
        width={78}
        height={78}
        className="object-contain"
      />
    ),
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/services/house-cleaning",
  },
  {
    id: 4,
    icon: (
      <Image
        src="image/serviceImg/review.svg"
        alt="Listing Icon"
        width={91.8}
        height={88.33}
        className="object-contain"
      />
    ),
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/services/guest-reviews",
  },
  {
    id: 5,
    icon: (
      <Image
        src="image/serviceImg/expense.svg"
        alt="Listing Icon"
        width={75}
        height={89.75}
        className="object-contain  h-auto"
      />
    ),
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/services/track-expenses",
  },
  {
    id: 6,
    icon: (
      <Image
        src="image/serviceImg/support.svg"
        alt="Listing Icon"
        width={74.68}
        height={100.71}
        className="object-contain"
      />
    ),
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/services/guest-support",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <style>{animationStyles}</style>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#E91E63]">Service</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#E91E63] transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Icon */}
              <div className="service-icon mb-6 origin-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              {/* Read More Button */}
              <div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 border border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:gap-3 active:scale-95"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
