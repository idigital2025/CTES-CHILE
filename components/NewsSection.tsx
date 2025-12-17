import React, { useEffect, useRef, useState } from 'react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Minería',
    title: 'Codelco y Anglo American consolidan alianza para explotar en conjunto...',
    excerpt: 'Ambas compañías acuerdan operar de forma conjunta dos de los mayores yacimientos de...',
    date: '15 Enero 2025',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrGJ6_e_o0L5LZoBqt53VFAR_hIGW61IZsPxz4udeuLjJ1TWSHxrD-HpGNNyq2RJ4fMzLk0ufrOJq81yAjKKKyM8P9NU7vGODK-B_pEZ__hp8XzR2hqkRs3XdjTiFkmwCMtnAaJTfUzYmQBwnah6LD9-NftUDMfDoNn4ZnqARRWIJX1SWNdbsA9N7TgDfSAWSDzNkc-BjGSll0oYRzeJaWKHFAOTW4TJcCr7S6PnQgaipUTtmT3JtGDdHZFv3K7I3IQMEdgVqyZdWp'
  },
  {
    id: 2,
    category: 'Infraestructura',
    title: 'Avanza la excavación del túnel de la Línea 3 bajo el Canal de Panamá',
    excerpt: 'Proyecto permitirá duplicar la capacidad de tránsito de embarcaciones en la vía...',
    date: '10 Enero 2025',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVIpa6xdfUGHqCvJw8hihXA5e94BcDoQpzb6MuIdgY0-32Wk0UegpEolzq3zbyqOGL_Y__YKot15uZb70z0s67F7hC6pCOf7gYV5EZbAXSKwyKc5JBO2yMzEgffr3ioFQbZ0HAuW9-gC6q4PK8Pszmpnk774WFvo172VpyfBy9dHBB2DYxdVYU3qE-JIgZGm-fjHC6c-hpECdIgJKpC8ipzDGaFdBvG-hl_YMwLwUdKkci2j4cwIEPkOO3ccOFd0M7_2CjiClWqWhO'
  },
  {
    id: 3,
    category: 'Transporte',
    title: 'Autopista Orbital Norponiente se integra al anillo vial exterior de Santiago',
    excerpt: 'Nueva vía conecta sectores norte y poniente de la capital mejorando la conectividad urbana',
    date: '05 Enero 2025',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGceRoftVqFnB4oS0P7AjOIhmjH6VpU6ASCXL7idNfiOSr_VubgSI-u4HGFoFYgsQ0wERZvSHh7nhVH2AAwyLKYWk9p7mtk5kqpy73Y4KToJoUz0TFuspEYMWZU-c13DfMGLkoz29MATLWIl5YO2H_sv23zLsz8TTMUER9u3MPmP0A_62jattNMikbiE-FUnGcofdE78F3by3Ghjcr9KMJSv6awcdEWE5xY4KfLYEPSXeMTp2f6w_i9lPyAmX0SpimeF1o8koz7UIQ'
  },
  {
    id: 4,
    category: 'Normativa',
    title: 'Nueva normativa ITA para sostenibilidad en túneles urbanos',
    excerpt: 'Guía establece estándares para reducir impacto ambiental en proyectos subterráneos...',
    date: '28 Diciembre 2024',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB11s6TNi_hjJfO0zb-6Vsdh2uUvgy5vBMmYms95TmdpqC7pNsceZAZbI-IQmX4lVq92UHKLjls-7gKnuUUaENi-6GS28PI_PVYeBVxbl9L3EzF_EqJI_kzBPjeTvWn0twrlVKJ0i00EacTrD6f4nLOe4NVCU3lCfattbd8d0F_OL05925rzTJQIcTHJL1sSsarusOP9tzmKi9qBWy0IL-mMuoZf-hfRjhTcX13weFLcQR_9vyj6DAoCDiHLlrKQWvYFm1x4N1ZLI8P'
  }
];

const NewsSection: React.FC = () => {
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
    <section id="news" ref={ref} className={`py-20 bg-gray-50 reveal ${isActive ? 'active' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Actualidad del Mundo Subterráneo</h2>
          <a href="#" className="hidden sm:inline-flex items-center text-primary font-medium text-sm hover:underline">
            Ver archivo <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={item.imageUrl} 
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-gray-400 text-[10px]">
                  <span className="flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1">calendar_today</span> {item.date}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold flex items-center">
                    Leer <span className="material-symbols-outlined text-[12px] ml-1">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <a href="#" className="inline-block bg-white border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Ver todas las noticias
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;