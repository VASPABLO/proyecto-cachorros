import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Amamos el fútbol y transmitimos esa pasión a cada uno de nuestros cachorros'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Buscamos la mejora continua en cada entrenamiento y competencia'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Somos una familia unida que apoya y celebra cada logro juntos'
    },
    {
      icon: Target,
      title: 'Disciplina',
      description: 'Inculcamos valores de responsabilidad y compromiso en cada jugador'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nosotros - Proyecto Cachorros | Nuestra Historia y Valores</title>
        <meta name="description" content="Conoce la historia de Proyecto Cachorros, nuestra misión, visión y los valores que nos hacen la mejor escuela de fútbol en Buenos Aires, Puntarenas." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gold-text-gradient">Nuestra Historia</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proyecto Cachorros BA nació del sueño de formar no solo grandes futbolistas, 
              sino personas íntegras que representen con orgullo a Buenos Aires, Puntarenas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-yellow-400">¿Quiénes Somos?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Somos la Asociación Proyecto Cachorros BA (Cédula: 3-002-902183), una escuela de fútbol comprometida con el desarrollo deportivo y la formación integral de niños y jóvenes de ambos géneros en el cantón de Buenos Aires de Puntarenas.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Actualmente contamos con alrededor de 120 estudiantes. Un alto porcentaje proviene del centro de Buenos Aires, pero también tenemos muchachos y muchachas de comunidades como El Socorro, Peje, Santa Marta, Santa Rosa, Ujarrás, Cabagra, Potrero Grande, Térraba, Boruca, Changuena, entre otros. Nuestro equipo de entrenadores certificados trabaja día a día para potenciar las habilidades técnicas, tácticas y físicas de cada jugador, fomentando valores y disciplina.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 gold-gradient rounded-3xl blur-2xl opacity-20"></div>
              <img 
                className="relative rounded-3xl shadow-2xl shadow-yellow-900/30 w-full h-96 object-cover border-4 border-yellow-400/30" 
                alt="Equipo de fútbol Cachorros entrenando"
               src="/img/entrenadores1.png" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gold-text-gradient">Nuestros Valores</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-900/30 card-hover text-center"
                >
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-gold">
                    <value.icon className="text-black" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sección Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-black" size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-black mb-8">Nuestra Misión</h2>
                <p className="text-xl text-black/90 max-w-4xl mx-auto leading-relaxed font-medium">
                  Crear espacios deportivos para los niños y jóvenes del cantón de Buenos Aires 
                  mediante el aprovechamiento de actividades futbolísticas que brinden formación 
                  y actitud deportiva, así como planificar actividades internas y externas en el 
                  bienestar físico y hábitos saludables en el desarrollo de la comunidad, desde 
                  torneos, eventos y vinculación con el medio.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sección Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-yellow-900/30 relative overflow-hidden">
              <div className="absolute inset-0 gold-gradient opacity-5 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 glow-gold">
                    <Award className="text-black" size={40} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-8">
                    <span className="gold-text-gradient">Nuestra Visión</span>
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {[
                    "Conformar categorías de liga menor según la programación del ente nacional que rige el fútbol de Liga Menor a nivel país",
                    "Representar al Cantón en actividades futbolísticas",
                    "Incentivar en los niños y jóvenes la participación en el deporte",
                    "Mejorar la salud y el bienestar de los niños y jóvenes",
                    "Promover actividades extra deportivas que generen unión y sentido de pertenencia en los niños y jóvenes"
                  ].map((objetivo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 p-6 rounded-2xl border border-yellow-600/30 card-hover"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-black font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">{objetivo}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;