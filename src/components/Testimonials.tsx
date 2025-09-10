import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { elementRef, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`
            text-center mb-16 transition-all duration-700 ease-out
            ${isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Müşterilerimizin Yorumları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sadece bizim sözümüze güvenmeyin. Memnun müşterilerimizin bizimle olan deneyimleri hakkında söylediklerini dinleyin.          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 md:p-12">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 text-center px-4">
                  {/* Stars */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="max-w-2xl mx-auto text-base md:text-xl lg:text-2xl text-gray-800 mb-6 md:mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover bg-gray-100"
                      loading="eager"
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      style={{ opacity: '0', transition: 'opacity 0.3s ease-in' }}
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`
                  w-3 h-3 rounded-full transition-colors duration-300
                  ${currentIndex === index
                    ? 'bg-orange-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                aria-label={`${testimonial.name} yorumuna git`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};