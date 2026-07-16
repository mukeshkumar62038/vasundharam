import { Link } from 'react-router-dom'
import { Menu, X, MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import logoImage from '../assets/images/png-02.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 px-4 py-3 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>New Sidhauli, Dalmianagar District - Rohtas Bihar 821305</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400" />
              <a href="tel:+918092352394" className="hover:text-white transition">+91 8092352394</a>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-start md:justify-end">
            <Mail className="w-4 h-4 text-orange-400" />
            <a href="mailto:vastusagaram@gmail.com" className="hover:text-white transition">vastusagaram@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Vastusagaram Logo" className="h-16 w-auto" />

            </Link>

            <div className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">
              <Link to="/" className="hover:text-slate-900 transition">Home</Link>
              <div className="relative group">
                <button className="inline-flex items-center gap-1 hover:text-slate-900 transition">
                  Company <ChevronDown className="w-4 h-4" />
                </button>
                <div className="pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 w-48 rounded-xl border border-slate-200 bg-white shadow-xl py-2">
                  <Link to="/about" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">About Us</Link>
                  <Link to="/company/mission-vision" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">Mission & Vision</Link>
                  <Link to="/company/achievements" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">Achievements</Link>
                  <Link to="/company/founder-message" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">Founder Message</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="inline-flex items-center gap-1 hover:text-slate-900 transition">
                  Our Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className="pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 w-44 rounded-xl border border-slate-200 bg-white shadow-xl py-2">
                  <Link to="/services" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">Services</Link>
                  <Link to="/projects" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">Projects</Link>
                </div>
              </div>
              <Link to="/contact" className="hover:text-slate-900 transition">Contact Us</Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-slate-50 border-t border-slate-200">
            <div className="px-4 pb-4 pt-2 space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100">Home</Link>
              
              {/* Company Mobile Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 text-left font-medium"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCompanyOpen && (
                  <div className="pl-6 space-y-1 bg-slate-100/50 rounded-xl p-1">
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100">About Us</Link>
                    <Link to="/company/mission-vision" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100">Mission & Vision</Link>
                    <Link to="/company/achievements" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100">Achievements</Link>
                    <Link to="/company/founder-message" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100">Founder Message</Link>
                  </div>
                )}
              </div>

              {/* Services Mobile Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 text-left font-medium"
                >
                  <span>Our Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-6 space-y-1 bg-slate-100/50 rounded-xl p-1">
                    <Link to="/services" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100">Services</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100">Projects</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
