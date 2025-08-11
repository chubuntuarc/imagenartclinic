import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="container-custom">
        {/* Floating Navbar with Glassmorphism */}
        <div className="rounded-2xl shadow-xl border border-white/20 backdrop-blur-md bg-gray-900/70">
          <div className="flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="ImagenArt Logo" 
                className="w-30 h-8"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#nosotros" className="text-gray-200 hover:text-white transition-colors duration-200">
                {t('nosotros')}
              </a>
              <a href="#servicios" className="text-gray-200 hover:text-white transition-colors duration-200">
                {t('servicios')}
              </a>
              <a href="#contacto" className="text-gray-200 hover:text-white transition-colors duration-200">
                {t('agendarConsulta')}
              </a>
              <button 
                onClick={toggleLanguage}
                className="text-sm border border-white/30 px-3 py-1 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-gray-200 backdrop-blur-sm"
              >
                {language === 'es' ? 'ENG' : 'ESP'}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-200 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/20 py-4 px-6 backdrop-blur-sm">
              <nav className="flex flex-col space-y-4">
                <a href="#nosotros" className="text-gray-200 hover:text-white transition-colors">{t('nosotros')}</a>
                <a href="#servicios" className="text-gray-200 hover:text-white transition-colors">{t('servicios')}</a>
                <a href="#contacto" className="text-gray-200 hover:text-white transition-colors">{t('agendarConsulta')}</a>
                <button 
                  onClick={toggleLanguage}
                  className="text-sm border border-white/30 px-3 py-1 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-gray-200 w-fit backdrop-blur-sm"
                >
                  {language === 'es' ? 'ENG' : 'ESP'}
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
