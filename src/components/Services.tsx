import React from 'react';
import { Card } from './common/Card';
import { Button } from './common/Button';
import { services } from '../data/mockData';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Services: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="services" className="py-20 bg-gray-50">
  {/* SEO handled in index.html */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`
            text-center mb-16 transition-all duration-700 ease-out
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Yemek Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Samimi toplantılardan görkemli kutlamalara kadar, benzersiz vizyonunuza ve zevkinize göre uyarlanmış unutulmaz mutfak deneyimleri yaratıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group">
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  style={{ opacity: '0', transition: 'opacity 0.5s ease-in' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  className="w-full group-hover:bg-orange-600"
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Rezervasyon Yapın
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Özel bir paket mi lazım? Etkinliğiniz için en uygun çözümü oluşturmak üzere buradayız.
          </p>
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
            Özel Hizmet İsteyin
          </Button>
        </div>
      </div>
    </section>
  );
};
