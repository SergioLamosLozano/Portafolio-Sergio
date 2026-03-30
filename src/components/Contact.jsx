import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data/info';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          Ponte en Contacto
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-portfolio-magenta to-portfolio-green rounded-full"></div>
        </h2>
        <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? 
          Me encantaría conectar contigo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-portfolio-darker p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
        
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-portfolio-green" />
            Hablemos
          </h3>
          
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 group p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-portfolio-dark transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
            <div className="p-3 bg-portfolio-magenta/10 text-portfolio-magenta rounded-full group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Envíame un correo</p>
              <p className="text-lg font-semibold text-portfolio-dark dark:text-portfolio-white group-hover:text-portfolio-magenta transition-colors break-all">
                {contactInfo.email}
              </p>
            </div>
          </a>
        </div>

        <div className="space-y-6 md:border-l border-gray-200 dark:border-gray-800 md:pl-12 pt-8 md:pt-0">
          <h3 className="text-xl font-bold mb-6">Redes Sociales</h3>
          
          <div className="flex flex-col gap-4">
            <a 
              href={contactInfo.socialPlatformLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 dark:bg-portfolio-dark dark:hover:bg-gray-800 p-4 rounded-xl transition-all hover:translate-x-2 shadow-sm"
            >
              <FaLinkedin className="w-5 h-5 text-[#0e76a8]" />
              <span className="font-semibold">LinkedIn Profil</span>
            </a>
            
            <a 
              href={contactInfo.socialPlatformLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 dark:bg-portfolio-dark dark:hover:bg-gray-800 p-4 rounded-xl transition-all hover:translate-x-2 shadow-sm"
            >
              <FaGithub className="w-5 h-5 text-[#F2F5F3]" />
              <span className="font-semibold">GitHub Repo</span>
            </a>

            <a 
              href={contactInfo.socialPlatformLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 dark:bg-portfolio-dark dark:hover:bg-gray-800 p-4 rounded-xl transition-all hover:translate-x-2 shadow-sm"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25d366]" />
              <span className="font-semibold">Whatsapp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
