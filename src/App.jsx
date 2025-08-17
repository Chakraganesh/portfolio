import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import WhyHireMe from './components/WhyHireMe'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { FiMoon, FiSun } from 'react-icons/fi'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'projects', 'skills', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Chakra Ganesh</div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              {['home', 'education', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize ${activeSection === item ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'} transition-colors duration-200`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button> */}

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Hire Now
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <WhyHireMe />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Thotla Chakra Ganesh. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/" className="hover:text-blue-400 transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/" className="hover:text-blue-400 transition-colors duration-200">GitHub</a>
            <a href="https://twitter.com/" className="hover:text-blue-400 transition-colors duration-200">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
