import React from 'react';
import { Palette, Smartphone, Layers, Sparkles, Video, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Palette, title: 'Design Gráfico e Branding', color: 'text-brand-secondary' },
    { icon: Smartphone, title: 'Social Media Design', color: 'text-brand-tertiary' },
    { icon: Layers, title: 'UI/UX para Web & Mobile', color: 'text-blue-400' },
    { icon: Sparkles, title: 'Motion Graphics e VFX', color: 'text-brand-accent' },
    { icon: Video, title: 'Edição de vídeo criativa', color: 'text-green-400' },
    { icon: Zap, title: 'Soluções visuais inovadoras', color: 'text-yellow-400' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-text">
                Sobre <span className="text-brand-secondary">Mim</span>
              </h2>
              <h3 className="text-xl text-brand-secondary font-medium mb-4">
                Williams Junior (.Werse)
              </h3>
            </div>

            <div className="glass-card p-6">
              <p className="text-brand-text/80 leading-relaxed text-lg">
                Sou um designer multidisciplinar especializado em experiências visuais — do gráfico ao digital. 
                Com sólida experiência em design gráfico, mídias sociais, web design e UI/UX, também atuo como 
                editor de vídeo com foco em motion graphics e VFX.
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-brand-text/80 leading-relaxed text-lg">
                Busco criar soluções visuais que unem <span className="text-brand-secondary font-medium">estética</span>, 
                <span className="text-brand-tertiary font-medium"> função</span> e 
                <span className="text-blue-400 font-medium"> inovação</span>, sempre com foco na experiência do usuário 
                e no impacto visual que cada projeto pode gerar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag">Adobe Creative Suite</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">After Effects</span>
              <span className="skill-tag">Cinema 4D</span>
              <span className="skill-tag">Webflow</span>
            </div>
          </div>

          {/* Right side - Skills grid */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-brand-text mb-8">
              Habilidades <span className="text-brand-secondary">Principais</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <skill.icon 
                    className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`} 
                    size={32} 
                  />
                  <h4 className="text-brand-text font-medium leading-snug">
                    {skill.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="glass-card p-6 border-l-4 border-brand-secondary">
              <p className="text-brand-text/90 italic text-lg">
                "Design com alma, pixels com propósito."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;