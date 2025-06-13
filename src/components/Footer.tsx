import React from 'react';
import { Instagram, Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/werse',
      label: 'LinkedIn',
      color: 'hover:text-brand-blue'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/werse',
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    {
      icon: Github,
      href: 'https://github.com/werse',
      label: 'GitHub',
      color: 'hover:text-brand-accent'
    },
    {
      icon: Mail,
      href: 'mailto:werse@email.com',
      label: 'Email',
      color: 'hover:text-brand-secondary'
    }
  ];

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <footer className="bg-brand-primary/50 backdrop-blur-lg border-t border-brand-secondary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-brand-text">
              WilliamsJr,
            </h3>
            <p className="text-brand-text/70 max-w-sm">
              Transformando ideias em experiências visuais únicas. Design com alma, pixels com propósito.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-brand-primary/70 rounded-lg flex items-center justify-center text-brand-text/70 transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-brand-text">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-brand-text/70 hover:text-brand-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-brand-text">
              Contato
            </h4>
            <div className="space-y-2 text-brand-text/70">
              <p>werse@email.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-brand-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-text/60 text-sm">
              © 2025 Williams Jr. Todos os direitos reservados.
            </p>
            <p className="text-brand-text/60 text-sm flex items-center gap-1">
              Feito com <Heart className="text-brand-tertiary" size={16} fill="currentColor" /> por .Werse
            </p>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;