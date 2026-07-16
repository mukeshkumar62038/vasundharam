import React from 'react'

export default function MissionVision() {
  return (
    <div className="py-24 bg-white text-slate-900 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#800000]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#800000] border border-[#800000]/20">
            Our Purpose
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Mission & Vision
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Vastusagaram is committed to designing spaces that balance beauty, function, and modern living principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Mission Card */}
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#800000] mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To deliver innovative, sustainable, and high-quality architectural designs that bring our clients' visions to life, while ensuring structural integrity and modern aesthetic excellence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#800000] mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be recognized as a leading architectural firm that shapes the future of modern living, creating timeless environments that inspire, elevate, and endure for generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
