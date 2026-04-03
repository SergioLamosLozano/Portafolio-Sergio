import React from 'react';
import { Download, Code2, Layout, Database, Sparkles } from 'lucide-react';
import { personalInfo, whatIDo, skills } from '../data/info';

const iconMap = {
  1: <Code2 className="w-6 h-6 text-portfolio-magenta" />,
  2: <Layout className="w-6 h-6 text-portfolio-green" />,
  3: <Database className="w-6 h-6 text-portfolio-magenta" />,
  4: <Sparkles className="w-6 h-6 text-portfolio-green" />
};

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-16 items-center justify-between">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hola, soy <span className="text-portfolio-magenta block mt-2">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-green font-medium">
            {personalInfo.title}
          </h2>
          <div className="space-y-4">
            {personalInfo.introduction.map((text, index) => (
              <p key={index} className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {text}
              </p>
            ))}
          </div>

          <div className="pt-6 flex justify-center md:justify-start">
            <a
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-portfolio-magenta hover:bg-portfolio-magenta-dark text-white font-semibold rounded-xl shadow-lg shadow-portfolio-magenta/20 hover:shadow-portfolio-magenta/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
          </div>
        </div>

        {/* Photo Container */}
        <div className="shrink-0 relative group mt-8 md:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-tr from-portfolio-magenta to-portfolio-green rounded-[2rem] md:rounded-[3rem] blur-lg md:blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <div className="relative w-56 h-56 min-[400px]:w-64 min-[400px]:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] bg-white dark:bg-portfolio-darker rounded-[2rem] md:rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
            {personalInfo.image ? (
              <img src={personalInfo.image} alt={personalInfo.name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-6 bg-gray-50 dark:bg-portfolio-dark/50 w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                <svg className="w-16 h-16 md:w-20 md:h-20 mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm md:text-base font-semibold">Espacio para tu foto</p>
                <p className="text-xs md:text-sm mt-2 opacity-70 px-4">Guarda tu foto en la carpeta public y añade el nombre en info.js (ej. "/foto.jpg")</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h3 className="text-3xl font-bold mb-10 text-center">¿Qué Hago?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatIDo.map(item => (
            <div key={item.id} className="p-6 bg-white dark:bg-portfolio-darker rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all group">
              <div className="mb-4 p-3 bg-portfolio-white dark:bg-portfolio-dark rounded-lg inline-block group-hover:scale-110 transition-transform">
                {iconMap[item.id]}
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm  text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-l-4 border-portfolio-magenta pl-4">Habilidades Técnicas</h3>
          <div className="flex flex-wrap gap-3">
            {skills.technical.map(skill => (
              <span key={skill} className="px-4 py-2 bg-portfolio-green/10 text-portfolio-green-dark dark:text-portfolio-green-light rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-l-4 border-portfolio-green pl-4">Habilidades Blandas</h3>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map(skill => (
              <span key={skill} className="px-4 py-2 bg-portfolio-magenta/10 text-portfolio-magenta-dark dark:text-portfolio-magenta-light rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
