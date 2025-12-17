import React, { useState, useEffect, useRef } from 'react';

const LibrarySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="library" 
      ref={sectionRef}
      className={`py-24 bg-gray-900 relative overflow-hidden isolate transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-dark/40 via-gray-900 to-black"></div>
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-5/12 pt-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-green-400 uppercase tracking-wide">Biblioteca Digital Inteligente</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Explora el conocimiento <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-primary-light">subterráneo</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              Accede a más de 5,000 documentos técnicos, papers y videos exclusivos de la industria tunelera global. Potenciado por filtros avanzados para búsquedas profesionales.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {[
                { val: '5.2K+', label: 'Documentos' },
                { val: '350+', label: 'Charlas' },
                { val: 'Global', label: 'Impacto' }
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block text-3xl font-bold text-white mb-1">{stat.val}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Right Side */}
          <div className="lg:w-7/12 w-full flex flex-col gap-6">
            
            {/* Search & Filters Component */}
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              
              <div className="mb-6">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-500">search</span>
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-12 pr-4 py-4 border border-gray-700 rounded-xl leading-5 bg-gray-900/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all shadow-inner" 
                    placeholder="Guidelines for the design of segmental Tunnel Linings..." 
                  />
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Título</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-lg p-2.5 outline-none focus:border-primary">
                    <option>Cualquier título</option>
                    <option>Design Manuals</option>
                    <option>Safety Reports</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Publicación</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-lg p-2.5 outline-none focus:border-primary">
                    <option>Todos los años</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Autor</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-lg p-2.5 outline-none focus:border-primary">
                    <option>Cualquier autor</option>
                    <option>ITA Working Group</option>
                    <option>Comité Técnico CTES</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Categoría</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-lg p-2.5 outline-none focus:border-primary">
                    <option>Todas</option>
                    <option>TBM</option>
                    <option>Sostenimiento</option>
                    <option>Geotecnia</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-green-600 hover:from-primary-dark hover:to-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-green-500/20 transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-95">
                <span className="material-symbols-outlined text-lg">manage_search</span>
                Aplicar filtros y Buscar
              </button>
            </div>

            {/* Featured Cards */}
            <div className="relative group rounded-2xl bg-gray-800 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-5/12 relative h-48 md:h-auto overflow-hidden">
                  <img 
                    alt="Document preview" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDICJumWo41XKptdckZjOjT65S_4rJXgM8Ga3knee3NveMbq9CNgIiekjiMxCU0c0MRLg2vXckD5VQok0ljPUNX-8eAy5wn8WKlPPuxonz9UQ3F54Sp3SUZQCpvM6feCUuR-sZ24eBRUWnX3sBolra2myiyoNcc4lBof-lpToyaHR2W458K7divmju-n-odyoYcRvpcZs2J7i0Ah-xuNvgn1NpOHq9D7RC4dfsvf1e9_4YIGiNSRk6GPLtVAzJENI8bYFLm6ZljObf3" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white text-3xl">picture_as_pdf</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">PDF Técnico</span>
                  </div>
                </div>
                <div className="w-full md:w-7/12 p-8 flex flex-col justify-center relative bg-gray-800">
                  <div className="flex items-center gap-3 mb-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">edit_calendar</span> MAR 2024</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="flex items-center gap-1 text-primary-light">ITA-AITES</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary-light transition-colors">
                    Guidelines for the design of segmental Tunnel Linings
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    Un documento fundamental para ingenieros que trabajan con revestimientos de dovelas en túneles excavados con TBM.
                  </p>
                  <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary-light hover:text-white transition-colors group/link">
                    Descargar Documento <span className="material-symbols-outlined text-sm ml-2 transition-transform group-hover/link:translate-x-1">download</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'article', label: 'Papers Técnicos', sub: 'Publicaciones ITA', count: '2k+' },
                { icon: 'video_library', label: 'Webinars', sub: 'Charlas grabadas', count: '120' }
              ].map((card) => (
                <a key={card.label} href="#" className="p-5 bg-gray-800 border border-gray-700 rounded-2xl hover:border-primary/50 transition-all group flex flex-col justify-between h-32">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                       <span className="material-symbols-outlined">{card.icon}</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-900 px-2 py-0.5 rounded-full">{card.count}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{card.label}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{card.sub}</p>
                  </div>
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;