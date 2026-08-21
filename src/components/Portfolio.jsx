// ============================================================================
// COMPONENTE: PORTFOLIO - TARJETAS DE PROYECTOS CON CARRUSEL Y MODAL
// ============================================================================
// Este componente muestra una galería de proyectos en formato de tarjetas.
// Cada tarjeta incluye:
// - Carrusel de imágenes navegable más grande
// - Modal de vista ampliada al hacer click
// - Título y descripción del proyecto
// - Badges de tecnologías utilizadas
// - Botones de "Live Preview" (condicional) y "Código"
// ============================================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MonitorPlay, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioProjects } from '../data/info';

// Importar imágenes directamente desde public
import SRP_LOGIN from '/SRP/SRP_LOGIN.png';
import SRP_COOR from '/SRP/SRP_COOR.png';
import SRP_COOR2 from '/SRP/SRP_COOR2.png';
import SRP_COOR3 from '/SRP/SRP_COOR3.png';
import SRP_COOR4 from '/SRP/SRP_COOR4.png';
import SRP_DOC1 from '/SRP/SRP_DOC1.png';
import SRP_DOC2 from '/SRP/SRP_DOC2.png';
import SRP_DOC3 from '/SRP/SRP_DOC3.png';
import SRP_PAD1 from '/SRP/SRP_PAD1.png';
import SRP_PAD2 from '/SRP/SRP_PAD2.png';

import DELI_ADMIN1 from '/DELI/DELI_ADMIN1.png';
import DELI_ADMIN2 from '/DELI/DELI_ADMIN2.png';
import DELI_ADMIN3 from '/DELI/DELI_ADMIN3.png';
import DELI_ADMIN4 from '/DELI/DELI_ADMIN4.png';
import DELI_CLI1 from '/DELI/DELI_CLI1.png';
import DELI_CLI2 from '/DELI/DELI_CLI2.png';
import DELI_CLI3 from '/DELI/DELI_CLI3.png';
import DELI_CLI4 from '/DELI/DELI_CLI4.png';

import SIGUE_LOGIN from '/SIGUE/SIGUE_LOGIN.png';
import SIGUE_ADMIN from '/SIGUE/SIGUE_ADMIN.png';
import SIGUE_EVENTO1 from '/SIGUE/SIGUE_EVENTO1.png';
import SIGUE_EVENTO2 from '/SIGUE/SIGUE_EVENTO2.png';
import SIGUE_EVENTO3 from '/SIGUE/SIGUE_EVENTO3.png';
import SIGUE_EVENTO4 from '/SIGUE/SIGUE_EVENTO4.png';
import SIGUE_CERT1 from '/SIGUE/SIGUE_CERT1.png';
import SIGUE_EST from '/SIGUE/SIGUE_EST.png';

// Mapa de imágenes importadas
const imageMap = {
  '/SRP/SRP_LOGIN.png': SRP_LOGIN,
  '/SRP/SRP_COOR.png': SRP_COOR,
  '/SRP/SRP_COOR2.png': SRP_COOR2,
  '/SRP/SRP_COOR3.png': SRP_COOR3,
  '/SRP/SRP_COOR4.png': SRP_COOR4,
  '/SRP/SRP_DOC1.png': SRP_DOC1,
  '/SRP/SRP_DOC2.png': SRP_DOC2,
  '/SRP/SRP_DOC3.png': SRP_DOC3,
  '/SRP/SRP_PAD1.png': SRP_PAD1,
  '/SRP/SRP_PAD2.png': SRP_PAD2,
  '/DELI/DELI_ADMIN1.png': DELI_ADMIN1,
  '/DELI/DELI_ADMIN2.png': DELI_ADMIN2,
  '/DELI/DELI_ADMIN3.png': DELI_ADMIN3,
  '/DELI/DELI_ADMIN4.png': DELI_ADMIN4,
  '/DELI/DELI_CLI1.png': DELI_CLI1,
  '/DELI/DELI_CLI2.png': DELI_CLI2,
  '/DELI/DELI_CLI3.png': DELI_CLI3,
  '/DELI/DELI_CLI4.png': DELI_CLI4,
  '/SIGUE/SIGUE_LOGIN.png': SIGUE_LOGIN,
  '/SIGUE/SIGUE_ADMIN.png': SIGUE_ADMIN,
  '/SIGUE/SIGUE_EVENTO1.png': SIGUE_EVENTO1,
  '/SIGUE/SIGUE_EVENTO2.png': SIGUE_EVENTO2,
  '/SIGUE/SIGUE_EVENTO3.png': SIGUE_EVENTO3,
  '/SIGUE/SIGUE_EVENTO4.png': SIGUE_EVENTO4,
  '/SIGUE/SIGUE_CERT1.png': SIGUE_CERT1,
  '/SIGUE/SIGUE_EST.png': SIGUE_EST,
};

