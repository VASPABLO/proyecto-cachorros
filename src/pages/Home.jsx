
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Users, Target, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Excelencia Deportiva',
      description: 'Entrenamiento profesional enfocado en el desarrollo integral de cada jugador'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Fomentamos valores de compañerismo y respeto dentro y fuera del campo'
    },
    {
      icon: Target,
      title: 'Objetivos Claros',
      description: 'Metodología estructurada para alcanzar el máximo potencial de cada cachorro'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Proyecto Cachorros - Escuela de Fútbol en Buenos Aires, Puntarenas</title>
        <meta name="description" content="Escuela de fútbol Proyecto Cachorros en Buenos Aires, Puntarenas, Costa Rica. Formamos campeones con valores, disciplina y pasión por el deporte." />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Burbujas animadas por toda la sección */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Burbujas lado izquierdo */}
          <div className="absolute top-16 left-8 w-4 h-4 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/4 left-16 w-2 h-2 bg-yellow-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
          <div className="absolute top-2/3 left-12 w-5 h-5 bg-yellow-400/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }}></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-500/35 rounded-full animate-bounce" style={{ animationDelay: '2.8s', animationDuration: '2.7s' }}></div>
          
          {/* Burbujas lado derecho */}
          <div className="absolute top-24 right-12 w-3 h-3 bg-yellow-500/35 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.8s' }}></div>
          <div className="absolute top-1/3 right-8 w-2 h-2 bg-yellow-500/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3s' }}></div>
          <div className="absolute top-2/3 right-16 w-4 h-4 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-24 right-6 w-3 h-3 bg-yellow-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.7s' }}></div>
          
          {/* Burbujas centro superior */}
          <div className="absolute top-12 left-1/3 w-2 h-2 bg-yellow-300/35 rounded-full animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '2.8s' }}></div>
          <div className="absolute top-20 right-1/3 w-4 h-4 bg-yellow-400/25 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.1s' }}></div>
          
          {/* Burbujas centro inferior */}
          <div className="absolute bottom-16 left-1/4 w-3 h-3 bg-yellow-500/30 rounded-full animate-bounce" style={{ animationDelay: '4s', animationDuration: '2.6s' }}></div>
          <div className="absolute bottom-12 right-1/4 w-2 h-2 bg-yellow-300/40 rounded-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.3s' }}></div>
          
          {/* Burbujas pulsantes distribuidas */}
          <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-3/4 right-1/5 w-4 h-4 bg-yellow-500/25 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-yellow-300/30 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-400/35 rounded-full animate-pulse" style={{ animationDelay: '3.2s' }}></div>
          <div className="absolute top-1/5 right-2/5 w-2 h-2 bg-yellow-500/30 rounded-full animate-pulse" style={{ animationDelay: '4.2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 relative"
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight relative z-10">
                <span className="text-white">PROYECTO</span>
                <br />
                <span className="gold-text-gradient text-glow-gold">CACHORROS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed relative z-10">
                Formando campeones con <span className="text-yellow-400 font-bold">pasión</span>, 
                <span className="text-yellow-400 font-bold"> disciplina</span> y 
                <span className="text-yellow-400 font-bold"> valores</span> en Buenos Aires, Puntarenas
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <Link to="/nosotros">
                  <Button className="gold-gradient text-black font-bold text-lg px-8 py-6 hover:scale-105 transition-transform glow-gold">
                    Conoce Más
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/informacion">
                  <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 font-bold text-lg px-8 py-6 hover:bg-yellow-400 hover:text-black transition-all">
                    Información
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 gold-gradient rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Logo size="xl" className="relative float-animation pulse-glow" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            <span className="gold-text-gradient">¿Por Qué Elegirnos?</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-900/30 card-hover hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-900/20"
              >
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mb-6 glow-gold">
                  <feature.icon className="text-black" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img alt="Patrón de balones de fútbol" src="https://images.unsplash.com/photo-1676458106482-44ce4a6dae64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-black">
              ¡Únete a la Familia Cachorros!
            </h2>
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Inscripciones abiertas para todas las categorías. ¡No pierdas la oportunidad de ser parte de nuestro equipo!
            </p>
            <Link to="/informacion">
              <Button className="bg-black text-yellow-400 font-bold text-lg px-10 py-6 hover:scale-105 transition-transform shadow-2xl">
                Inscríbete Ahora
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
  