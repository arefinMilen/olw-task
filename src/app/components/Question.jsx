import Image from "next/image";
import Link from "next/link";

const avatars = [
  { src: "/image/ques/Avatar.png", alt: "Team member 1" },
  { src: "/image/ques/Avatar-1.png", alt: "Team member 2" },
  { src: "/image/ques/Avatar-2.png", alt: "Team member 3" },
];

export default function StillHaveQuestions() {
  return (
    <section className=" pb-20 px-4">
      <div className="max-w-6xl mx-auto  mt-10">
        <div className="bg-[#f6f6f7] rounded-2xl py-10 px-6 flex flex-col items-center text-center gap-4">

          {/* Overlapping avatars */}
          <div className="flex items-center">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden -ml-3 first:ml-0"
                style={{ zIndex: avatars.length - i }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Still have Questions?
            </h3>
            <p className="text-gray-400 text-sm">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-[#E91E63] hover:bg-[#C2185B] text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors duration-200"
          >
            Get in touch
          </Link>

        </div>
      </div>
    </section>
  );
}