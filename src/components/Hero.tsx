import React from 'react';
import { ArrowDown, Palette, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Glassmorphism container */}
      <div className="glass-card max-w-4xl mx-auto text-center px-8 py-16 relative z-10">
        {/* Main title with glow effect */}
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-fadeInUp">
          <span className="text-brand-text">Williams Jr.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-brand-text/80 mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
          Transformando ideias em <span className="text-brand-secondary font-medium">experiências visuais únicas</span>
        </p>
        
        {/* Description */}
        <p className="text-brand-text/70 text-lg mb-12 max-w-xl mx-auto animate-fadeInUp animation-delay-400">
          Designer multidisciplinar especializado em experiências visuais — do gráfico ao digital.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animation-delay-600">
          <a
            href="#portfolio"
            className="btn-primary flex items-center gap-2 group"
          >
            <Palette size={20} />
            Ver Portfólio
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#contact"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail size={20} />
            Contato Rápido
          </a>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-brand-tertiary/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="text-brand-secondary/60" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;