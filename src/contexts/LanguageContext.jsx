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
      logoSubtext: 'Cirugía & Medicina Estética',

      // Services
      serviciosTitulo: 'Medicina Estética',
      serviciosDescripcion: 'Es una rama de la medicina que pretende generar un equilibrio entre la salud y la belleza, con un abordaje terapéutico clínico a través de productos o medicamentos de un alto perfil de seguridad, sin necesidad de que sean limitadas sus actividades habituales. Teniendo como resultado una apariencia más joven y en consecuencia una mayor y mejor calidad de vida.',
      conoceMas: 'Conoce más',
      todosServicios: 'Todos Nuestros Servicios',
      
      // Service details
      hilosTensores: 'Hilos Tensores',
      hilosDescripcion: 'Tratamiento de lifting facial con hilos tensores para rejuvenecimiento natural. Los hilos tensores son una técnica mínimamente invasiva que proporciona un efecto lifting inmediato y natural.',
      plasmaRico: 'Plasma Rico En Plaquetas',
      plasmaDescripcion: 'Tratamiento regenerativo con plasma rico en plaquetas para la piel. Estimula la producción de colágeno y elastina para una piel más joven y saludable.',
      rellenos: 'Rellenos',
      rellenosDescripcion: 'Rellenos dérmicos para restaurar volumen y suavizar arrugas. Utilizamos productos de alta calidad para resultados naturales y duraderos.',
      verrugasTitulo: 'Tratamiento de Verrugas',
      verrugasDescripcion: 'Eliminación efectiva de verrugas con técnicas avanzadas y seguras para una piel más saludable y uniforme.',

      // Doctors
      draMileidy: 'Dra. Mileidy Fernández Ribot',
      draMileidyEspecialidad: 'Medicina estética y anestesiología',
      draMileidyBio: 'De nacionalidad cubana, especialidades en Medicina Familiar y Anestesiología del ISCM Villa Clara, Cuba; Diplomado en Medicina Estética por la Universidad Autónoma de México (UNAM). Licencia profesional No. 6673854',
      drSaul: 'Dr. Saúl León Galindo',
      drSaulEspecialidad: 'Medicina estética',
      drSaulBio: 'De nacionalidad cubana, especialidades en Medicina Familiar y Anestesiología del ISCM Villa Clara, Cuba; Diplomado en Medicina Estética por la Universidad Autónoma de México (UNAM). Licencia profesional No. 6673854'
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
      logoSubtext: 'Surgery & Aesthetic Medicine',

      // Services
      serviciosTitulo: 'Aesthetic Medicine',
      serviciosDescripcion: 'It is a branch of medicine that aims to generate a balance between health and beauty, with a clinical therapeutic approach through products or medications with a high safety profile, without the need for habitual activities to be limited. Resulting in a younger appearance and consequently a greater and better quality of life.',
      conoceMas: 'Learn more',
      todosServicios: 'All Our Services',
      
      // Service details
      hilosTensores: 'Tensile Threads',
      hilosDescripcion: 'Facial lifting treatment with tensile threads for natural rejuvenation. Tensile threads are a minimally invasive technique that provides immediate and natural lifting effect.',
      plasmaRico: 'Platelet-Rich Plasma',
      plasmaDescripcion: 'Regenerative treatment with platelet-rich plasma for the skin. Stimulates the production of collagen and elastin for younger and healthier skin.',
      rellenos: 'Fillers',
      rellenosDescripcion: 'Dermal fillers to restore volume and smooth wrinkles. We use high-quality products for natural and long-lasting results.',
      verrugasTitulo: 'Wart Treatment',
      verrugasDescripcion: 'Effective wart removal with advanced and safe techniques for healthier and more uniform skin.',

      // Doctors
      draMileidy: 'Dr. Mileidy Fernández Ribot',
      draMileidyEspecialidad: 'Aesthetic medicine and anesthesiology',
      draMileidyBio: 'Cuban nationality, specialties in Family Medicine and Anesthesiology from ISCM Villa Clara, Cuba; Diploma in Aesthetic Medicine from the National Autonomous University of Mexico (UNAM). Professional license No. 6673854',
      drSaul: 'Dr. Saúl León Galindo',
      drSaulEspecialidad: 'Aesthetic medicine',
      drSaulBio: 'Cuban nationality, specialties in Family Medicine and Anesthesiology from ISCM Villa Clara, Cuba; Diploma in Aesthetic Medicine from the National Autonomous University of Mexico (UNAM). Professional license No. 6673854'
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
