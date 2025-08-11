import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const translations = {
    es: {
      // Header
      nosotros: 'Nosotros',
      servicios: 'Servicios',
      agendarConsulta: 'Agendar Consulta',
      
      // Hero
      categoria: 'Medicina Estética y Regenerativa',
      titulo: 'Descubre tu Belleza Natural',
      descripcion: 'Clínica especializada en estética integral con los tratamientos más avanzados y un equipo médico de excelencia',
      botonCTA: 'Agendar Consulta',
      
      // Logo text
      logoText: 'imagenart',
      logoSubtext: 'Cirugía & Medicina Estética'
    },
    en: {
      // Header
      nosotros: 'About Us',
      servicios: 'Services',
      agendarConsulta: 'Schedule Consultation',
      
      // Hero
      categoria: 'Aesthetic & Regenerative Medicine',
      titulo: 'Discover Your Natural Beauty',
      descripcion: 'Clinic specialized in comprehensive aesthetics with the most advanced treatments and an excellent medical team',
      botonCTA: 'Schedule Consultation',
      
      // Logo text
      logoText: 'imagenart',
      logoSubtext: 'Surgery & Aesthetic Medicine'
    }
  }

  const t = (key) => translations[language][key] || key

  const value = {
    language,
    toggleLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
