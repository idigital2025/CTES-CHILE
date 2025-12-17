import React, { useState, useEffect } from 'react';

const slides = [
  {
    tag: 'Última Noticia',
    title: 'Codelco y Anglo American consolidan alianza',
    description: 'Ambas compañías acuerdan operar de forma conjunta dos de los mayores yacimientos de cobre del mundo, buscando eficiencias operativas y sustentabilidad.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSCrWtazDh6FQo8cygwAL4WGRIc--7nLezj6cUjjMY8ctxGa20p0ZAjntTjh8WEGYxnqVyE0wf1qSzg2YKOtSZmjKLDrtACy1BWQ1IIpHkmQCHM0FI09nikysRxym3CLeHnmjy5aQwzzNfGvBDDt2v72Bz6B3H15qXJSF-YPZ-4MbaZXqvkakMoQkGC95c0mjR13FUF4gbat5hACD4ikvlN4Mx1gmxoSDoVLr2u8hi-czQOEYfMN_ff7PwvVrbdClBqd_Swb5COlRW',
    link: '#news-1'
  },
  {
    tag: 'Innovación',
    title: 'Nuevas tecnologías TBM en minería profunda',
    description: 'Exploramos cómo el uso de tuneladoras automatizadas está transformando la seguridad y rapidez en el desarrollo de galerías subterráneas en Chile.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxPcjwelrwKbOk5RRnCJfEwDn5yXtttAidreISicLEibd30p4pvCXSp105xfLT2Uuquu2yCk7G482Rt6W7k_K3xXk4tx46sHUUwnDgBC1vugl0_GTbHRFTxiJ6bt2JcuofE61obTJVZ7oiYS3RrhC1EM6kNjoWK9dSYEus-RXQgLqCwobY37qFfMrwJ2pOIcuMloeRcxdihxtL7S7vYtN4OuFufBpLAcqzBtQ7AxI1bs0j3rDrMoFekcHErMG98AHix4tIQniGdkT',
    link: '#news-2'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative min-h-[500px] lg:min-h-[600px]">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col lg:flex-row transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-64 md:h-96 lg:h-auto order-1 lg:order-1 overflow-hidden group">
              <img 
                alt={slide.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out transform ${currentSlide === index ? 'scale-110' : 'scale-100'}`} 
                src={slide.image} 
              />
              <div className="absolute inset-0 bg-black/10 lg:hidden"></div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex items-center bg-white px-8 py-12 lg:p-20 order-2 lg:order-2 relative z-10">
              <div className={`max-w-xl transition-all duration-700 delay-200 transform ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider mb-6 inline-block shadow-sm">
                  {slide.tag}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h1>
                <div className="w-24 h-1.5 bg-primary mb-8 rounded-full"></div>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
                  {slide.description}
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href={slide.link} 
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full transition-all text-sm shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
                  >
                    Leer más <span className="material-symbols-outlined text-lg ml-2">arrow_forward</span>
                  </a>
                  {/* Indicators */}
                  <div className="flex space-x-2 ml-6">
                    {slides.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-primary w-8' : 'bg-gray-200 hover:bg-gray-300'}`}
                        aria-label={`Slide ${idx + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ITA Logo Strip */}
      <div className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
           <span className="material-symbols-outlined text-9xl">engineering</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-inner">
            <img 
              src="img/ita-library-logo-1584700926.jpg" 
              alt="ITA Library Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Representantes oficiales en Chile de la International Tunnelling and Underground Space Association (ITA-AITES)</h2>
            <p className="text-green-50 text-sm leading-relaxed max-w-4xl opacity-90">
              CTES Chile es miembro activo de la ITA-AITES, la organización global que agrupa a las principales instituciones y expertos en ingeniería subterránea a nivel mundial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;