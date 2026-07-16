import { Building2, Hammer, Home, Wrench, Truck, HardHat } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Full-service commercial construction including office buildings, retail spaces, warehouses, and industrial facilities.'
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom home building, home additions, and complete residential renovations with attention to detail.'
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services for kitchens, bathrooms, and entire buildings.'
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Regular maintenance and repair services to keep your property in excellent condition year-round.'
    },
    {
      icon: Truck,
      title: 'Site Preparation',
      description: 'Complete site preparation including excavation, grading, and foundation work for new construction projects.'
    },
    {
      icon: HardHat,
      title: 'Project Consulting',
      description: 'Expert consulting services to help you plan, budget, and execute your construction project successfully.'
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Comprehensive construction solutions for all your building needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-gray-100">
              <service.icon className="w-14 h-14 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-6">Contact us to discuss your specific requirements and get a personalized quote.</p>
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  )
}
