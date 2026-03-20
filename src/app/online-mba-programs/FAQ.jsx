"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    q: "What Is The MBA Program?",
    a: "Our MBA is a 2-year (4 semesters) program that helps you gain a comprehensive understanding of the business world and thrive in a global marketplace.",
  },
  {
    q: "Is This Program UGC Approved?",
    a: "Yes, we offer only UGC-approved online courses from top-ranked universities. This ensures that the programs you choose have met the high standards set by the University Grants Commission (UGC).",
  },
  {
    q: "What Is The Eligibility Criteria?",
    a: "Aspiring candidates with a Bachelor's degree / Graduate Certificate in any discipline from a recognized university can register for this program.",
  },
  {
    q: "Do You Offer Placement Assistance?",
    a: "Yes, we offer strong placement assistance for UGC-approved online courses from top-ranked universities, ensuring a future-proof education and empowering you to launch a successful career.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx));

  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Frequently Asked Questions
      </h2>
      <div className="h-px w-full bg-gray-300 mb-3" />

      <p className="text-[14px] md:text-[20px] mb-8 text-[#525862]">
        Everything you need to know about the program
      </p>

      <div className="space-y-3">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-[22px] overflow-hidden border ${isOpen ? "border-[#025E68]" : "border-gray-200"}`}
            >

              {/* Question */}
              <button
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="cursor-pointer w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[14px] md:text-[18px] font-medium leading-snug text-[#025E68]">
                  {item.q}
                </span>
                <svg
                  width="20" height="20" viewBox="0 0 16 16" fill="none"
                  aria-hidden="true"
                  className={`flex-shrink-0 transition-transform duration-300 text-[#025E68] ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-6 pt-4 text-[14px] md:text-[16px] leading-relaxed border-t border-gray-100 text-[#525862]">
                  {item.a}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}