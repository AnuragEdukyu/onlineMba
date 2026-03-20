"use client";
import { useRef, useEffect, useState, useMemo } from "react";

const HIRING_DATA = [
  { name: "Accenture",     image: "/accenture.png"     },
  { name: "Capgemini",     image: "/capgemini.png"     },
  { name: "Flipkart",      image: "/flipkart.png"      },
  { name: "HDFC",          image: "/hdfc2.png"         },
  { name: "HCL",           image: "/hcl.png"           },
  { name: "Hero",          image: "/hero.png"          },
  { name: "IBM",           image: "/ibm.png"           },
  { name: "Indigo",        image: "/indigo.png"        },
  { name: "McAfee",        image: "/mcafee.png"        },
  { name: "OYO",           image: "/oyo.png"           },
  { name: "Paytm",         image: "/paytm - Copy.png"  },
  { name: "ProKarma",      image: "/prokarama.png"     },
  { name: "Tech Mahindra", image: "/tech-mahindra.png" },
  { name: "Whirlpool",     image: "/whirlpool.png"     },
  { name: "Wipro",         image: "/wipro.png"         },
];

export default function HiringPartners() {
  const partners = HIRING_DATA;

  const logos = useMemo(
    () => [...partners, ...partners, ...partners, ...partners, ...partners],
    [partners]
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
    if (!track || !container || partners.length === 0) return;

    let offset         = 0;
    let singleSetWidth = 0;

    function computeWidth() {
      const items = Array.from(track.children);
      if (items.length === 0) return;
      const firstSet = items.slice(0, partners.length);
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
      track.style.transform = `translateX(${Math.round(offset)}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", computeWidth);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", computeWidth);
      lastTimeRef.current = null;
    };
  }, [logos, partners.length]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  return (
    <section className="pt-5 pb-5 px-4 md:px-10 md:pt-14 md:pb-14 font-[Outfit]">

      <h2 className="text-[28px] md:text-[48px] font-bold mb-2 text-[#025E68]">
        Hiring Partners
      </h2>
      <div className="h-px w-full bg-gray-300 mb-6" />

      <div
        className="relative overflow-hidden"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-4 whitespace-nowrap will-change-transform"
          style={{
            transform: "translateX(0px)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center flex-shrink-0 w-[240px] h-[107px] rounded-xl"
              style={{ border: "0.5px solid #025E68" }}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="object-contain w-[80%] h-[80%]"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
