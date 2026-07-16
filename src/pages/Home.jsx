import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Play, X, Users, Building2, Rocket, HardHat, MapPin, Home as HomeIcon, Palette, Coins } from 'lucide-react'
import R1Image from '../assets/images/R1-scaled.jpg'
import R3Image from '../assets/images/R3-scaled.png'
import ashokResidence from '../assets/images/ASHOK-RESIDENCE-DEHRI-scaled.png'
import deepakHospital from '../assets/images/MR.DEEPAK-SINGH-HOSPITAL-scaled.png'
import kalendraResidence from '../assets/images/Mr.Kalendra-kumar-F6-scaled.jpg'
import oneOneScaled from '../assets/images/1-1-scaled.png'

const projectsData = [
  {
    title: "Residential: Ashok Residence, Dehri",
    image: ashokResidence,
    category: "Residential Architecture",
    challenge: "Designing a high-density, multi-generation modern villa with narrow street frontage while ensuring light and Vastu compliance.",
    solution: "Created a central lightwell and skylight court to pull natural light deep into all three floors, with custom front jali work for ventilation.",
    results: [
      "100% Vastu-compliant layout and entry placement.",
      "Natural lighting in every corner of the house.",
      "Stunning high-fidelity front elevation that stands out.",
      "Construction completed within estimated budget."
    ],
    link: "/projects"
  },
  {
    title: "Commercial: Mr. Deepak Singh Hospital",
    image: deepakHospital,
    category: "Commercial & Healthcare",
    challenge: "Creating an efficient, sterile, and traffic-optimized hospital layout on a highly congested corner plot with restricted access points.",
    solution: "Designed a zoning system separating emergency zones, outpatient clinics, and private wards, using curtain wall glazing for insulation.",
    results: [
      "Streamlined emergency transit workflows.",
      "35% reduction in cooling loads through low-E glass.",
      "120-bed state-of-the-art diagnostic and surgical wings.",
      "Fully compliant with fire safety and clinical zoning codes."
    ],
    link: "/projects"
  },
  {
    title: "Residential: Kalendra Kumar Villa",
    image: kalendraResidence,
    category: "Luxury Villa",
    challenge: "Balancing the family’s request for a luxury modern elevation with a large lawn while preserving the site’s old heritage trees.",
    solution: "Adopted an L-shaped ground footprint wrapping around the landscape, integrating raw stone finishes and large sliding glass walls.",
    results: [
      "Preserved all heritage trees on the site layout.",
      "Seamless indoor-outdoor connectivity.",
      "Double-height living spaces with natural thermal ventilation.",
      "Integrated smart-home automation for climate control."
    ],
    link: "/projects"
  },
  {
    title: "Urban Architecture: Modern Residential Elevation",
    image: oneOneScaled,
    category: "Urban Residential",
    challenge: "Developing a contemporary front elevation for a compact urban row house with strict height and setback limits.",
    solution: "Utilized a combination of cantilevered slabs, louvers, and warm wooden accents to create visual depth and private balconies.",
    results: [
      "Maximized carpet area while keeping visual setbacks.",
      "Louvers provide sun protection and private ventilation.",
      "Stunning night illumination design with integrated LEDs.",
      "Highly praised landmark design in the neighborhood."
    ],
    link: "/projects"
  }
]

const slides = [
  {
    id: 1,
    title: 'Modern Architecture for Every Project',
    subtitle: 'Design, build, and deliver award-winning spaces with expert craftsmanship.',
    image: R1Image,
    label: 'Residential & commercial excellence',
  },
  {
    id: 2,
    title: 'Elegant Villas & Luxury Homes',
    subtitle: 'Create a bold statement with timeless planning and premium finishes.',
    image: R3Image,
    label: 'Premium villa design',
  },
  {
    id: 3,
    title: 'Sustainable Spaces That Inspire',
    subtitle: 'Functional architecture with clean lines, light, and superior quality.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1726&q=80',
    label: 'Contemporary design solutions',
  },
]

const videoTestimonials = [
  {
    id: 1,
    name: 'Vikram Malhotra',
    role: 'Malhotra Residency, Villa Client',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/5K177E3xXbY',
  },
  {
    id: 2,
    name: 'Sonu Tiwari',
    role: 'Tiwari Commercial & Export Hub',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/Sceg_6P13g4',
  },
]

