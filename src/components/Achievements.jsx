import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { achievements } from '../data/info';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-b border-gray-200 dark:border-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          Logros y Certificaciones
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-portfolio-magenta to-portfolio-green rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden bg-white dark:bg-portfolio-darker shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {/* Image */}
              <img
                src={item.image || "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Diploma+Placeholder"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-portfolio-dark/90 p-2 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-portfolio-magenta" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-portfolio-magenta/10 rounded-lg shrink-0">
                  <Award className="w-5 h-5 text-portfolio-magenta" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-portfolio-dark dark:text-portfolio-white leading-tight group-hover:text-portfolio-magenta transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 font-medium">Ver credencial →</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
