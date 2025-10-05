import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, DollarSign, Phone, Award, CreditCard, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Info = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { 
      name: 'Décima', 
      age: 'Nacidos 2018-2019-2020', 
      image: '/img/equipo1.png',
      description: 'Iniciación al fútbol con enfoque en diversión y aprendizaje básico'
    },
    { 
      name: 'Novena', 
      age: 'Nacidos 2016-2017', 
      image: '/img/novena.png',
      description: 'Desarrollo de habilidades fundamentales y trabajo en equipo'
    },
    { 
      name: 'Octava', 
      age: 'Nacidos 2014-2015', 
      image: '/img/octava.png',
      description: 'Perfeccionamiento técnico y primeras tácticas de juego'
    },
    { 
      name: 'Sétima', 
      age: 'Nacidos 2012-2013', 
      image: '/img/setima.png',
      description: 'Entrenamiento avanzado y participación en competencias'
    },
    { 
      name: 'Sexta', 
      age: 'Nacidos 2010-2011', 
      image: '/img/sexta.png',
      description: 'Formación competitiva y desarrollo de liderazgo'
    },
    { 
      name: 'Quinta', 
      age: 'Nacidos 2008-2009', 
      image: '/img/quinta.png',
      description: 'Alto rendimiento y preparación para fútbol profesional'
    }
  ];

  const coaches = [
    {
      name: 'Lic. Cristian Quesada González',
      role: 'Entrenador Principal',
      credentials: ['Docente MEP Educación Física', 'Licencia A Fútbol']
    },
    {
      name: 'Douglas Ortíz Irigoyen',
      role: 'Entrenador',
      credentials: ['Licencia C Fútbol']
    },
    {
      name: 'Oscar Espinoza Sibaja',
      role: 'Entrenador',
      credentials: ['Licencia Fútbol en trámite']
    },
    {
      name: 'Jean Paul Quirós',
      role: 'Entrenador de Porteros',
      credentials: ['Especialista en Arquería']
    }
  ];

  const handleContact = () => {
    toast({
      title: "🚧 Función en desarrollo",
      description: "¡Pronto podrás contactarnos directamente! Por ahora, llámanos al +506 8882-6308.",
      duration: 4000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Información - Proyecto Cachorros | Horarios, Categorías y Contacto</title>
        <meta name="description" content="Información completa sobre horarios, categorías, ubicación y costos de la escuela de fútbol Proyecto Cachorros en Buenos Aires, Puntarenas." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gold-text-gradient">Información</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Todo lo que necesitas saber para unirte a la familia Cachorros
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-900/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center glow-gold">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-yellow-400">Ubicación</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Nuestras Sedes
                  <br />
                   • Cancha del polideportivo
                  <br />
                   •	Cancha de San Carlos
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden border-2 border-yellow-400/30 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <img className="w-32 h-32 object-contain" alt="Logo Proyecto Cachorros" src="/img/logo.png" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-900/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center glow-gold">
                    <span className="text-black font-black text-2xl">₡</span>
                  </div>
                  <h2 className="text-3xl font-bold text-yellow-400">Inversión</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-yellow-900/30 pb-3">
                    <span className="text-gray-300 text-lg">Mensualidad</span>
                    <span className="text-2xl font-bold text-yellow-400">₡3,000</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    * Miercoles y Viernes
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-900/30 relative overflow-hidden">
                {/* Triángulo palpitante de aviso */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div c
                    lassName="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500 animate-pulse"></div>
                    <div className="absolute -top-1 -left-1 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-red-500/30 animate-ping"></div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center glow-gold">
                    <CreditCard className="text-black" size={24} />
                  </div>
                  <div className="flex items-center space-x-3">
                    <h2 className="text-3xl font-bold text-yellow-400">Pagos</h2>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 text-sm font-bold animate-pulse">IMPORTANTE</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 rounded-xl border border-yellow-900/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">S</span>
                      </div>
                      <h3 className="text-lg font-bold text-yellow-400">SINPE Móvil</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Número oficial para pagos:</p>
                    <p className="text-2xl font-bold text-yellow-400 mb-3">8708-3040</p>
                    <div className="bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-yellow-200 text-sm font-semibold">
                        📅 Fecha de pago: Los 15 de cada mes
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">
                    * Asegúrate de incluir el nombre del estudiante en la referencia del pago
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-900/30 relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center glow-gold">
                    <Users className="text-black" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-yellow-400">Categorías</h2>
                </div>
                
                {/* Línea de tiempo moderna */}
                <div className="relative">
                  {/* Línea principal vertical */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-lg shadow-yellow-400/30"></div>
                  
                  {/* Items de la línea de tiempo */}
                  <div className="space-y-6">
                    {categories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-center group cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {/* Punto de la línea de tiempo */}
                        <div className="absolute left-6 w-6 h-6 gold-gradient rounded-full border-4 border-gray-900 shadow-lg shadow-yellow-400/50 group-hover:scale-125 transition-transform duration-300 glow-gold z-10">
                          <div className="absolute inset-0 gold-gradient rounded-full animate-pulse opacity-50"></div>
                        </div>
                        
                        {/* Contenido de la categoría */}
                        <div className="ml-20 flex-1">
                          <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-yellow-900/30 group-hover:border-yellow-400/70 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-yellow-900/20">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                    {category.name}
                                  </h3>
                                  <span className="px-3 py-1 bg-yellow-900/30 rounded-full text-xs font-semibold text-yellow-300 border border-yellow-700/50">
                                    {category.age.split(' ')[1]} {/* Solo el año */}
                                  </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {category.age}
                                </p>
                                <div className="mt-3 flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                  <span className="text-xs text-yellow-400 font-medium">
                                    Click para ver detalles
                                  </span>
                                </div>
                              </div>
                              
                              {/* Botón de vista mejorado */}
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform glow-gold shadow-lg">
                                  <Eye className="text-black" size={18} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Línea conectora horizontal */}
                        <div className="absolute left-9 w-11 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent group-hover:from-yellow-300 transition-colors"></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Efecto de resplandor en la parte inferior */}
                  <div className="absolute bottom-0 left-8 w-1 h-8 bg-gradient-to-t from-transparent to-yellow-400 blur-sm"></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-900/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center glow-gold">
                    <Calendar className="text-black" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-yellow-400">Torneos</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 rounded-xl border border-yellow-900/20 hover:border-yellow-400/50 transition-all">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Torneo de Apertura LINAFA</h3>
                    <p className="text-gray-300 text-sm">Competencia oficial de la Liga Nacional de Fútbol Aficionado</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-yellow-900/20 hover:border-yellow-400/50 transition-all">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Torneo de Clausura LINAFA</h3>
                    <p className="text-gray-300 text-sm">Segunda parte del campeonato oficial anual</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-yellow-900/20 hover:border-yellow-400/50 transition-all">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Partidos Amistosos</h3>
                    <p className="text-gray-300 text-sm">Encuentros de preparación y fortalecimiento deportivo</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-yellow-900/20 hover:border-yellow-400/50 transition-all">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Torneos Locales</h3>
                    <p className="text-gray-300 text-sm">Competencias regionales y cantonales</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sección Entrenadores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="gold-text-gradient">Nuestros Entrenadores</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Profesionales certificados comprometidos con la formación integral de cada jugador
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coaches.map((coach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-900/30 card-hover text-center"
                >
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-gold">
                    <Award className="text-black" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">{coach.name}</h3>
                  <p className="text-gray-300 font-semibold mb-3">{coach.role}</p>
                  <div className="space-y-1">
                    {coach.credentials.map((credential, credIndex) => (
                      <p key={credIndex} className="text-gray-400 text-sm leading-relaxed">
                        {credential}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-black text-black mb-6">¿Listo para Unirte?</h2>
            <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y forma parte de la familia Cachorros
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleContact}
                className="bg-black text-yellow-400 font-bold text-lg px-8 py-6 hover:scale-105 transition-transform"
              >
                <Phone className="mr-2" size={20} />
                Contactar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Categorías */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-yellow-400/50 max-w-2xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre */}
              <button
                className="absolute top-4 right-4 w-12 h-12 gold-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform glow-gold z-10"
                onClick={() => setSelectedCategory(null)}
              >
                <X className="text-black" size={24} />
              </button>

              {/* Contenido del modal */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-black mb-2">
                    <span className="gold-text-gradient">{selectedCategory.name}</span>
                  </h2>
                  <p className="text-xl text-yellow-400 font-bold">{selectedCategory.age}</p>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 gold-gradient rounded-2xl blur-xl opacity-20"></div>
                  <img 
                    className="relative w-full h-64 object-cover rounded-2xl border-4 border-yellow-400/50 shadow-2xl shadow-yellow-900/50" 
                    alt={`Categoría ${selectedCategory.name}`}
                    src={selectedCategory.image}
                  />
                </div>

                <div className="bg-black/50 p-6 rounded-2xl border border-yellow-900/30">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">Descripción</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedCategory.description}</p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="gold-gradient text-black font-bold text-lg px-8 py-3 rounded-xl hover:scale-105 transition-transform glow-gold"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Info;