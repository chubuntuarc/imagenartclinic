const Contact = () => {
  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Contacto
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Dirección</h3>
                <p className="text-gray-600 leading-relaxed">
                  Blvd. Agua Caliente 11300-227, Plaza Campestre<br />
                  Colonia Aviación, Tijuana, B.C.N, México 22014
                </p>
              </div>

              {/* Phones */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Teléfonos</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">USA:</span> +1 (619) 713 7193
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">México:</span> +52 (664) 290 1000
                  </p>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Correo</h3>
                <a 
                  href="mailto:info@imagenartclinic.com" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  info@imagenartclinic.com
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Horarios</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Lunes - Viernes:</span> 9:00am - 7:00pm
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Sábados:</span> 8:00am - 4:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="relative">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Imagen Art</p>
                  <p className="text-sm text-gray-500">Tijuana, B.C.N, México</p>
                </div>
              </div>
              
              {/* CTA Button Overlay */}
              <div className="absolute bottom-4 right-4">
                <button className="btn-secondary">
                  Agendar Cita
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                ¿Listo para transformar tu apariencia?
              </p>
              <a href="#contacto" className="btn-primary text-lg px-8 py-4">
                Agendar Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
