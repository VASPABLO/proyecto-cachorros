import React from 'react';
import { Phone, Mail, CreditCard } from 'lucide-react';

const InfoBar = () => {
  const infoItems = [
    {
      icon: Phone,
      label: "Contacto",
      value: "+506 8882-6308"
    },
    {
      icon: CreditCard,
      label: "SINPE Móvil",
      value: "8708-3040"
    },
    {
      icon: Mail,
      label: "Email",
      value: "proyectocachorrosba@gmail.com"
    }
  ];

  // Crear el contenido completo que se repetirá
  const createContentBlock = (key) => (
    <div key={key} className="flex items-center space-x-8 whitespace-nowrap">
      {/* Proyecto Cachorros - Elemento principal */}
      <div className="flex items-center space-x-3 px-6">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <span className="text-white font-bold text-lg">
          ⚽ PROYECTO CACHORROS BA
        </span>
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      {/* Separador */}
      <div className="h-6 w-px bg-yellow-400/30"></div>

      {/* Items de información */}
      {infoItems.map((item, index) => (
        <div key={`${key}-${index}`} className="flex items-center space-x-2 px-4">
          <item.icon className="text-yellow-400" size={16} />
          <span className="text-white text-sm font-medium">
            {item.label}:
          </span>
          <span className="text-yellow-300 text-sm font-semibold">
            {item.value}
          </span>
          <div className="ml-6 h-4 w-px bg-yellow-400/20"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-yellow-900/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-yellow-600/5"></div>
      
      <div className="relative h-12 flex items-center">
        <div className="animate-scroll-left flex items-center space-x-12">
          {/* Repetir el contenido 3 veces para eliminar espacios vacíos */}
          {createContentBlock('block-1')}
          {createContentBlock('block-2')}
          {createContentBlock('block-3')}
        </div>
      </div>

      {/* Efectos de gradiente en los bordes */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default InfoBar;