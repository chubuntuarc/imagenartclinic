import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#181919' }}>
      <div className="container-custom">
        {/* Main Footer Content - Centered */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Social Media Row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="/images/logo.png" 
                alt="ImagenArt - Cirugía & Medicina Estética"
                className="h-12 w-auto"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Facebook"
              >
                <img 
                  src="/images/fb.png" 
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Instagram"
              >
                <img 
                  src="/images/inst.png" 
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Copyright - Centered */}
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
