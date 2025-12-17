import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import LibrarySection from './components/LibrarySection';
import PartnersSection from './components/PartnersSection';
import EventsSection from './components/EventsSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      
      {/* 
        Header Component 
        Corresponds to header.php in WordPress template hierarchy 
      */}
      <Header />

      {/* 
        Main Body Content
        Corresponds to index.php / page.php loop 
      */}
      <main className="flex-grow">
        <Hero />
        <NewsSection />
        <AboutSection />
        <LibrarySection />
        <PartnersSection />
        <EventsSection />
        <FeaturesSection />
        <ContactSection />
      </main>

      {/* 
        Footer Component
        Corresponds to footer.php in WordPress template hierarchy
      */}
      <Footer />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-primary/50 group">
          <span className="material-symbols-outlined group-hover:animate-pulse">chat_bubble_outline</span>
        </button>
      </div>

    </div>
  );
}

export default App;