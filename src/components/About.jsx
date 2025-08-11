const About = () => {
  const testimonials = [
    {
      id: 1,
      text: "200% recomendado, calidad de primera sumamente profesionales, manejan una línea natural donde nadie externo sabrá si te hiciste algo o no, Gracias!",
      author: "Sebastián Abramowicz"
    },
    {
      id: 2,
      text: "No los cambio por nada. Siempre superan mis expectativas con la mejor atención, calidad de sus productos y los mejores tratamientos en la manera más natural posible. Mis viajes a Tijuana son de cita obligatoria a Imagen Art 😊",
      author: "Karla Vela"
    }
  ]

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Sobre ImagenArt
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                ImagenArt es una clínica de medicina estética que forma parte de Clínica GEN S de RL de CV. 
                Contamos con un equipo de médicos profesionales especializados en la salud de la piel, belleza, 
                cuidado y rejuvenecimiento facial.
              </p>
              <p>
                Con más de 15 años de experiencia, nos comprometemos a crear resultados únicos y genuinos 
                que inspiren a nuestros pacientes. Combinamos la creatividad con productos premium y técnicas 
                de aplicación impecables para garantizar la seguridad en todos nuestros tratamientos.
              </p>
              <p>
                Nuestro enfoque se centra en realzar la belleza natural de cada persona, utilizando 
                tecnologías avanzadas y procedimientos mínimamente invasivos para lograr resultados 
                naturales y duraderos.
              </p>
            </div>
          </div>

          {/* Image and Testimonials */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="ImagenArt Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-700 italic mb-3">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-800 font-semibold">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
