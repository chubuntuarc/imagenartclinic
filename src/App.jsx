import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Doctors />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
