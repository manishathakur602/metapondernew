"use client";
import React, { useEffect, useState } from "react";

// ✅ Stats Data (now 4)
const stats = [
  { title: "Educational Product", value: 250, suffix: "+" },
  { title: "Universities", value: 60, suffix: "+" },
  { title: "Colleges", value: 25, suffix: "+" },
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
    <section className="bg-white pt-10 pb-30 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-12">
        {/* Left Content */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-wide uppercase text-gray-500">
            Achievements at a Glance
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            Our Edge in Excellence
          </h2>
          <p className="text-gray-700 mt-4 text-lg sm:text-xl leading-relaxed">
            With decades of industry experience, a diverse range of products,
            and a dedicated team, we are committed to delivering exceptional
            quality and service.
          </p>
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
      {/* <div className="absolute bottom-0 right-0 h-2 w-full bg-blue-600 rounded-b-xl"></div> */}

      <h3 className="text-xs uppercase tracking-wide text-gray-300">{title}</h3>
      <p className="text-4xl font-bold mt-2">
        {value}
        {suffix}
      </p>
    </div>
  );
}

export default SectionC;
