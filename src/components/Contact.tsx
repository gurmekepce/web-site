import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Laleli Mahallesi Onat Caddesi 399 Sk. No:1/A Buca/İzmir',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+90 (537) 213-5119',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gurmekepce@gmail.com',
  },
];

export const Contact: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Lezzetli anlar için başlayalım
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mükemmel etkinliğinizi planlamaya hazır mısınız? Size özel teklif için bugün bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">İletişime Geçin</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <info.icon size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp ile İletişime Geç
            </a>
          </div>

          {/* Google Maps */}
          <div className="bg-white p-8 rounded-2xl shadow-md h-full">
            <div className="space-y-4">
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
                className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors w-full"
              >
                <MapPin size={20} />
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};