import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t, language } = useLanguage()

  const handleWhatsAppClick = () => {
    const message = language === 'es' 
      ? 'Hola, me gustaría agendar una cita en ImagenArt Clinic. ¿Podrían ayudarme?'
      : 'Hello, I would like to schedule an appointment at ImagenArt Clinic. Could you help me?'
    
    const whatsappUrl = `https://wa.me/526642901000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contacto" className="py-0 bg-white mb-20">
      <div className="container-custom">
        {/* Map Background Container with Contact Overlay */}
        <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
          {/* Map Background */}
          <div className="h-[500px] md:h-[600px] lg:h-[700px] bg-gray-200 relative">
            {/* Map Image Background */}
            <img 
              src="/images/map.webp" 
              alt="Mapa de Tijuana - ImagenArt Clinic"
              className="w-full h-full object-cover"
            />
            
            {/* Contact Information Card Overlay - Responsive positioning */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-12 lg:left-12 w-72 md:w-80 lg:w-96">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                  {t('contacto')}
                </h2>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-5">
                  {/* Address */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                      {t('direccion')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-base">
                      {t('direccionCompleta')}
                    </p>
                  </div>

                  {/* Phones */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                      {t('telefonos')}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                        {t('telefonoUSA')}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                        {t('telefonoMexico')}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                      {t('correo')}
                    </h3>
                    <a 
                      href="mailto:info@imagenartclinic.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors underline text-xs md:text-sm lg:text-base"
                    >
                      {t('email')}
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                      {t('horarios')}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                        {t('horarioLunesViernes')}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                        {t('horarioSabados')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Responsive positioning and sizing with WhatsApp functionality */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-12 lg:right-12">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 text-sm md:text-base flex items-center gap-2"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t('agendarCita')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
