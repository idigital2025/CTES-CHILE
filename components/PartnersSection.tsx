import React, { useEffect, useRef, useState } from 'react';

const partners = [
  'IMEL', 'Eurohinca', 'Sandvik', 'Geosinergia', 'BESSAC', 
  'Mas Errázuriz', 'Pucará', 'Terratest', 'Echeverría', 
  'Soletanche', 'Sigdo Koppers', 'Züblin', 'Acciona', 'Sacyr', 'Ferrovial'
];

const PartnersSection: React.FC = () => {
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
    <section id="partners" ref={ref} className={`py-16 bg-white border-t border-gray-100 overflow-hidden reveal ${isActive ? 'active' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wider text-center md:text-left">
          Nuestros Socios
        </h2>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden mask-fade-sides">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll w-[calc(200px*30)] hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, index) => (
                    <div key={`${partner}-${index}`} className="w-[200px] px-4 flex-shrink-0">
                        <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-pointer">
                            <span className="text-gray-400 font-bold text-xl group-hover:text-gray-700 transition-colors">{partner}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;