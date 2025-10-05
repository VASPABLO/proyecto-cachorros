import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Info from '@/pages/Info';
import Gallery from '@/pages/Gallery';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/informacion" element={<Info />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </Layout>
  );
}

export default App;