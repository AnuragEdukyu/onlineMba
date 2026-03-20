"use client";

const STEPS = [
  {
    img: "/connect.jpg",
    title: "Connect",
    desc: "Talk to counsellors or explore advice on courses.",
  },
  {
    img: "/councel.jpg",
    title: "Counsel",
    desc: "Pick the course/ College/ Specialization that sparks your interest or fits your goals.",
  },
  {
    img: "/choose.jpg",
    title: "Choose",
    desc: "Opt Easy EMI and jump into the world of learning!",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Admission Process
      </h2>
      <div className="h-px w-full bg-gray-300 mb-6" />

      <div className="rounded-2xl border border-gray-200 p-6 md:p-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">

              <div className="w-24 h-24 mb-4">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Dashed arrow — desktop only */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2">
                  <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
                    <line x1="0" y1="6" x2="68" y2="6" stroke="#025E68" strokeWidth="1.5" strokeDasharray="5 4" />
                    <path d="M68 2L76 6L68 10" stroke="#025E68" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <h3 className="text-[14px] md:text-[20px] font-bold mb-2 text-[#025E68]">
                {step.title}
              </h3>

              <p className="text-[14px] md:text-[20px] leading-[22px] text-[#525862]">
                {step.desc}
              </p>

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="cursor-pointer w-full max-w-[320px] h-[52px] px-[16px] rounded-[12px] text-[14px] md:text-[16px] font-semibold text-white md:max-w-[402px] bg-[#025E68] hover:bg-[#037a87] transition-all duration-200"
        >
          Book a Free Counseling Session
        </button>
      </div>

    </section>
  );
}
