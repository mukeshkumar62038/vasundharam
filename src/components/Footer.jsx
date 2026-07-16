import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import LogoImage from '../assets/images/png-02.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={LogoImage} alt="Vastusagaram logo" className="h-12 w-12 rounded-full bg-white/10 object-cover" />
              <span className="text-3xl font-bold text-white">Vastusagaram</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium architecture and interior design firm delivering modern living and commercial spaces with trust, quality, and style.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <Phone size={18} className="text-orange-400" />
              <a href="tel:+918092352394" className="hover:text-white transition">+91 8092352394</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Residential Design</li>
              <li>Commercial Architecture</li>
              <li>Interior Design</li>
              <li>Landscape Planning</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Explore</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                <a href="mailto:vastusagaram@gmail.com" className="hover:text-white transition">vastusagaram@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 mt-1" />
                <span>New Sidhauli, Dalmianagar District - Rohtas Bihar 821305</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-slate-300">
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-400 hover:text-orange-400"><Facebook size={20} /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-400 hover:text-orange-400"><Twitter size={20} /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-400 hover:text-orange-400"><Linkedin size={20} /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-orange-400 hover:text-orange-400"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Vastusagaram Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
