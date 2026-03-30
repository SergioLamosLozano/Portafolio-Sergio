import React from 'react';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioProjects } from '../data/info';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-b border-gray-200 dark:border-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          Portafolio de Proyectos
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-portfolio-green to-portfolio-magenta rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {portfolioProjects.map((project) => (
          <div key={project.id} className="group bg-white dark:bg-portfolio-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
            
            {/* Visual representation placeholder */}
            <div className="h-48 bg-gradient-to-br from-portfolio-green/20 to-portfolio-magenta/20 dark:from-portfolio-green/10 dark:to-portfolio-magenta/10 flex items-center justify-center border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
              <MonitorPlay className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-500 opacity-50" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-portfolio-dark rounded-md text-sm font-medium text-gray-600 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-portfolio-green hover:bg-portfolio-green-dark text-white font-semibold rounded-lg transition-colors flex-1 justify-center shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-black text-white dark:bg-portfolio-dark dark:hover:bg-portfolio-darker dark:border dark:border-gray-700 font-semibold rounded-lg transition-colors flex-1 justify-center shadow-md hover:shadow-lg"
                >
                  <FaGithub className="w-4 h-4" />
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
