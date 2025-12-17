import React, { useEffect, useRef, useState } from 'react';

const AboutSection: React.FC = () => {
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
    <section id="about" ref={ref} className={`py-20 bg-white overflow-hidden reveal ${isActive ? 'active' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2 uppercase tracking-tight">INGENIERÍA SUBTERRÁNEA CON PROPÓSITO</h2>
            <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
              CTES Chile es la Corporación que reúne a empresas, instituciones y profesionales para promover el desarrollo técnico, la innovación y las buenas prácticas en obras subterráneas. Representamos a Chile ante la ITA-AITES y trabajamos por un futuro más eficiente y sostenible bajo tierra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#" className="inline-flex items-center justify-center text-primary font-bold border-2 border-primary/20 bg-primary/5 px-8 py-3.5 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm uppercase">
                Conoce más sobre CTES <span className="material-symbols-outlined text-lg ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 lg:h-96 w-full group">
              <img 
                alt="Subway tunnel visualization" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAifsvLgBHYEI7AbLo3S0K4LmPwfKr6CyQ2XwZaTZeYl7nagK9p4HNTvhSKiOV0WCx2BPJLRyxsBgTebVULwjyKJhKWU1_8UJzEuU5IL5EZckDgsTtQCV7Rh6LLe5Qc8c3ZkNA9guOQMW_ttdA7CoeGAxDn7PprqCfhdky7GQU9Lx2QjJ02aC7oPa4Y4r3EuKpMdOqhNbAGvIOhMzei21qjmwYQJteu-bWzK0Na6fcPFVaTN2-_21KpQ49P_0oLk4LUt0XnJJjFErHR" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Visión CTES</p>
                <h3 className="text-xl font-bold">Liderando el espacio subterráneo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;