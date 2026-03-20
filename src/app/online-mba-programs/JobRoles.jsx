"use client";

const JOB_ROLES = [
  {
    level: "Entry Level",
    roles: [
      "Management Trainee", "Business Analyst", "Marketing Associate",
      "Financial Analyst", "Operations Executive", "Human Resource Executive",
    ],
  },
  {
    level: "Mid Level",
    roles: [
      "Marketing Manager", "Human Resource Manager", "Project Manager",
      "Finance Manager", "Operations Manager", "Product Manager",
    ],
  },
  {
    level: "Advanced Level",
    roles: [
      "Director of Operations", "Chief Financial Officer (CFO)",
      "Senior Product Manager", "Chief Executive Officer (CEO)",
      "Head of Marketing", "Chief Human Resource Officer",
    ],
  },
];

export default function JobRoles() {
  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Job Roles
      </h2>
      <div className="h-px w-full bg-gray-300 mb-3" />

      <p className="text-[14px] md:text-[20px] mb-8 text-[#525862]">
        Swipe to find learners like you, or speak to a career expert and get started today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {JOB_ROLES.map(({ level, roles }) => (
          <div key={level} className="border border-gray-200 rounded-2xl overflow-hidden">

            {/* Yellow header */}
            <div className="flex items-center justify-center py-5 bg-[#FFD23F]">
              <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-wide text-[#025E68]">
                {level}
              </span>
            </div>

            {/* Roles list */}
            <div className="p-6 flex justify-center">
              <ul className="space-y-3 w-fit">
                {roles.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 bg-[#525862]" />
                    <span className="text-[14px] md:text-[20px] leading-[22px] text-[#525862]">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}