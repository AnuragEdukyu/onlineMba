"use client";
import Image from "next/image";

const HIGHLIGHTS = [
  { img: "/live-recorded-lectures.jpg", title: "Live & Recorded Lectures" },
  { img: "/easy-financing.jpg",         title: "Easy Financing"           },
  { img: "/study-anywhere.jpg",         title: "Study Anytime Anywhere"   },
  { img: "/real-world-project.jpg",     title: "Real World Projects"      },
];

export default function Highlights() {
  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Program Highlights &amp; Advantages
      </h2>
      <div className="h-px w-full bg-gray-300 mb-3" />

      <p className="text-[14px] md:text-[20px] mb-8 text-[#525862]">
        Discover our online MBA degree program and begin an exciting educational journey
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.img}
            className="w-full overflow-hidden rounded-2xl border border-gray-200"
          >
            <div
              className="w-full overflow-hidden relative"
              style={{ aspectRatio: "240/238" }}
            >
              <Image
                src={h.img}
                alt={h.title}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 flex items-end p-3 bg-black/35 z-10">
                <p className="text-white text-[14px] md:text-[18px] font-bold leading-snug">
                  {h.title}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}