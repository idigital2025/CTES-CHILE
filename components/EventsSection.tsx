import React, { useEffect, useRef, useState } from 'react';
import { EventItem } from '../types';

const eventsData: EventItem[] = [
  {
    id: 1,
    day: '19', month: 'FEB', year: '2025',
    tag: 'CUPOS LIMITADOS',
    title: 'Seminario BIM en túneles',
    time: '09:00 - 17:00',
    location: 'Santiago',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxPcjwelrwKbOk5RRnCJfEwDn5yXtttAidreISicLEibd30p4pvCXSp105xfLT2Uuquu2yCk7G482Rt6W7k_K3xXk4tx46sHUUwnDgBC1vugl0_GTbHRFTxiJ6bt2JcuofE61obTJVZ7oiYS3RrhC1EM6kNjoWK9dSYEus-RXQgLqCwobY37qFfMrwJ2pOIcuMloeRcxdihxtL7S7vYtN4OuFufBpLAcqzBtQ7AxI1bs0j3rDrMoFekcHErMG98AHix4tIQniGdkT'
  },
  {
    id: 2,
    day: '04', month: 'ABR', year: '2025',
    tag: 'ABIERTO',
    title: 'Encuentro técnico sobre sostenibilidad en obras subterráneas',
    time: '10:00 - 14:00',
    location: 'Valparaíso',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdd3JdbpzIom5sIKSKaAGyN3hFM2jtdwqTAfpuAVFXCu56XagCAaOzGr3yi09toRJuOBEiqqictnyb__mJ32LXOLwApKd-qAuERUlWNA2QVLqCj1_YJLevsyAkEHrOkXpefvvT1N0M1Vz7Uzj0nTPAJF-ONu97oCXDwx6DKxVqwsHChwHmikynYzVozDI765cASsnt81xHGrG2i3l2mqUogv6axQZ086wdtH8h0OfV4FyXB-jwVtR-zNuzsL69LXIrtXGgULSI79hO'
  },
  {
    id: 3,
    day: '28', month: 'MAY', year: '2025',
    tag: '40% DSCTO',
    title: 'Visita técnica CTES a proyecto Los Bronces',
    time: '08:00 - 16:00',
    location: 'Los Bronces',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjDt0_cULX7FqWrmXf6V-UhEUHgGlXuH6YNG7FDJkIRnemzsg9iyg38zlOVGijoc2TmUZygV1u6ZnG5v2FTfaBh7dTuWQJuGAOVPmJ_L_JaB0gOXyf94f2DDkEcgja18as1cFfWpi4ubKyVZ8fBgzQI57lK5CwsZJTnNenGF_hgG6M3kI5DBCOjlRq0CDI81YbF87O3DKApGw0Ei7hlIfgzOY-evkwPm6S-w66hAQV9GqR7fH5ZvrWbP2p_xZW3taCarnfv_oVBr-p'
  }
];

const EventsSection: React.FC = () => {
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
    <section id="events" ref={ref} className={`py-20 bg-gray-50 reveal ${isActive ? 'active' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">EVENTOS Y ACTIVIDADES TÉCNICAS</h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Participa, aprende y mantente al día con lo que ocurre bajo tierra. Como miembro CTES, tendrás acceso preferente a encuentros, visitas y jornadas técnicas del sector subterráneo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <div key={event.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={event.imageUrl} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                
                <div className="absolute top-4 left-4 bg-primary text-white p-2.5 rounded-lg text-center min-w-[3.5rem] shadow-lg">
                  <div className="text-xl font-bold leading-none">{event.day}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider">{event.month}</div>
                  <div className="text-[9px] opacity-80">{event.year}</div>
                </div>
                
                {event.tag && (
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                    {event.tag}
                  </span>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-lg text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {event.title}
                </h3>
                <div className="space-y-3 text-sm text-gray-500 mb-6 flex-grow">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-sm mr-2.5 text-primary">schedule</span> 
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-sm mr-2.5 text-primary">location_on</span> 
                    {event.location}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-primary text-sm font-bold hover:underline mt-auto group/link">
                  Ver detalles <span className="material-symbols-outlined text-xs ml-1 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg">
            <span className="material-symbols-outlined text-sm mr-2">calendar_today</span> Ver calendario completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;