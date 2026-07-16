import React from 'react'

export default function FounderMessage() {
  return (
    <div className="py-24 bg-white text-slate-900 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-[#800000]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#800000] border border-[#800000]/20">
            Leadership
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
            Founder Message
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="relative rounded-[2rem] bg-slate-100 p-4 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80"
                alt="Ar. Kumar Shanu"
                className="w-full rounded-[1.75rem] object-cover aspect-[4/5]"
              />
              <div className="mt-4 text-center">
                <h4 className="text-xl font-bold text-slate-900">Ar. Kumar Shanu</h4>
                <p className="text-sm text-slate-500">Founder & Principal Architect</p>
                <p className="text-xs text-[#800000] font-semibold mt-1">NIT Calicut Alumnus</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900">Welcoming you to Vastusagaram</h2>
            <p className="text-slate-655 text-lg leading-relaxed">
              "At Vastusagaram, we believe architecture is more than just building structures; it is about creating environments that inspire, functional layouts that harmonize with Vastu, and spaces that stand the test of time."
            </p>
            <p className="text-slate-600 leading-relaxed">
              We look forward to partnering with you on your design journey, bringing expertise, absolute transparency, and craftsmanship to every phase of your project.
            </p>
            <div className="pt-4">
              <p className="text-slate-900 font-bold">Warm Regards,</p>
              <p className="text-[#800000] font-extrabold text-lg">Ar. Kumar Shanu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
