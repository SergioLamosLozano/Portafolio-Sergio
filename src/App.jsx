import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Academic } from './components/Academic';
import { Achievements } from './components/Achievements';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { personalInfo } from './data/info';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Académico', href: '#academic' },
    { name: 'Logros', href: '#achievements' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-portfolio-magenta/30">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-portfolio-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <Code2 className="w-8 h-8 text-portfolio-magenta" />
              <span className="font-bold text-xl tracking-tight">{personalInfo.name.split(' ')[0]}</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-portfolio-magenta dark:hover:text-portfolio-green font-medium transition-colors">
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-portfolio-green" /> : <Moon className="w-5 h-5 text-portfolio-magenta" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-portfolio-green" /> : <Moon className="w-5 h-5 text-portfolio-magenta" />}
              </button>
              <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 dark:text-gray-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-portfolio-dark border-b border-gray-200 dark:border-gray-800 absolute w-full left-0 transition-all">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={toggleMenu}
                  className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-portfolio-magenta dark:hover:text-portfolio-green"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <About />
        <Experience />
        <Academic />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 mt-20">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
        <p className="mt-2">Hecho con React 19 y Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
