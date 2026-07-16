import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="py-20 bg-white text-slate-900 relative overflow-hidden min-h-screen">
      {/* Background vector wave decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C30,40 70,60 100,50 L100,100 L0,100 Z" fill="#800000" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <Link to="/" className="hover:text-slate-900 transition">Home</Link>
              <span>&gt;</span>
              <span className="text-[#800000]">About Us</span>
            </div>

            {/* Badge */}
            <span className="inline-flex rounded-full bg-[#800000]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#800000] border border-[#800000]/20">
              Best Architecture Studio in Bihar
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
              About <span className="text-[#800000]">Vastusagaram</span> Architects
            </h1>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                We are a premier architectural design studio established in 2020, offering a wide range of architectural, interior, and landscape services. We operate under the expert guidance of Ar. Kumar Shanu (NIT Calicut Alumnus).
              </p>
              <p>
                As a team, we always strive to bridge the gap between imagination and physical reality. We combine modern design principles with local planning regulations and Vastu principles to deliver beautiful, functional, and durable spaces.
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#800000] bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#800000] transition-all hover:bg-[#800000] hover:text-white"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-slate-100 max-w-xl">
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#800000]">2020</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Established</p>
              </div>
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#800000]">500+</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Happy Clients</p>
              </div>
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#800000]">10+</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Expert Team</p>
              </div>
            </div>

          </div>

          {/* Right Column: Overlapping Images */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Background pattern circles */}
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-slate-50 border border-slate-200/50 -z-10" />
            
            {/* Large background image card (Founder) */}
            <div className="relative w-[85%] ml-auto rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 aspect-[4/5] bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Principal Architect Ar. Kumar Shanu"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Small overlapping image card (Team) */}
            <div className="absolute bottom-[-20px] left-0 w-[55%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-50 z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=375&q=80"
                alt="Vastusagaram Design Team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
