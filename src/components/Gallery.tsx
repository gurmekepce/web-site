import React from 'react';
import { galleryItems } from '../data/mockData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Gallery: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`
            text-center mb-12 transition-all duration-700 ease-out
            ${isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
            }
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Örnek Çalışmalarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Son dönemde yaptığımız çalışmaları keşfedin, catering hizmeti verdiğimiz özel etkinliklere göz atın
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl
                transition-all duration-500 ease-out cursor-pointer
                opacity-100 translate-y-0
              `}
              style={{ 
                transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                transition: `transform 0.5s ease-out ${index * 100}ms, opacity 0.5s ease-out ${index * 100}ms`
              }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  style={{ opacity: '0', transition: 'opacity 0.5s ease-in' }}
                />
              </div>
              
              {/* Overlay 
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-orange-300 capitalize">{item.category}</p>
                </div>
              </div>
              */}
            </div>
          ))}
        </div>

        {galleryItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Henüz fotoğraf eklenmemiş.</p>
          </div>
        )}
      </div>
    </section>
  );
};