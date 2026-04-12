import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Features", href: "/features" },
      { label: "Works", href: "/works" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Customer Support", href: "/support" },
      { label: "Delivery Details", href: "/delivery" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Free eBooks", href: "/ebooks" },
      { label: "Development Tutorial", href: "/tutorials" },
      { label: "How to – Blog", href: "/blog" },
      { label: "Youtube Playlist", href: "/youtube" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: "/image/footer/1.png" },
  { name: "Facebook", href: "https://facebook.com", icon: "/image/footer/2.png" },
  { name: "Instagram", href: "https://instagram.com", icon: "/image/footer/3.png" },
  { name: "Github", href: "https://github.com", icon: "/image/footer/4.png" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/*  logo path */}
            <Link href="/">
              <Image
                src="/image/google.svg"
                alt="Logo"
                width={120}
                height={36}
                className="object-contain"
              />
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam dictum aliquet accumsan porta lectus ridiculus in
              mattis. Netus sodales in volutpat ullamcorper amet
              adipiscing fermentum.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:opacity-70 transition-opacity duration-200"
                >
                  {/* social icon paths */}
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="text-gray-900 font-semibold text-base">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1B0E3D]">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-white text-sm">
            © Copyright 2024, All Rights Reserved by XYz
          </p>
        </div>
      </div>

    </footer>
  );
}