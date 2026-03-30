import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { academicBackground } from '../data/info';

export const Academic = () => {
  return (
    <section id="academic" className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-b border-gray-200 dark:border-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          Formación Académica
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-portfolio-green to-portfolio-magenta rounded-full"></div>
        </h2>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-portfolio-green before:via-portfolio-magenta before:to-transparent">
        {academicBackground.map((item) => (
          <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-portfolio-dark bg-portfolio-green dark:bg-portfolio-green shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-portfolio-darker p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md group-hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h3 className="font-bold text-xl text-portfolio-dark dark:text-portfolio-white">{item.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-portfolio-magenta bg-portfolio-magenta/10 px-3 py-1 rounded-full whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>
              <p className="text-portfolio-green-dark dark:text-portfolio-green-light font-medium mb-3">
                {item.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
