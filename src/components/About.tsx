import React from 'react';
import {Clock, Users, Utensils } from 'lucide-react';
import { Card } from './common/Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { icon: Users, label: 'Hizmet Verdiğimiz Etkinlik', value: '20+' },
  { icon: Clock, label: 'Yıllık Deneyim', value: '35+' },
  { icon: Utensils, label: 'Menü İçeriği', value: '200+' },
];

export const About: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`
            grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out
            ${isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }
          `}
        >
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Kuruluşumuzdan Beri Gastronomide Mükemmellik Sunuyoruz
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Gurme Kepçe’de inanıyoruz ki, lezzetli yemek her unutulmaz anın kalbinde yer alır.
              Tecrübeli aşçılarımız ve hizmet ekibimiz, yılların mutfak deneyimini beklentilerinizi aşma tutkusuyla bir araya getirir.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Yerel ve taze malzemelerle hazırladığımız yemekler, ister bir fabrikanın öğle arası olsun, ister düğün ya da özel bir etkinlik… her tabakta ayrı bir hikâye taşır.
            </p>            
            <p className="text-lg text-gray-600 leading-relaxed">
              Müşterilerimizle yakın iş birliği içinde çalışarak, ihtiyaçlarına ve damak zevklerine uygun özel menüler tasarlarız. Böylece her misafirinizin hafızasında yer edecek, doyurucu ve lezzetli bir yemek deneyimi sunarız.
            </p>

          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional kitchen"
              className="rounded-2xl shadow-2xl"
              loading="eager"
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              style={{ opacity: '0', transition: 'opacity 0.5s ease-in' }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {stats.map((stat) => (
              <Card key={stat.label} hover={false} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <stat.icon size={24} className="text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};