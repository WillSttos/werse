import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Design Gráfico', 'Web Design', 'Motion', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'Identidade Visual',
      description: 'Sistema completo de identidade visual para startup de tecnologia',
      category: 'Design Gráfico',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Logo', 'Papelaria'],
      link: '#'
    },
    {
      id: 2,
      title: 'App Mobile Banking',
      description: 'Interface e experiência do usuário para aplicativo financeiro',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile', 'Fintech', 'UX'],
      link: '#'
    },
    {
      id: 3,
      title: 'Website Responsivo',
      description: 'Landing page moderna com foco em conversão',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Responsive', 'Landing Page', 'HTML/CSS'],
      link: '#'
    },
    {
      id: 4,
      title: 'Motion Graphics Comercial',
      description: 'Animação promocional para campanha publicitária',
      category: 'Motion',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['After Effects', 'Animation', 'VFX'],
      link: '#'
    },
    {
      id: 5,
      title: 'Campanha Social Media',
      description: 'Peças visuais para estratégia de redes sociais',
      category: 'Design Gráfico',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Instagram', 'Facebook', 'Social'],
      link: '#'
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      description: 'Interface de painel administrativo com visualização de dados',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Dashboard', 'Data Viz', 'Web App'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-text">
            Meu <span className="text-brand-secondary">Portfólio</span>
          </h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            Alguns dos meus projetos favoritos que demonstram minha paixão por criar experiências visuais únicas
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="text-brand-secondary mr-2" size={20} />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                activeFilter === filter
                  ? 'bg-brand-secondary text-brand-secondary_text shadow-glow-secondary'
                  : 'bg-brand-primary/50 text-brand-text hover:bg-brand-primary/70 border border-brand-secondary/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-brand-secondary text-brand-secondary_text px-4 py-2 rounded-full font-medium hover:bg-brand-secondary/90 transition-colors"
                    >
                      Ver mais
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-brand-text mb-2">
                  {project.title}
                </h3>
                <p className="text-brand-text/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-brand-tertiary/20 text-brand-tertiary text-xs rounded-full border border-brand-tertiary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Ver todos os projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;