import React, { useEffect, useState } from 'react';
import { ChefHat, ArrowDown } from 'lucide-react';
import { Button } from './common/Button';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <ChefHat size={40} className="text-orange-400" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Mükemmel
            <span className="block text-orange-400">Catering</span>
            <span className="block">Deneyimleri</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Gurme mutfağı, kusursuz hizmeti ve her damak zevkine hitap eden unutulmaz lezzet deneyimleriyle etkinliklerinizi bir üst seviyeye taşıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToServices}
              className="animate-pulse-slow"
            >
              Hizmetlerimizi Keşfedin
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Teklif Alın
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer animate-bounce"
        onClick={scrollToServices}
      >
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
          <ArrowDown size={24} className="text-white" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};