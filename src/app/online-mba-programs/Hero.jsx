"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden font-[Outfit]"
      style={{ height: "calc(100vh - 64px)" }}
    >

      {/* Desktop image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/mba-banner.jpg"
          alt="Master of Business Administration Online MBA"
          fill
          priority
          quality={75}
          className="object-cover object-right-top"
          sizes="100vw"
        />
      </div>

      {/* Mobile image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/mobile-mba-banner.jpg"
          alt="Master of Business Administration Online MBA"
          fill
          priority
          quality={75}
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.35) 45%, transparent 70%), linear-gradient(180deg, rgba(0,0,0,.1) 0%, transparent 40%)"
        }}
      />

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col absolute z-20 left-14 top-1/2 -translate-y-1/2 max-w-[440px]">
        <h1 className="text-[48px] font-semibold leading-tight mb-3 text-white">
          Master Of{" "}
          <span className="text-[#FFD23F]">Business</span>
          <br />Administration (MBA)
        </h1>
        <p className="text-[20px] font-normal text-white/80 mb-6">
          Duration — 2 Years
        </p>
        <button className="cursor-pointer self-start inline-flex items-center justify-center gap-2 w-[125px] h-[45px] bg-transparent text-[16px] font-medium rounded-[8px] border-2 border-[#FFD23F] text-[#FFD23F] transition-all duration-200 hover:bg-[#FFD23F] hover:text-black">
          Enquire
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* MOBILE — content center mein figma jaisa */}
      <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-center px-6">
        <h1 className="text-[28px] font-semibold leading-tight mb-2 text-white text-center">
          Master Of{" "}
          <span className="text-[#FFD23F]">Business</span>
          <br />Administration (MBA)
        </h1>
        <p className="text-[14px] font-normal text-white/80 mb-6 text-center">
          Duration — 2 Years
        </p>
        <div className="flex justify-center">
          <button className="cursor-pointer inline-flex items-center justify-center gap-2 w-[125px] h-[41px] bg-transparent text-[14px] font-medium rounded-[8px] border-2 border-[#FFD23F] text-[#FFD23F] transition-all duration-200 active:scale-95 hover:bg-[#FFD23F] hover:text-black">
            Enquire
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}