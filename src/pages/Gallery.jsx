
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/img/entrenadores.png', description: 'Galeria' },
    { id: 2, src: '/img/equipo1.png', description: 'Galeria' },
    { id: 3, src: '/img/entrenadores1.png', description: 'Galeria' },
    { id: 4, src: '/img/galaria1.png', description: 'Galeria' },
    { id: 5, src: '/img/galeria2.png', description: 'Galeria' },
    { id: 6, src: '/img/galeria3.png', description: 'Galeria' },
    { id: 7, src: '/img/galeria4.png', description: 'Galeria' },
    { id: 8, src: '/img/galeria5.png', description: 'Galeria' },
    
  ];

  return (
    <>
      <Helmet>
        <title>Galería - Proyecto Cachorros | Momentos Memorables</title>
        <meta name="description" content="Galería de fotos de Proyecto Cachorros. Revive los mejores momentos, entrenamientos, partidos y celebraciones de nuestra escuela de fútbol." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gold-text-gradient">Galería</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revive los mejores momentos de nuestra familia Cachorros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-yellow-900/30 hover:border-yellow-400/70 transition-all card-hover"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={image.description}
                    src={image.src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">Ver imagen</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 gold-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform glow-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X className="text-black" size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl border-4 border-yellow-400/50 shadow-2xl shadow-yellow-900/50" 
                alt={selectedImage.description}
                src={selectedImage.src} />
              <p className="text-center text-gray-300 mt-4 text-lg">{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
  