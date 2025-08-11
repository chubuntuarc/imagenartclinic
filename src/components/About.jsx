import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      text: t('testimonioSebastian'),
      author: "Sebastián Abramowicz"
    },
    {
      id: 2,
      text: t('testimonioKarla'),
      author: "Karla Vela"
    }
  ]

  return (
    <section id="nosotros" className="py-0 bg-white mb-20">
      <div className="container-custom">
        {/* Top Section - Text Content */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-3xl md:text-3xl lg:text-3xl text-gray-900 mb-4 leading-tight">
            {t('sobreImagenArt')}
          </h2>
          <p className="text-xl md:text-xl text-gray-700 leading-relaxed font-light" style={{ textWrap: 'balance' }}>
            {t('sobreImagenArtDescripcion1')}
          </p>
          <p className="text-xl md:text-xl text-gray-700 leading-relaxed font-light" style={{ textWrap: 'balance' }}>
            {t('sobreImagenArtDescripcion2')}
          </p>
          <p className="text-xl md:text-xl text-gray-700 leading-relaxed font-light" style={{ textWrap: 'balance' }}>
            {t('sobreImagenArtDescripcion3')}
          </p>
        </div>

        {/* Bottom Section - Image and Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Portrait Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-96 lg:h-[500px] bg-gray-200 relative">
                <img 
                  src="/images/about.webp"
                  alt="ImagenArt Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="order-1 lg:order-2 space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-900 font-bold text-lg">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
