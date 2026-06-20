import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-card py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">restaurant</span>
          <span className="text-2xl font-bold text-on-surface">NutriVision</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Features</a>
          <a href="#plans" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Plans</a>
          <a href="#testimonials" className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">Testimonials</a>
          <button className="px-6 py-2 bg-gradient-to-r from-primary-fixed-dim to-tertiary-fixed-dim text-background rounded-lg font-semibold hover:scale-105 transition-transform gradient-animate">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
}
