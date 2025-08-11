const Services = () => {
  const services = [
    {
      id: 1,
      title: "Hilos Tensores",
      description: "Tratamiento de lifting facial con hilos tensores para rejuvenecimiento natural",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Plasma Rico En Plaquetas",
      description: "Tratamiento regenerativo con plasma rico en plaquetas para la piel",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Rellenos",
      description: "Rellenos dérmicos para restaurar volumen y suavizar arrugas",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Medicina Estética
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La medicina estética es una rama de la medicina que se enfoca en el equilibrio entre salud y belleza, 
            utilizando enfoques terapéuticos seguros para lograr una apariencia más joven y mejorar la calidad de vida, 
            sin limitar las actividades diarias.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="btn-primary w-full">
                  Conoce más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Button */}
        <div className="text-center">
          <button className="btn-secondary text-lg px-8 py-4">
            Todos Nuestros Servicios
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
