import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-yellow-900/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Formando campeones dentro y fuera de la cancha desde el corazón de Puntarenas.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-2xl font-bold gold-text-gradient">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-sm">Buenos Aires, Puntarenas, Costa Rica</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-sm">+506 8882-6308 (Cristian Quesada)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-sm">proyectocachorrosbuenosaires@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-2xl font-bold gold-text-gradient">Síguenos</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center hover:scale-110 transition-transform glow-gold"
                aria-label="Facebook"
              >
                <Facebook className="text-black" size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center hover:scale-110 transition-transform glow-gold"
                aria-label="Instagram"
              >
                <Instagram className="text-black" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-900/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Proyecto Cachorros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;