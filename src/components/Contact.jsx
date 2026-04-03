import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data/info';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight inline-block relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-dark dark:from-white to-gray-600 dark:to-gray-400">
            Ponte en Contacto
          </span>
          <div className="absolute -bottom-4 left-0 right-0 h-1.5 bg-gradient-to-r from-portfolio-magenta via-portfolio-green to-portfolio-magenta bg-[length:200%_auto] animate-gradient-x rounded-full opacity-80"></div>
        </h2>
        <p className="mt-10 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? 
          <span className="block font-medium text-portfolio-magenta dark:text-portfolio-green-light mt-2">
            Me encantaría conectar contigo.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center bg-white dark:bg-portfolio-darker/50 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-portfolio-magenta/5 border border-gray-100 dark:border-gray-800/50 relative">
        
        <div className="space-y-8 flex flex-col justify-center w-full">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-portfolio-green" />
              Hablemos
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Siempre estoy abierto a nuevas oportunidades.</p>
          </div>
          
          <div className="group flex items-center gap-2 sm:gap-3 p-2 rounded-2xl bg-gray-50/50 dark:bg-portfolio-dark/40 hover:bg-white dark:hover:bg-portfolio-dark transition-all border border-gray-100 dark:border-gray-800 hover:border-portfolio-magenta/30 dark:hover:border-portfolio-green/30 hover:shadow-xl hover:shadow-portfolio-magenta/5 w-full">
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex flex-1 items-center gap-3 p-2 sm:p-3 rounded-xl transition-all overflow-hidden"
            >
              <div className="p-3 sm:p-4 bg-portfolio-magenta/10 text-portfolio-magenta rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 overflow-hidden pr-2">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Envíame un correo</p>
                <p className="text-[13px] sm:text-sm md:text-base lg:text-[15px] xl:text-base font-semibold text-portfolio-dark dark:text-portfolio-white group-hover:text-portfolio-magenta transition-colors whitespace-nowrap overflow-hidden text-ellipsis block w-full">
                  {contactInfo.email}
                </p>
              </div>
            </a>
            
            <div className="pr-2 sm:pr-4 border-l border-gray-200 dark:border-gray-800 pl-2 sm:pl-4 py-2 shrink-0">
              <button 
                onClick={copyToClipboard}
                className="relative p-2.5 sm:p-3 rounded-xl bg-white dark:bg-portfolio-darker border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-portfolio-green hover:border-portfolio-green/50 transition-all shadow-sm active:scale-90 group/btn"
                title="Copiar correo"
              >
                {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-green" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                {copied && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-portfolio-green text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg animate-bounce-subtle whitespace-nowrap">
                    ¡Copiado!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Separator line for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

        <div className="space-y-6 flex flex-col justify-center w-full lg:pl-10 xl:pl-12 pt-8 lg:pt-0 border-t lg:border-t-0 border-gray-200 dark:border-gray-800 lg:border-none relative">
          <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
            Redes Sociales
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <SocialLink 
              href={contactInfo.socialPlatformLinks.linkedin}
              icon={<FaLinkedin className="w-5 h-5" />}
              label="LinkedIn"
              color="hover:text-[#0e76a8] hover:border-[#0e76a8]/30"
            />
            <SocialLink 
              href={contactInfo.socialPlatformLinks.github}
              icon={<FaGithub className="w-5 h-5" />}
              label="GitHub"
              color="hover:text-gray-400 hover:border-gray-400/30"
            />
            <SocialLink 
              href={contactInfo.socialPlatformLinks.whatsapp}
              icon={<FaWhatsapp className="w-5 h-5" />}
              label="WhatsApp"
              color="hover:text-[#25d366] hover:border-[#25d366]/30"
              className="sm:col-span-2 lg:col-span-1 xl:col-span-2"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label, color, className = "" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-between gap-4 bg-gray-50/50 dark:bg-portfolio-dark/40 hover:bg-white dark:hover:bg-portfolio-dark p-4 rounded-xl transition-all border border-gray-100 dark:border-gray-800 shadow-sm group ${color} ${className}`}
  >
    <div className="flex items-center gap-3">
      <span className="text-gray-600 dark:text-gray-400 group-hover:text-inherit transition-colors">
        {icon}
      </span>
      <span className="font-semibold text-portfolio-dark dark:text-portfolio-white group-hover:text-inherit">
        {label}
      </span>
    </div>
    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
  </a>
);
