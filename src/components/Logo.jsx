
import React from 'react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32'
  };

  return (
    <img
      src="https://horizons-cdn.hostinger.com/1be14009-cf5a-469f-9e92-6d1326137584/ad5ac3df4777fc5c377ae20d5c2583bb.png"
      alt="Proyecto Cachorros - Escuela de Fútbol"
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
  