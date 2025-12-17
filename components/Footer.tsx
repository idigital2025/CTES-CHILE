import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <img 
              alt="CTES Logo" 
              className="h-12 w-auto object-contain transition-all duration-300" 
              src="img/logos-ctes.png" 
            />
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Representante ITA-AITES en Chile. Corporación sin fines de lucro dedicada a promover el desarrollo y uso eficiente del espacio subterráneo.
            </p>
            <div className="flex space-x-4">
              {['share', 'smart_display', 'photo_camera'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Inicio', 'Quiénes Somos', 'Socios', 'Socios Jóvenes', 'Hazte Socio'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3 text-primary">•</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recursos */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Recursos</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Noticias', 'Biblioteca', 'Calendario', 'Documentos Técnicos'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center group">
                     <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3 text-primary">•</span>
                     <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">call</span>
                +56 9 752 77109
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">mail</span>
                cteschile@ctes.cl
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary mr-2 text-lg">location_on</span>
                Santiago, Chile
              </li>
              <li className="mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="inline-flex items-center font-medium hover:text-primary">
                  Switch to English <span className="material-symbols-outlined ml-1 text-sm">language</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-800 transition-colors">Política de privacidad</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Términos y condiciones</a>
          </div>
          <div>
            © 2025 CTES Chile. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;