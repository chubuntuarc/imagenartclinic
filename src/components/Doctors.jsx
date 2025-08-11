import { useLanguage } from '../contexts/LanguageContext'

const Doctors = () => {
  const { t } = useLanguage()

  const doctors = [
    {
      id: 1,
      name: t('draMileidy'),
      specialty: t('draMileidyEspecialidad'),
      bio: t('draMileidyBio'),
      image: "/images/dra-mileidy.webp",
      imageFirst: true
    },
    {
      id: 2,
      name: t('drSaul'),
      specialty: t('drSaulEspecialidad'),
      bio: t('drSaulBio'),
      image: "/images/doctor-saul.webp",
      imageFirst: false
    }
  ]

  return (
    <section className="py-0 bg-white mb-20">
      <div className="container-custom">
        {/* Doctors Section */}
        <div className="space-y-8 lg:space-y-12">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {/* Image Container - Always first on mobile, alternating on desktop */}
              <div className={`order-1 lg:w-1/3 ${doctor.imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-64 lg:h-full bg-gray-200 relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Container - Always second on mobile, alternating on desktop */}
              <div className={`order-2 lg:w-2/3 ${doctor.imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center" style={{ backgroundColor: '#fee8d24d' }}>
                  <h3 className="text-2xl lg:text-4xl text-gray-900 mb-3 leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-base lg:text-xl text-gray-700 mb-4 lg:mb-6">
                    {doctor.specialty}
                  </p>
                  <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
