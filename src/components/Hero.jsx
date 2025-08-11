import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t, language } = useLanguage()

  const handleWhatsAppClick = () => {
    const phoneNumber = '+526642901000' // Número de México
    const messages = {
      es: 'Hola! Me gustaría agendar una consulta en ImagenArt. ¿Podrían ayudarme?',
      en: 'Hello! I would like to schedule a consultation at ImagenArt. Could you help me?'
    }
    
    const message = encodeURIComponent(messages[language])
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="h-screen/1.5 relative overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem] lg:rounded-b-[5rem] pt-20">
      {/* Background Image with organic shapes */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-background.webp')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-gray-100/80 to-gray-200/70"></div>
        
        {/* Additional CSS elements for depth */}
        <div className="absolute inset-0">
          {/* Subtle floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 border border-gray-300/20 rounded-full animate-pulse delay-500"></div>
          
          {/* Light rays effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent"></div>
          
          {/* Central bright area enhancement */}
          <div className="absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="w-full lg:w-2/3 xl:w-1/2 pt-12 pb-12">
          {/* Category Badge - Light gray text */}
          <div className="inline-block mb-4">
            <span className="text-lg font-light text-gray-500 tracking-wide">
              {t('categoria')}
            </span>
          </div>

          {/* Main Headline - Exact color #181919 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight" style={{ color: '#181919' }}>
            <span className="block mb-2">{t('titulo').split(' ')[0]} {t('titulo').split(' ')[1]}</span>
            <span className="block">{t('titulo').split(' ').slice(2).join(' ')}</span>
          </h1>

          {/* Description - Exact color #181919 */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl font-light" style={{ color: '#181919', textWrap: 'balance' }}>
            {t('descripcion')}
          </p>

          {/* CTA Button - WhatsApp functionality */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 group"
              style={{ 
                backgroundColor: '#FBE3CA',
                color: '#181919'
              }}
            >
              {t('botonCTA')}
              {/* WhatsApp icon */}
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right side space for visual balance */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2"></div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-gray-400/60 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-gray-400/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 right-12 w-1.5 h-1.5 bg-gray-400/60 rounded-full animate-pulse delay-500"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-400/30 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-gray-400/40 rounded-full animate-pulse delay-300"></div>
    </section>
  )
}

export default Hero
