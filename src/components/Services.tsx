import React from 'react';
import { Palette, Globe, Smartphone, Video, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Design para redes sociais',
      description: 'Criação de conteúdo visual estratégico para Instagram, Facebook e outras plataformas, focado em engajamento e conversão.',
      features: ['Posts e Stories', 'Templates personalizados', 'Planejamento visual', 'Identidade digital']
    },
    {
      icon: Palette,
      title: 'Identidade visual',
      description: 'Desenvolvimento completo de marca, desde conceito até implementação, criando identidades memoráveis e impactantes.',
      features: ['Logo e símbolo', 'Manual da marca', 'Papelaria corporativa', 'Aplicações diversas']
    },
    {
      icon: Globe,
      title: 'Web design responsivo',
      description: 'Criação de websites modernos e funcionais, otimizados para todos os dispositivos e focados na experiência do usuário.',
      features: ['Design responsivo', 'UI/UX otimizada', 'Prototipagem', 'Landing pages']
    },
    {
      icon: Smartphone,
      title: 'Protótipos UI/UX interativos',
      description: 'Desenvolvimento de interfaces intuitivas e funcionais para aplicativos e sistemas web, priorizando usabilidade.',
      features: ['Wireframes', 'Protótipos clickáveis', 'Testes de usabilidade', 'Design systems']
    },
    {
      icon: Video,
      title: 'Edição de vídeos com motion e VFX',
      description: 'Criação de conteúdo audiovisual profissional com efeitos especiais e animações que cativam e engajam.',
      features: ['Motion graphics', 'Efeitos visuais', 'Edição profissional', 'Animações 2D/3D']
    },
    {
      icon: Zap,
      title: 'Consultoria em design',
      description: 'Orientação estratégica para projetos visuais, análise de marca e recomendações para otimização de presença digital.',
      features: ['Auditoria visual', 'Estratégia de marca', 'Análise competitiva', 'Roadmap de design']
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-text">
            Meus <span className="text-brand-secondary">Serviços</span>
          </h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            Soluções visuais completas para transformar sua marca e conectar com seu público de forma autêntica
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-brand-secondary group-hover:text-brand-accent transition-colors" size={32} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-brand-text mb-4">
                {service.title}
              </h3>
              
              <p className="text-brand-text/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-brand-text/80"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="font-display text-2xl font-bold text-brand-text mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-brand-text/70 mb-6">
              Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade visual.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <Zap size={20} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;