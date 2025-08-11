import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7l-7-5z"/>
              </svg>
            </div>
            <span className="text-xl font-bold">imagenart</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#nosotros" className="hover:text-primary-400 transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-primary-400 transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-primary-400 transition-colors">Agendar Consulta</a>
            <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-gray-800 transition-colors">
              ENG
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#nosotros" className="hover:text-primary-400 transition-colors">Nosotros</a>
              <a href="#servicios" className="hover:text-primary-400 transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-primary-400 transition-colors">Agendar Consulta</a>
              <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-gray-800 transition-colors w-fit">
                ENG
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
