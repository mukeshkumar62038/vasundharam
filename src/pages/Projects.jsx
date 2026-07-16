export default function Projects() {
  const projects = [
    {
      title: 'Skyline Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: '20-story commercial office building in downtown business district.'
    },
    {
      title: 'Green Valley Residences',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      description: 'Luxury residential complex with 150 units and modern amenities.'
    },
    {
      title: 'Industrial Park',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800',
      description: '50,000 sq ft industrial facility for manufacturing operations.'
    },
    {
      title: 'Shopping Mall',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
      description: 'Modern shopping center with 200 retail spaces and entertainment complex.'
    },
    {
      title: 'Beach House',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      description: 'Custom beachfront property with sustainable design features.'
    },
    {
      title: 'Tech Campus',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      description: 'Corporate campus for leading technology company with innovation labs.'
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Explore our portfolio of successful construction projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">Contact Us for Portfolio</a>
        </div>
      </div>
    </div>
  )
}
