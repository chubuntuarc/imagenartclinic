import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ServiceModal from './ServiceModal'

const Services = () => {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState(null)
  const [showAllServices, setShowAllServices] = useState(false)

  const initialServices = [
    {
      id: 1,
      title: t('hilosTensores'),
      description: t('hilosDescripcion'),
      image: "/images/hilos-tensores.webp",
      detailedDescription: t('hilosDescripcion')
    },
    {
      id: 2,
      title: t('plasmaRico'),
      description: t('plasmaDescripcion'),
      image: "/images/plasma.webp",
      detailedDescription: t('plasmaDescripcion')
    },
    {
      id: 3,
      title: t('rellenos'),
      description: t('rellenosDescripcion'),
      image: "/images/relleno.webp",
      detailedDescription: t('rellenosDescripcion')
    },
    {
      id: 4,
      title: t('verrugasTitulo'),
      description: t('verrugasDescripcion'),
      image: "/images/verrugas.webp",
      detailedDescription: t('verrugasDescripcion')
    }
  ]

  const allServices = [
    ...initialServices,
    {
      id: 5,
      title: "Limpieza Facial",
      description: "Tratamiento profundo para limpiar y rejuvenecer la piel",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      detailedDescription: "La limpieza facial profunda elimina impurezas y células muertas para una piel más radiante."
    },
    {
      id: 6,
      title: "Peeling Químico",
      description: "Renovación celular para una piel más joven y saludable",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      detailedDescription: "El peeling químico estimula la renovación celular para una piel más joven y uniforme."
    }
  ]

  const servicesToShow = showAllServices ? allServices : initialServices

  const handleServiceClick = (service) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header Section - Left aligned like in screenshot */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-3xl md:text-3xl lg:text-3xl text-gray-900 mb-4 leading-tight">
            {t('serviciosTitulo')}
          </h2>
          <p className="text-xl md:text-xl text-gray-700 leading-relaxed font-light" style={{ maxWidth: '40rem', textWrap: 'balance' }}>
            {t('serviciosDescripcion')}
          </p>
        </div>

        {/* Services Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {servicesToShow.map((service) => (
            <div key={service.id} className="group">
              {/* Rounded Image Container */}
              <div className="relative mb-4">
                <div className="h-48 lg:h-64 bg-gray-200 rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* "Conoce más" Button - Inside the image */}
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 lg:px-4 py-1 lg:py-2 rounded-lg lg:rounded-xl text-sm lg:text-base font-medium hover:bg-white transition-all duration-200 shadow-lg"
                  >
                    {t('conoceMas')}
                  </button>
                </div>
              </div>
              
              {/* Title below image - No background */}
              <div className="text-center">
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Services Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowAllServices(!showAllServices)}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            {showAllServices ? 'Mostrar Menos' : t('todosServicios')}
          </button>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={closeModal} 
        service={selectedService} 
      />
    </section>
  )
}

export default Services
