const Hero = () => {
  return (
    <section className="h-screen/2 relative overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem] lg:rounded-b-[5rem]">
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
        <div className="w-full lg:w-2/3 xl:w-1/2 pt-16 pb-16">
          {/* Category Badge - Light gray text */}
          <div className="inline-block mb-2">
            <span className="text-lg font-light text-gray-500 tracking-wide">
              Medicina Estética y Regenerativa
            </span>
          </div>

          {/* Main Headline - Exact color #181919 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight" style={{ color: '#181919' }}>
            <span className="block mb-2">Descubre tu</span>
            <span className="block">Belleza Natural</span>
          </h1>

          {/* Description - Exact color #181919 */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl font-light" style={{ color: '#181919' }}>
            Clínica especializada en estética integral con los tratamientos más avanzados y un equipo médico de excelencia
          </p>

          {/* CTA Button - Exact styling from screenshot */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              style={{ 
                backgroundColor: '#FBE3CA',
                color: '#181919'
              }}
            >
              Agendar Consulta
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
