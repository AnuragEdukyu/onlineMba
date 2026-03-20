"use client";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="pt-5 pb-5 md:pt-14 md:pb-14 px-4 md:px-10 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Overview
      </h2>
      <div className="h-px w-full bg-gray-300 mb-6" />

      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <p className="text-[14px] md:text-[20px] font-bold mb-5 text-[#525862]">
            Enhance Your Career With India&apos;s Premier Online MBA
          </p>
          <div className="text-[14px] md:text-[20px] text-gray-700 leading-[22px] space-y-4">
            <p>
              Our Master of Business Administration is a 2 year (4 semesters) program that will help
              you gain a comprehensive understanding of the business world and thrive in a global
              marketplace. Learn from industry experts, engage in real-world case studies, and put
              theory into practice through internships and projects.
            </p>
            <p>
              Join a dynamic group of students and create invaluable connections with your peers remotely.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="w-full lg:w-[504px] lg:flex-shrink-0 rounded-2xl border border-gray-200 overflow-hidden relative"
          style={{ aspectRatio: "504/284" }}
        >
          <Image
            src="/overview.jpg"
            alt="Overview"
            fill
            sizes="(max-width:768px) 100vw, 504px"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}