// ============================================================================
// COMPONENTE PRINCIPAL: Portfolio
// ============================================================================
export const Portfolio = () => {
  return (
    <section id="portafolio" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-b border-gray-200 dark:border-gray-800">
      {/* Título de la sección */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          Portafolio de Proyectos
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-portfolio-green to-portfolio-magenta rounded-full"></div>
        </h2>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// COMPONENTE: ProjectCard - Tarjeta individual de proyecto
// ============================================================================
// Props esperadas:
// - project: objeto con { id, title, description, technologies, images, isDeployed, liveLink, githubLink }
// ============================================================================
const ProjectCard = ({ project }) => {
  // ========== ESTADO DEL CARRUSEL ==========
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectImages = project.images || [];
  const hasImages = projectImages.length > 0;

  // Resolver las rutas de imágenes usando el mapa de imports
  const resolvedImages = projectImages.map(img => imageMap[img] || img);

  // ========== FUNCIONES DE NAVEGACIÓN DEL CARRUSEL ==========
  
  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? resolvedImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === resolvedImages.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = () => {
    if (hasImages) setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ========== RENDERIZADO DE LA TARJETA ==========
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="group bg-white dark:bg-portfolio-darker rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
      >
        
        {/* ========== CARRUSEL DE IMÁGENES (MÁS GRANDE) ========== */}
        <div 
          className="h-80 bg-white flex items-center justify-center border-b border-gray-200 relative cursor-pointer"
          onClick={openModal}
        >
          
          {hasImages ? (
            <>
              {/* Imagen actual */}
              <img 
                src={resolvedImages[currentImageIndex]} 
                alt="Imagen del proyecto"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  minHeight: '200px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              
              {/* Indicador de click para ampliar */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 pointer-events-auto">
                  Click para ampliar
                </span>
              </div>
              
              {/* Botones de navegación */}
              {resolvedImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Indicadores de posición */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {resolvedImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-white w-6' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <MonitorPlay className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-500 opacity-50" />
          )}
        </div>

        {/* ========== CONTENIDO DE LA TARJETA ========== */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow text-justify">
            {project.description}
          </p>
          
          {/* Badges de tecnologías */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-gray-100 dark:bg-portfolio-dark rounded-md text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* ========== BOTONES DE ACCIÓN ========== */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            
            {project.isDeployed ? (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-portfolio-green hover:bg-portfolio-green-dark text-white font-semibold rounded-lg transition-colors flex-1 justify-center shadow-md hover:shadow-lg"
              > 
                <ExternalLink className="w-4 h-4" />
                Live Preview
              </a>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-semibold rounded-lg cursor-not-allowed flex-1 justify-center opacity-60"
              >
                <ExternalLink className="w-4 h-4" />
                No Desplegado
              </button>
            )}

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
      </motion.div>

      {/* ========== MODAL DE VISTA AMPLIADA ========== */}
      {isModalOpen && hasImages && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all z-10"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Contenedor de imagen */}
          <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {/* Imagen ampliada */}
            <img 
              src={resolvedImages[currentImageIndex]} 
              alt={`${project.title} - imagen ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navegación en modal */}
            {resolvedImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-portfolio-green to-portfolio-magenta hover:from-portfolio-green-dark hover:to-purple-600 text-white p-3 rounded-full transition-all shadow-lg"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-portfolio-green to-portfolio-magenta hover:from-portfolio-green-dark hover:to-purple-600 text-white p-3 rounded-full transition-all shadow-lg"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Contador de imágenes */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-portfolio-green to-portfolio-magenta text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  {currentImageIndex + 1} / {resolvedImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
