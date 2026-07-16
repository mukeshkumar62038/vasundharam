import React from 'react'

export default function Achievements() {
  return (
    <div className="py-24 bg-white text-slate-900 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#800000]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#800000] border border-[#800000]/20">
            Our Milestones
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Achievements
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Celebrating our journey of excellence, awards, and milestones since 2020.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm text-center">
            <div className="text-4xl font-extrabold text-[#800000] mb-2">500+</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Projects Completed</h3>
            <p className="text-slate-500 text-sm">Successfully delivered residential, commercial, and landscape projects.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm text-center">
            <div className="text-4xl font-extrabold text-[#800000] mb-2">5★</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Client Rating</h3>
            <p className="text-slate-500 text-sm">Consistently recognized for design quality, execution, and client satisfaction.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm text-center">
            <div className="text-4xl font-extrabold text-[#800000] mb-2">5+</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Years of Service</h3>
            <p className="text-slate-500 text-sm">Providing top-tier design consultancy and turnkey architectural solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
