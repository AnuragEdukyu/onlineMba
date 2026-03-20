"use client";
import { useRef, useEffect, useState, useMemo } from "react";

const ACCREDITATION_DATA = [
  { name: "IACE",  image: "/iace.jpg"  },
  { name: "NAAC",  image: "/naac.png"  },
  { name: "AICTE", image: "/aicte.png" },
  { name: "WES",   image: "/wes.png"   },
  { name: "NIRF",  image: "/nirf.png"  },
  { name: "UKAS",  image: "/ukas.png"  },
  { name: "IACBE", image: "/iacbe.png" },
  { name: "AACSB", image: "/aacsb.png" },
];

export default function Accreditations() {
  const accrs = ACCREDITATION_DATA;

  const logos = useMemo(
    () => [...accrs, ...accrs, ...accrs, ...accrs, ...accrs, ...accrs, ...accrs],
    [accrs]
  );

  const trackRef     = useRef(null);
  const containerRef = useRef(null);
  const rafRef       = useRef(null);
  const lastTimeRef  = useRef(null);
  const isPausedRef  = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const speed = 80;
  const GAP   = 16;

  useEffect(() => {
    const track     = trackRef.current;
    const container = containerRef.current;
    if (!track || !container || accrs.length === 0) return;

    let offset         = 0;
    let singleSetWidth = 0;

    function computeWidth() {
      const items = Array.from(track.children);
      if (items.length === 0) return;
      const firstSet = items.slice(0, accrs.length);
      singleSetWidth = firstSet.reduce((sum, el) => {
        const rect = el.getBoundingClientRect();
        return sum + rect.width + GAP;
      }, 0);
    }

    computeWidth();

    const step = (time) => {
      if (isPausedRef.current) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;
      offset -= speed * dt;
      if (Math.abs(offset) >= singleSetWidth) offset += singleSetWidth;
      track.style.transform = `translateX(${offset}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", computeWidth);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", computeWidth);
      lastTimeRef.current = null;
    };
  }, [logos, accrs.length]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <div
        className="rounded-2xl p-6 md:p-8 overflow-hidden"
        style={{ background: "#025E68" }}
      >

        <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#FFD23F]">
          Our Accreditations &amp; Recognitions
        </h2>
        <p className="text-[14px] md:text-[20px] mb-8 text-white/75">
          Endorsements of Excellence, Recognitions and Accreditations Celebrating Academic Quality
        </p>

        <div
          className="relative overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-4"
            style={{ whiteSpace: "nowrap", transform: "translateX(0px)", willChange: "transform" }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center flex-shrink-0"
                style={{
                  width: "142px",
                  height: "110px",
                  background: "white",
                  borderRadius: "16px",
                  border: "1px solid #FFFFFF",
                }}
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  style={{ objectFit: "contain", width: "80%", height: "80%" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}