import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PHONE, EMAIL, ADDRESS } from '../config/site';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adres',
    value: ADDRESS,
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: PHONE,
    link: `tel:${PHONE.replace(/\s+/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
  },
];

export const Contact: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catering ve tabldot hizmetleri için hemen bizimle iletişime geçin. Telefon, email ya da WhatsApp üzerinden kolayca ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Bize Ulaşın</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <info.icon size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:underline">{info.value}</a>
                      ) : (
                        <div className="text-gray-600">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/905372135119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 px-6 rounded-lg hover:bg-green-600 transition-colors mt-8 w-full"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
              </svg>
              WhatsApp ile İletişime Geç
            </a>
          </div>

          {/* Google Maps */}
          <div className="bg-white p-8 rounded-2xl shadow-md h-full">
            <iframe
              title="Gurme Kepçe Konum"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d256.7098158558498!2d27.152545416488575!3d38.39671168520636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9fe182b604d%3A0xac6e2ee12657903a!2sGurmeKep%C3%A7e%20Catering%20%26%20Tabldot!5e0!3m2!1str!2sus!4v1757506533854!5m2!1str!2sus"
              className="w-full min-h-[400px] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=38.396635624906025,27.152509465801977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors w-full mt-4"
            >
              <MapPin size={20} />
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
