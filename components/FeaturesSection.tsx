import React, { useEffect, useRef, useState } from 'react';

const FeaturesSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsActive(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref}>
      {/* Membership Benefits */}
      <section className={`py-24 bg-white reveal ${isActive ? 'active' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">FORMA PARTE DEL DESARROLLO SUBTERRÁNEO DE CHILE</h2>
          <div className="w-24 h-1.5 bg-primary mb-8 rounded-full mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed text-lg font-light">
            Súmate a la red de profesionales y empresas que impulsan la ingeniería subterránea. Ser parte de CTES te conecta con oportunidades, conocimiento y una comunidad técnica de alto nivel.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {[
              { icon: 'share', title: 'Red de contactos', desc: 'Conecta con profesionales y empresas líderes del sector' },
              { icon: 'menu_book', title: 'Conocimiento técnico', desc: 'Acceso a biblioteca, publicaciones y documentación ITA' },
              { icon: 'people_outline', title: 'Eventos exclusivos', desc: 'Acceso preferente a seminarios, visitas y jornadas técnicas' },
              { icon: 'stars', title: 'Reconocimiento', desc: 'Forma parte de la comunidad técnica más importante del país' }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Hazte socio ahora <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
            </a>
            <a href="#" className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-8 py-3.5 rounded-full text-sm font-bold transition-all inline-flex items-center justify-center hover:border-gray-400">
              Conoce los beneficios <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary relative bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVIpa6xdfUGHqCvJw8hihXA5e94BcDoQpzb6MuIdgY0-32Wk0UegpEolzq3zbyqOGL_Y__YKot15uZb70z0s67F7hC6pCOf7gYV5EZbAXSKwyKc5JBO2yMzEgffr3ioFQbZ0HAuW9-gC6q4PK8Pszmpnk774WFvo172VpyfBy9dHBB2DYxdVYU3qE-JIgZGm-fjHC6c-hpECdIgJKpC8ipzDGaFdBvG-hl_YMwLwUdKkci2j4cwIEPkOO3ccOFd0M7_2CjiClWqWhO')"}}>
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="material-symbols-outlined text-6xl mb-6 text-green-100 animate-bounce">mail_outline</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Suscríbete a nuestro boletín y mantente al día con los avances, eventos y buenas prácticas del sector subterráneo.</h2>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nombre" className="px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-400/50 w-full sm:w-1/3 shadow-lg" />
            <input type="email" placeholder="Correo electrónico" className="px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-400/50 w-full sm:w-1/3 shadow-lg" />
            <button type="submit" className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105">
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default FeaturesSection;