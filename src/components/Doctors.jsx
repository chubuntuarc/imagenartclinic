const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dra. Mileidy Fernández Ribot",
      specialty: "Medicina estética y anestesiología",
      description: "Médica cubana especializada en Medicina Familiar y Anestesiología. Licencia profesional: 12345678. Con amplia experiencia en procedimientos estéticos y manejo del dolor.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Dr. Saúl León Galindo",
      specialty: "Medicina estética",
      description: "Médico cubano especializado en Medicina Familiar y Anestesiología. Licencia profesional: 87654321. Experto en tratamientos estéticos y medicina regenerativa.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Expertos Médicos Especializados
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-80 bg-gray-200 relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-primary-600 font-semibold text-lg mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