const textTestimonials = [
  {
    id: 1,
    quote: 'The design process for our dream home was smooth and transparent. Ar. Kumar Shanu understood our vision perfectly, combining contemporary luxury with Vastu principles. The final results are breathtaking.',
    name: 'Neha Gupta',
    role: 'Boutique Hotelier & Villa Client',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 2,
    quote: 'We hired Vastusagaram for our corporate headquarters. Their attention to lighting, smart space utilization, and acoustic management exceeded our high expectations. A fantastic design firm!',
    name: 'Rahul Verma',
    role: 'Founder, TechOps Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 3,
    quote: 'Their landscaping and villa integration is outstanding. Kumar Shanu has deep knowledge of balancing beauty, function, and local regulations. They made our home feel like a resort.',
    name: 'Anjali Sharma',
    role: 'Residential Client',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 4,
    quote: 'Extremely professional team. Their 3D visualization and value engineering helped us save over 15% on procurement without compromising on any design elements. Highly recommended!',
    name: 'Priya Singh',
    role: 'Luxury Apartment Owner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  },
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const [showPopup, setShowPopup] = useState(true)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [activeVideoUrl, setActiveVideoUrl] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeProj, setActiveProj] = useState(0)
  const [isProjPaused, setIsProjPaused] = useState(false)

  useEffect(() => {
    if (isProjPaused) return
    const timer = setInterval(() => {
      setActiveProj((current) => (current + 1) % projectsData.length)
    }, 1000)
    return () => clearInterval(timer)
  }, [isProjPaused])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % textTestimonials.length)
    }, 6000)
    return () => clearInterval(testimonialTimer)
  }, [])

  const currentSlide = slides[activeIndex]

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-950/30">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Special Offer</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">Get a free design consultation</h2>
                <p className="mt-4 text-slate-600">
                  Share your project details and our team will reach out with a tailored plan and quote.
                </p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="rounded-full border border-slate-200 bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setShowPopup(false)
              }}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-600">
                  Name
                  <input type="text" required className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-slate-600">
                  Phone
                  <input type="tel" required className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200" placeholder="Phone number" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-600">
                  Email
                  <input type="email" required className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200" placeholder="Email address" />
                </label>
                <label className="space-y-2 text-sm text-slate-600">
                  Project Type
                  <select className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Interior</option>
                    <option>Landscape</option>
                  </select>
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-600">
                Message
                <textarea rows={4} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200" placeholder="Tell us about your project"></textarea>
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-orange-400">
                  Send Request
                </button>
                <button type="button" onClick={() => setShowPopup(false)} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:bg-slate-200">
                  Maybe Later
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden">
        <div className="relative h-[85vh] md:h-[88vh]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover brightness-75" />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-slate-950/80"></div>

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-4xl text-center text-white">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-orange-200">
                {currentSlide.label}
              </span>
              <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{currentSlide.title}</h1>
              <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto">{currentSlide.subtitle}</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
                >
                  Get A Quote
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.05em] text-white transition hover:bg-white hover:text-slate-900"
                >
                  View Projects <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 w-3 rounded-full transition ${index === activeIndex ? 'bg-white' : 'bg-white/40'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg transition hover:bg-white/40 md:left-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg transition hover:bg-white/40 md:right-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-100 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.15),_transparent_30%),_radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.12),_transparent_35%)]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600">
                WHO WE ARE
              </div>
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">About Vastusagaram Architects</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                  VASTUSAGARAM ARCHITECTS is an architectural design studio established since 2020 offering a wide range of architectural, interior and landscape services including site master planning, value engineering and construction administration, 3D design & visualization.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  The firm operates under the guidance of Ar. Kumar Shanu. He has completed his education from NIT Calicut, Kerala and has gained in-depth knowledge in planning Interior Designing and Landscape Design.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-slate-800"
                >
                  ENQUIRY NOW
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-950 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-950 transition hover:bg-slate-50"
                >
                  OUR WORK
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2rem] bg-white p-4 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-900/5 sm:p-6">
              <div className="overflow-hidden rounded-[1.75rem] bg-slate-950/5">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural interior showcase"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-950 px-5 py-6 text-center text-white shadow-lg shadow-slate-950/10">
                  <p className="text-4xl font-bold">500+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-300">Project Done</p>
                </div>
                <div className="rounded-3xl bg-white px-5 py-6 text-center shadow-lg shadow-slate-950/10">
                  <p className="text-4xl font-bold text-slate-950">5</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Clients Rating</p>
                </div>
                <div className="rounded-3xl bg-white px-5 py-6 text-center shadow-lg shadow-slate-950/10">
                  <p className="text-4xl font-bold text-slate-950">5+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white text-slate-950 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(128,0,0,0.02),_transparent_35%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#800000]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#800000] border border-[#800000]/20">
              Our Expertise
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Architecture that balances beauty, function, and value
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We design premium homes, offices, and landscapes with a focus on craftsmanship, sustainability, and seamless execution from concept to completion.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#800000]/5 text-[#800000] mb-6 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                  <HomeIcon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#800000] transition-colors duration-300">Residential Design</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Beautiful homes with intelligent planning, elegant interiors, and thoughtful materials that elevate daily living.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#800000] transition-all duration-300" />
            </div>
            
            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#800000]/5 text-[#800000] mb-6 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                  <Building2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#800000] transition-colors duration-300">Commercial Architecture</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Productive workspaces and premium retail environments designed for brand impact, comfort, and efficiency.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#800000] transition-all duration-300" />
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#800000]/5 text-[#800000] mb-6 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#800000] transition-colors duration-300">Interior & Landscape</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Cohesive interior styling and landscape planning that connect your indoor atmosphere with outdoor living.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#800000] transition-all duration-300" />
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#800000]/5 text-[#800000] mb-6 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                  <HardHat size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#800000] transition-colors duration-300">Project Management</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Clear timelines, vendor coordination, and construction oversight so your project is delivered on time and on budget.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#800000] transition-all duration-300" />
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#800000]/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#800000]/5 text-[#800000] mb-6 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                  <Coins size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#800000] transition-colors duration-300">Value Engineering</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Smart design decisions that reduce costs while maintaining high quality, performance, and visual impact.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#800000] transition-all duration-300" />
            </div>
          </div>

        </div>
      </section>

      <section className="py-12 bg-white border-y border-slate-100 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(194,106,58,0.03),_transparent_35%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center rounded-[2.5rem] bg-slate-50 border border-slate-100 p-10 sm:p-14 shadow-lg shadow-slate-100/50">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#c26a3a]">
              Trusted Architecture Partner
            </p>
            <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Designing spaces that feel modern, timeless and ready for tomorrow.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#c26a3a] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-orange-700/10 transition-all hover:bg-[#b05d30] hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-slate-800 transition-all hover:bg-slate-50 hover:border-slate-400 hover:scale-105"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Latest Projects Carousel Section */}
      <section className="py-14 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_top_right,_rgba(128,0,0,0.03),_transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_bottom_left,_rgba(194,106,58,0.03),_transparent_50%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
              Success Stories
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              From Concept Designs into <span className="text-[#800000]">Architectural Masterpieces</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              When spaces demand creativity and precision, we deliver practical architectural designs that create functional beauty and measurable comfort.
            </p>
          </div>

          {/* Active Card Frame */}
          <div 
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-500 hover:shadow-2xl"
            onMouseEnter={() => setIsProjPaused(true)}
            onMouseLeave={() => setIsProjPaused(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Image side */}
              <div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gradient-to-tr from-[#800000]/10 to-[#c26a3a]/10 p-2 border border-slate-100/50 shadow-inner group">
                <img
                  src={projectsData[activeProj].image}
                  alt={projectsData[activeProj].title}
                  className="w-full h-full object-cover rounded-[1.75rem] shadow-md transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-100 text-[#800000] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {projectsData[activeProj].category}
                </span>
              </div>

              {/* Content side */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                  {projectsData[activeProj].title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Challenge */}
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Challenge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {projectsData[activeProj].challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">The Solution:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {projectsData[activeProj].solution}
                    </p>
                  </div>
                </div>

                {/* Results checklist */}
                <div className="space-y-3 pt-2">
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Results:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectsData[activeProj].results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button & Indicator Dots */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-slate-100">
                  <Link
                    to={projectsData[activeProj].link}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full border border-[#c26a3a] text-[#c26a3a] font-semibold text-sm hover:bg-[#c26a3a] hover:text-white transition-all duration-300 self-start"
                  >
                    Read Full Case Study
                    <ArrowRight size={14} />
                  </Link>

                  {/* Pagination Dots */}
                  <div className="flex items-center gap-2 justify-start sm:justify-end">
                    {projectsData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveProj(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeProj === idx ? 'w-8 bg-[#800000]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-12 bg-white text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: FAQ list */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
                  FAQ's
                </span>
                <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Answers to the most common questions about our design process, project delivery, and architectural services.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'Why choose Vastusagaram Architects for your project?',
                    answer: 'We combine modern design, careful planning, and reliable execution to create spaces that feel premium, functional, and built to last.',
                  },
                  {
                    question: 'What kinds of projects does your team handle?',
                    answer: 'We design residential homes, luxury villas, commercial buildings, and integrated interior + landscape solutions for every scale.',
                  },
                  {
                    question: 'How does your project process work?',
                    answer: 'We start with site study and concept planning, then move to detailed design, approvals, construction supervision, and final handover.',
                  },
                  {
                    question: 'Do you provide turnkey architecture and interior services?',
                    answer: 'Yes, we offer end-to-end services including design, material selection, contractor coordination, and project management.',
                  },
                  {
                    question: 'How can I get a quote for my home or office?',
                    answer: 'Simply contact us through the form or call us directly, and we will schedule a consultation to understand your needs and budget.',
                  },
                ].map((item, index) => (
                  <button
                    key={item.question}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-left shadow-sm transition hover:border-orange-400 hover:bg-orange-50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-950">{item.question}</p>
                      </div>
                      <ChevronDown className={`h-6 w-6 text-orange-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </div>
                    {openFaq === index && (
                      <div className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-5 text-slate-700">
                        <p className="text-base leading-7">{item.answer}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Consultation Form */}
            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-[#c26a3a]/30 bg-white overflow-hidden shadow-xl shadow-slate-200/50 h-full flex flex-col justify-between">
                {/* Card Header */}
                <div className="bg-gradient-to-b from-[#f2f8fc] to-white border-b border-slate-100 p-4 sm:px-6 sm:py-4 flex-shrink-0">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Get a Free Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Share your details — we will reach out within 24 hours.
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                  {formSubmitted ? (
                    <div className="py-8 text-center space-y-4 my-auto flex-grow flex flex-col justify-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Inquiry Submitted!</h4>
                      <p className="text-xs text-slate-500 max-w-xs mx-auto">
                        Thank you for contacting us. Our design experts will reach out shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 text-xs font-semibold text-[#c26a3a] hover:underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        const formData = new FormData(e.currentTarget)
                        const name = formData.get('fullName')
                        const email = formData.get('email')
                        const phone = formData.get('phone')
                        const service = formData.get('service')
                        const message = formData.get('message')

                        const whatsappMessage = `*New Consultation Inquiry*\n\n` +
                          `*Name:* ${name}\n` +
                          `*Email:* ${email}\n` +
                          `*Mobile Number:* +91 ${phone}\n` +
                          `*Service Interested:* ${service}\n` +
                          `*Message:* ${message}`

                        const encodedMessage = encodeURIComponent(whatsappMessage)
                        // Phone number to send WhatsApp message to
                        const businessPhone = '919876543210'

                        // Open WhatsApp in a new tab
                        window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank')

                        setFormSubmitted(true)
                      }}
                      className="flex-grow flex flex-col space-y-3.5"
                    >
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-900">
                          Full name <span className="text-[#c26a3a]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#c26a3a] focus:ring-1 focus:ring-[#c26a3a]/20"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-900">
                          Email address <span className="text-[#c26a3a]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#c26a3a] focus:ring-1 focus:ring-[#c26a3a]/20"
                          placeholder="you@email.com"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-900">
                          Mobile number <span className="text-[#c26a3a]">*</span>
                        </label>
                        <div className="mt-1 flex rounded-xl border border-slate-200 bg-white focus-within:border-[#c26a3a] focus-within:ring-1 focus-within:ring-[#c26a3a]/20 overflow-hidden">
                          <div className="flex items-center gap-1 px-2.5 py-2 bg-slate-50/50 border-r border-slate-200 text-slate-700 text-sm font-medium select-none">
                            <span>+91</span>
                            <ChevronDown size={12} className="text-slate-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            pattern="[0-9]{10}"
                            required
                            className="w-full bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                            placeholder="9999999999"
                          />
                        </div>
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-900">
                          Service interested in <span className="text-[#c26a3a]">*</span>
                        </label>
                        <div className="relative mt-1">
                          <select
                            required
                            name="service"
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#c26a3a] focus:ring-1 focus:ring-[#c26a3a]/20"
                            defaultValue=""
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="residential">Residential Design</option>
                            <option value="commercial">Commercial Architecture</option>
                            <option value="interior">Interior & Landscape</option>
                            <option value="turnkey">Turnkey Project Management</option>
                            <option value="consultation">Design Consultation</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDown size={16} className="text-slate-500" />
                          </div>
                        </div>
                      </div>

                      {/* Message (stretches to fill space) */}
                      <div className="flex-grow flex flex-col min-h-[90px]">
                        <label className="block text-xs font-semibold text-slate-900">
                          Your message <span className="text-[#c26a3a]">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          className="mt-1 w-full flex-grow rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#c26a3a] focus:ring-1 focus:ring-[#c26a3a]/20 resize-none min-h-[60px]"
                          placeholder="Briefly describe your project..."
                        />
                      </div>

                      <div className="space-y-2 pt-2 flex-shrink-0">
                        <p className="text-[10px] leading-normal text-slate-500">
                          By submitting, you agree that we may contact you. We respect your privacy.
                        </p>

                        <button
                          type="submit"
                          className="w-full rounded-xl bg-[#c26a3a] py-3 text-center font-bold text-white shadow-md shadow-orange-700/10 transition hover:bg-[#b05d30] focus:outline-none focus:ring-2 focus:ring-[#c26a3a]/30"
                        >
                          Submit Inquiry
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f4] border-y border-[#c26a3a]/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 justify-items-center">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 w-full max-w-[200px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#c26a3a]/15 text-[#c26a3a] shadow-sm">
                <Users size={24} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">1300+</p>
                <p className="text-xs text-slate-500 font-medium">Happy Clients</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 w-full max-w-[200px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#c26a3a]/15 text-[#c26a3a] shadow-sm">
                <Building2 size={24} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">8000+</p>
                <p className="text-xs text-slate-500 font-medium">Projects Done</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 w-full max-w-[200px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#c26a3a]/15 text-[#c26a3a] shadow-sm">
                <Rocket size={24} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">14+</p>
                <p className="text-xs text-slate-500 font-medium">Years In Business</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 w-full max-w-[200px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#c26a3a]/15 text-[#c26a3a] shadow-sm">
                <HardHat size={24} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">60+</p>
                <p className="text-xs text-slate-500 font-medium">Team Members</p>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-4 w-full max-w-[200px] col-span-2 md:col-span-1 md:justify-self-center lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#c26a3a]/15 text-[#c26a3a] shadow-sm">
                <MapPin size={24} strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">4</p>
                <p className="text-xs text-slate-500 font-medium">Our Locations</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 text-slate-950 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(194,106,58,0.05),_transparent_40%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#c26a3a] uppercase block">
                WHAT OUR CLIENTS SAY ABOUT VASTUSAGARAM ARCHITECTS
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Over 500+ Satisfied Clients and Growing
              </h2>
            </div>
            <div className="flex flex-col sm:items-start lg:items-end gap-3 min-w-[280px]">
              <div className="flex items-center gap-4">
                <a
                  href="#consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('fullName')?.focus();
                    window.scrollTo({
                      top: (document.getElementById('fullName')?.getBoundingClientRect().top || 0) + window.scrollY - 150,
                      behavior: 'smooth'
                    });
                  }}
                  className="text-sm font-bold text-[#c26a3a] hover:text-[#b05d30] transition flex items-center gap-1.5 group"
                >
                  Read More Reviews
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <p className="text-xs text-slate-500">Read our reviews from all over the world.</p>
              
              {/* Reviews Badges Grid */}
              <div className="flex flex-wrap items-center gap-4 mt-1 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                {/* Google badge */}
                <div className="flex items-center gap-1.5 border-r border-slate-100 pr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.48 15 0 12 0 7.35 0 3.37 2.67 1.45 6.57l3.87 3a7.18 7.18 0 0 1 6.68-4.53z" />
                    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.43a5.5 5.5 0 0 1-2.39 3.62l3.87 3c2.26-2.09 3.58-5.16 3.58-8.77z" />
                    <path fill="#FBBC05" d="M5.32 14.43A7.16 7.16 0 0 1 4.9 12c0-.85.13-1.67.37-2.43l-3.87-3A11.94 11.94 0 0 0 0 12c0 2.01.5 3.91 1.4 5.61l3.92-3.18z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.87-3c-1.08.72-2.46 1.16-4.09 1.16-3.11 0-5.74-2.1-6.68-4.93l-3.92 3.18C3.37 21.33 7.35 24 12 24z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-800 leading-none">Google</span>
                    <span className="text-[8px] text-slate-400">Reviews</span>
                  </div>
                  <div className="flex text-amber-400 text-[8px] ml-1">★★★★★</div>
                </div>

                {/* Facebook badge */}
                <div className="flex items-center gap-1.5 border-r border-slate-100 pr-3">
                  <svg className="h-4 w-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#1877F2] leading-none">facebook</span>
                    <span className="text-[8px] text-slate-400">Reviews</span>
                  </div>
                  <div className="flex text-[#1877F2] text-[8px] ml-1">★★★★★</div>
                </div>

                {/* Houzz badge */}
                <div className="flex items-center gap-1.5 border-r border-slate-100 pr-3">
                  <svg className="h-4 w-4 text-[#7AC143]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.28 2.25L5.72 6.45v11.1l8.56 4.2V13.5l-3.43-1.68V8.67l3.43 1.68V2.25zM18.28 13.5l-4 1.96v4.29l4-1.96V13.5z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-800 leading-none">houzz</span>
                    <span className="text-[8px] text-slate-400">4.9 Star</span>
                  </div>
                  <div className="flex text-[#7AC143] text-[8px] ml-1">★★★★★</div>
                </div>

                {/* Trustpilot badge */}
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.05 9.05h-6.84L13.1 2.37a1.2 1.2 0 00-2.2 0L8.79 9.05H1.95a1.2 1.2 0 00-.7 2.17l5.54 4.02-2.11 6.68a1.2 1.2 0 001.85 1.34l5.57-4.11 5.57 4.11a1.2 1.2 0 001.85-1.34l-2.11-6.68 5.54-4.02a1.2 1.2 0 00-.7-2.17z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-800 leading-none">Trustpilot</span>
                    <span className="text-[8px] text-slate-400">Rated Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            
            {/* Video Testimonial 1 */}
            <div className="md:col-span-3 flex flex-col h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={videoTestimonials[0].image}
                    alt={videoTestimonials[0].name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Orange Play Button */}
                  <button
                    onClick={() => setActiveVideoUrl(videoTestimonials[0].videoUrl)}
                    className="absolute bottom-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#c26a3a] text-white shadow-lg shadow-orange-700/20 transition-all duration-300 hover:scale-110 hover:bg-[#b05d30] focus:outline-none"
                    aria-label={`Play video testimonial from ${videoTestimonials[0].name}`}
                  >
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </button>
                </div>
                <div className="p-5 bg-white flex-grow flex flex-col justify-center border-t border-slate-50">
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{videoTestimonials[0].name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{videoTestimonials[0].role}</p>
                </div>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="md:col-span-3 flex flex-col h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={videoTestimonials[1].image}
                    alt={videoTestimonials[1].name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Orange Play Button */}
                  <button
                    onClick={() => setActiveVideoUrl(videoTestimonials[1].videoUrl)}
                    className="absolute bottom-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#c26a3a] text-white shadow-lg shadow-orange-700/20 transition-all duration-300 hover:scale-110 hover:bg-[#b05d30] focus:outline-none"
                    aria-label={`Play video testimonial from ${videoTestimonials[1].name}`}
                  >
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </button>
                </div>
                <div className="p-5 bg-white flex-grow flex flex-col justify-center border-t border-slate-50">
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{videoTestimonials[1].name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{videoTestimonials[1].role}</p>
                </div>
              </div>
            </div>

            {/* Text Testimonial Slider Card */}
            <div className="md:col-span-6 flex flex-col h-full">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-slate-100 flex flex-col justify-between h-full min-h-[350px] relative overflow-hidden group">
                
                {/* Large decorative quotation mark */}
                <div className="absolute -top-4 -right-2 text-slate-100 text-[180px] font-serif leading-none select-none pointer-events-none transition-colors group-hover:text-orange-50">
                  ”
                </div>

                <div className="relative z-10 flex-grow flex flex-col justify-center">
                  <p className="text-lg md:text-xl font-medium text-slate-700 italic leading-relaxed transition-all duration-500">
                    “{textTestimonials[testimonialIndex].quote}”
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center">
                    <img
                      src={textTestimonials[testimonialIndex].avatar}
                      alt={textTestimonials[testimonialIndex].name}
                      className="h-12 w-12 rounded-full object-cover mr-4 ring-4 ring-slate-50"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                        {textTestimonials[testimonialIndex].name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {textTestimonials[testimonialIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Manual Navigation Dots */}
                  <div className="flex items-center gap-1.5">
                    {textTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setTestimonialIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                          testimonialIndex === index ? 'w-5 bg-[#c26a3a]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Show testimonial page ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Video Walkthrough Modal */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm transition-all duration-300">
            <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-black shadow-2xl">
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition-colors focus:outline-none"
                aria-label="Close video player"
              >
                <X size={20} />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`${activeVideoUrl}?autoplay=1`}
                  title="Vastusagaram Client Showcase Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
