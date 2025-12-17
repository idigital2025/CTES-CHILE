import React, { useEffect, useRef, useState } from 'react';

const ContactSection: React.FC = () => {
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
    <section id="contact" ref={ref} className={`py-20 bg-gray-50 reveal ${isActive ? 'active' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">¿TIENES UNA CONSULTA O PROPUESTA?</h2>
           <div className="w-16 h-1 bg-primary mb-6 mx-auto rounded-full"></div>
           <p className="text-gray-600 font-light">Escríbenos para resolver tus dudas, coordinar entrevistas o solicitar información sobre membresías y actividades.</p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
            <input type="text" placeholder="Tu nombre completo" className="w-full border-gray-200 bg-gray-50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm p-3.5 transition-all outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Correo electrónico</label>
            <input type="email" placeholder="tu@email.com" className="w-full border-gray-200 bg-gray-50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm p-3.5 transition-all outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono</label>
            <input type="text" placeholder="+56 9 XXXX XXXX" className="w-full border-gray-200 bg-gray-50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm p-3.5 transition-all outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Motivo de contacto</label>
            <div className="relative">
              <select className="w-full border-gray-200 bg-gray-50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm p-3.5 appearance-none outline-none">
                <option>Membresía, consulta técnica, etc.</option>
                <option>Prensa</option>
                <option>Eventos</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
            <textarea rows={4} placeholder="Cuéntanos en qué podemos ayudarte..." className="w-full border-gray-200 bg-gray-50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-sm p-3.5 transition-all outline-none resize-none"></textarea>
          </div>
          <div className="md:col-span-2 text-center mt-4">
            <button type="button" className="bg-primary hover:bg-primary-dark text-white font-bold px-12 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
              Enviar mensaje
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:border-primary/30 transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">phone</span>
            <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
            <p className="text-sm text-gray-500">+56 9 752 77109</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:border-primary/30 transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">email</span>
            <h3 className="font-bold text-gray-900 mb-1">Correo electrónico</h3>
            <p className="text-sm text-gray-500">cteschile@ctes.cl</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:border-primary/30 transition-colors group">
            <h3 className="font-bold text-gray-900 mb-4">Redes sociales</h3>
            <div className="flex justify-center space-x-4">
              {['share', 'smart_display', 'photo_camera'].map(icon => (
                <a key={icon} href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform">
                  <span className="material-symbols-outlined text-2xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;