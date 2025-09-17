"use client";
import React, { useEffect, useState } from "react";

// ✅ Stats Data (now 4)
const stats = [
  { title: "Autonomous College", value: 6, suffix: "+" },
  { title: "Universities", value: 5, suffix: "+" },
  { title: "Colleges", value: 400, suffix: "+" },
  { title: "School", value: 50, suffix: "+" },
];

function SectionC() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  // ✅ Animate numbers on load
  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 16);
    });
  }, []);

  return (
    <section className="pt-10 pb-30 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-12">
        {/* Left Content */}
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            “More Than Just Software – We Build Educational Ecosystems”
          </h2>
          <p className="text-black mt-8 text-lg sm:text-xl leading-relaxed ">
            Founded with a vision to modernize traditional education, Metaponder
            goes beyond basic IT systems by creating intelligent, scalable, and
            user-friendly platforms.
          </p>

          {/* ✅ Numbered List */}
          <ol className="list-decimal pl-6 text-black mt-12 text-lg sm:text-xl leading-relaxed space-y-2">
            <li>20+ years of domain expertise</li>
            <li>End-to-end digital transformation for institutions</li>
            <li>Trusted by leading universities & schools</li>
          </ol>
        </div>

        {/* Right Staggered Stats */}
        <div className="flex gap-8 items-center">
          {/* Left column with Card 1 (center) + Card 4 (bottom) */}
          <div className="flex flex-col relative top-25 gap-15 justify-center">
            <StatCard
              title={stats[0].title}
              value={counts[0]}
              suffix={stats[0].suffix}
            />
            <StatCard
              title={stats[3].title}
              value={counts[3]}
              suffix={stats[3].suffix}
            />
          </div>

          {/* Right column with Card 2 (top) + Card 3 (bottom) */}
          <div className="flex flex-col gap-22">
            <StatCard
              title={stats[1].title}
              value={counts[1]}
              suffix={stats[1].suffix}
            />
            <StatCard
              title={stats[2].title}
              value={counts[2]}
              suffix={stats[2].suffix}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Reusable Card Component with shadow effect
function StatCard({ title, value, suffix }) {
  return (
    <div className="relative bg-[#0A1445] text-white text-center rounded-xl p-8 flex flex-col items-center justify-center shadow-lg w-35 sm:w-52 sm:h-40">
      {/* Offset Blue Edges */}
      <div className="absolute top-0 right-0 w-2 h-full bg-blue-600 rounded-r-xl"></div>

      <h3 className="text-xs uppercase tracking-wide text-gray-300">{title}</h3>
      <p className="text-4xl font-bold mt-2">
        {value}
        {suffix}
      </p>
    </div>
  );
}

export default SectionC;
