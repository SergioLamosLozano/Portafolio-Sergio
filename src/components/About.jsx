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
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hola, soy <span className="text-portfolio-magenta">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl text-portfolio-green font-medium">
            {personalInfo.title}
          </h2>
          <div className="space-y-4">
            {personalInfo.introduction.map((text, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {text}
              </p>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-magenta hover:bg-portfolio-magenta-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
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
