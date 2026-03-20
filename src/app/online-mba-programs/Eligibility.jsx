"use client";

export default function Eligibility() {
  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Eligibility
      </h2>
      <div className="h-px w-full bg-gray-300 mb-6" />

      <div className="rounded-[22px] border border-gray-200 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-5">
            {[
              "Fresh graduates, final year students or working professionals.",
              "Entrepreneurs looking to develop skills to manage critical business projects.",
              "Aspirants or working professionals seeking a global career in the fields of Management, Finance, Marketing, Sales, Operations, Logistics among many more",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0 bg-[#025E68]" />
                <p className="text-[12px] md:text-[16px] leading-[22px]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* NATIONAL */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] md:text-[20px] font-bold text-center underline text-[#025E68]">
              National
            </h3>
            <div className="rounded-2xl p-5 flex flex-col gap-4 flex-1 bg-[#025E68]">
              {[
                "Graduation in any discipline with 40% marks in the last qualifying examination. Below 40% marks, a test is conducted and if passed then the student is eligible for admission.",
                "Applicants must possess sufficient knowledge and understanding of the English Language",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0 bg-white" />
                  <p className="text-[12px] md:text-[16px] leading-[22px] text-white">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* INTERNATIONAL */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] md:text-[20px] font-bold text-center underline text-[#025E68]">
              International
            </h3>
            <div className="rounded-2xl p-5 flex flex-col gap-4 flex-1 bg-[#025E68]">
              {[
                "Graduation in any discipline with 40% marks in the last qualifying examination. Below 40% marks, a test is conducted and if passed then the student is eligible for admission.",
                "Applicants must possess sufficient knowledge and understanding of the English Language",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0 bg-white" />
                  <p className="text-[12px] md:text-[16px] leading-[22px] text-white">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
