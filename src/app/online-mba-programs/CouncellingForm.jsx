"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name:       z.string().min(1, "Name is required"),
  email:      z.string().email("Please enter a valid email address"),
  phone:      z.string().min(1, "Phone number is required").regex(/^\d{10}$/, "Must be 10 digits"),
  city:       z.string().min(1, "City is required"),
  course:     z.string().min(1, "Preferred course is required"),
  university: z.string().min(1, "Please select a university"),
});

const FORM_UNIVERSITIES = [
  "Amity University",
  "DY Patil Vidyapeeth",
  "Jain University",
  "Lovely Professional University",
  "Manipal University Jaipur",
  "NIU",
  "NMIMS University",
  "Sharda University",
  "Shoolini University",
  "Sikkim Manipal",
  "VIT",
  "Vivekananda Global University",
];

const inputCls = (hasError) =>
  `w-full h-[40px] rounded-2xl px-4 bg-transparent text-white text-[14px] outline-none font-[Outfit] placeholder:text-white/60 ${
    hasError
      ? "border border-red-400"
      : "border border-white/30 focus:border-white"
  }`;

export default function CounselingForm() {
  const router = useRouter();

  const [loading,  setLoading]  = useState(false);
  const [success,  setSuccess]  = useState(false);
  const [apiError, setApiError] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError(null);
    setSuccess(false);

    // ── DEVELOPMENT MODE ───────────────────────────────────────
    // localhost par sirf console.log — no DB, no CRM API call
    // Remove this block before going live
    // ──────────────────────────────────────────────────────────
    if (process.env.NODE_ENV === "development") {
      console.log("DEV MODE — form data:", data);
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        reset();
        // router.push("/thank-you");
      }, 800);
      return;
    }

    // ── PRODUCTION MODE ────────────────────────────────────────
    // Fires only when NODE_ENV === "production"
    // ──────────────────────────────────────────────────────────

    // const sourceInfo = getSourceInfo(pathname || "", params || {});
    // const pageUrl    = typeof window !== "undefined" ? window.location.href : "";

    // const payload = {
    //   name:        data.name,
    //   mobile:      data.phone,
    //   email:       data.email,
    //   city:        data.city,
    //   data_from:   pageUrl,
    //   source_id:   sourceInfo.source_id,
    //   source_name: sourceInfo.source_name,
    //   supplier_id: sourceInfo.supplier_id,
    //   page_url:    pageUrl,
    // };

    // try {
    //   const saveToFirebase = async () => {
    //     try {
    //       const leadsCollection = collection(db, "form_leads");
    //       await addDoc(leadsCollection, {
    //         name:            data.name,
    //         email:           data.email,
    //         city:            data.city,
    //         mobile:          data.phone,
    //         university_name: data.university || "",
    //         course:          data.course || "",
    //         data_from:       pageUrl,
    //         source_id:       sourceInfo.source_id,
    //         source_name:     sourceInfo.source_name,
    //         timestamp:       serverTimestamp(),
    //         crm_status:      "pending",
    //       });
    //     } catch (firebaseError) {
    //       console.error("Firebase save error:", firebaseError);
    //     }
    //   };

    //   const [response] = await Promise.all([
    //     fetch("https://pujariwala.in/bai_crm_api_integrate/bai_crm_website_lead_post", {
    //       method:  "POST",
    //       headers: {
    //         "Content-Type":  "application/json",
    //         "ENQ-BOOKS-KEY": process.env.PUJARIWALA_API_KEY,
    //       },
    //       body:     JSON.stringify(payload),
    //       redirect: "manual",
    //     }),
    //     saveToFirebase(),
    //   ]);

    //   const result = await response.json().catch(() => null);

    //   if (!response.ok) {
    //     throw new Error(result?.message || `CRM API failed: ${response.status}`);
    //   }

    //   setSuccess(true);
    //   reset();
    //   router.push("/thank-you");

    // } catch (err) {
    //   console.error("CounselingForm submit error:", err);
    //   setApiError(err.message || "Something went wrong. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section
      className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 mb-16 font-[Outfit] bg-cover bg-center"
      style={{ backgroundImage: "url('/counclling-form-bcg.jpg')" }}
    >

      <h2 className="text-[28px] md:text-[48px] font-bold mb-8 max-w-[909px] text-[#FFD23F]">
        Speak to our Admission Counselor to know more about our Programs/ Universities.
      </h2>

      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input {...register("name")}   type="text" placeholder="Enter Your Name*"          className={inputCls(errors.name)}   />
        <input {...register("email")}  type="text" placeholder="Enter Your Mail Id*"        className={inputCls(errors.email)}  />
        <input {...register("city")}   type="text" placeholder="Enter Your Location*"       className={inputCls(errors.city)}   />
        <input {...register("phone")}  type="text" placeholder="Enter Your Mobile Number*"  className={inputCls(errors.phone)}  />
        <input {...register("course")} type="text" placeholder="Enter Your Programme*"      className={inputCls(errors.course)} />

        {/* University dropdown */}
        <div className="relative">
          <select
            {...register("university")}
            defaultValue=""
            className={`${inputCls(errors.university)} appearance-none cursor-pointer pr-10 text-white/60`}
          >
            <option value="" disabled style={{ color: "#1a1a1a" }}>Not Decided Yet</option>
            {FORM_UNIVERSITIES.map((u) => (
              <option key={u} value={u} style={{ color: "#1a1a1a" }}>{u}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Validation errors */}
      {Object.keys(errors).length > 0 && (
        <div className="mb-4 px-4 py-3 rounded-xl text-sm border border-red-400 bg-red-900/30 text-red-300">
          <p className="font-semibold mb-1">Please fix the following:</p>
          <ul className="list-disc list-inside space-y-0.5">
            {Object.values(errors).map((e, i) => (
              <li key={i}>{e?.message}</li>
            ))}
          </ul>
        </div>
      )}

      {/* API error */}
      {apiError && (
        <div className="mb-4 px-4 py-3 rounded-xl text-sm border border-red-400 bg-red-900/30 text-red-300">
          {apiError}
        </div>
      )}

      {/* Success message */}
      {success && (
        <div className="mb-4 px-4 py-3 rounded-xl text-sm border border-green-400 bg-green-900/30 text-green-300">
          Submitted successfully! Redirecting…
        </div>
      )}

      {/* Submit button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
          className={`w-[328px] h-[50px] rounded-2xl bg-[#FFD23F] text-[#012f35] text-[16px] font-semibold border border-[#e6b800] transition-all duration-200 hover:bg-[#f5c800] hover:-translate-y-px ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {loading ? "Submitting…" : "Find Best University"}
        </button>
      </div>

    </section>
  );
}