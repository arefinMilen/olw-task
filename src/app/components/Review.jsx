"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/image/client-review/avatar-1.png",
    stars: "/image/client-/stars.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Esther Howard",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/image/client-review/avatar-2.png",
    stars: "/image/client-review/stars.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Robert Fox",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/image/client-review/avatar-3.png",
    stars: "/image/client-review/stars.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/image/client-review/avatar-1.png",
    stars: "/image/client-review/stars.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Cameron Williamson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/image/client-review/avatar-2.png",
    stars: "/image/client-review/stars.png",
    rating: 4,
  },
];

// Duplicate for seamless loop
const allReviews = [...reviews, ...reviews];

function StarRating({ rating, starsPath }) {
  return (
    <div className="flex items-center gap-1 mt-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#F9A825" : "#E5E7EB"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientReviews() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const speed = 0.6; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        positionRef.current += speed;
        if (positionRef.current >= cardWidth) {
          positionRef.current = 0;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Check Our Clients <span className="text-[#E91E63]">Review</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Scrolling track — full width, no padding */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-5 w-max"
          style={{ willChange: "transform" }}
        >
          {allReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className={`shrink-0 w-75 sm:w-85 bg-white rounded-2xl p-6 flex flex-col
                ${index % reviews.length === 1
                  ? "shadow-xl border border-gray-100"
                  : "border border-gray-100 shadow-sm"
                }`}
            >
              {/* Top: avatar + name */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-100">
                  {/* Replace avatar src with your own image paths */}
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">{review.name}</p>
                  {/* Star rating — replace with your star image path or keep SVG */}
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mt-4">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}