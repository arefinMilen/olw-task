"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your plan will remain active until the end of the current billing period.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information such as your company name, VAT number, and address to all invoices from the billing settings.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We bill monthly or yearly depending on your chosen plan. You will receive an invoice by email after each payment.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can change your account email from the profile settings page. A verification link will be sent to your new email address.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="bg-gray-50 py-20 px-4 border-gray-500 rounded-2xl mx-3 sm:mx-45">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked{" "}
            <span className="text-[#E91E63]">questions</span>
          </h2>
          <p className="text-gray-700 text-lg font-medium">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-pink-200">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left gap-4 cursor-pointer bg-transparent border-none"
                >
                  <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-gray-900" : "text-gray-800"}`}>
                    {faq.question}
                  </span>

                  {/*   plus/minus icon paths */}
                  {isOpen ? (
                    <Image
                      src="/image/faq/minus-circle.png"
                      alt="collapse"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                  ) : (
                    <Image
                      src="/image/faq/plus.png"
                      alt="expand"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="text-gray-500 text-sm leading-relaxed pb-6 pr-10">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}