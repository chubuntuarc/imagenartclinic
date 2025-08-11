import { useLanguage } from '../contexts/LanguageContext'

const ServiceModal = ({ isOpen, onClose, service }) => {
  const { t } = useLanguage()

  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Image */}
          <div className="h-64 bg-gray-200 rounded-xl overflow-hidden mb-6">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Additional details */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              {t('conoceMas')}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center px-8 py-4 bg-custom-button text-custom-text font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {t('conoceMas')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal
