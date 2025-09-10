import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  useEffect(() => {

    document.title = 'Gurme Kepçe Catering & Tabldot';
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* <Gallery /> */}
        {/*<Testimonials />*/}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gurme Kepçe Catering & Tabldot</h3>
              <p className="text-gray-400 mb-4">
                Her özel gün için olağanüstü mutfak deneyimleri yaratıyoruz.              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/gurmekepce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors">
                  Instagram
                </a>
                <a href="https://wa.me/905372135119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors">
                  Whatsapp
                </a>
              </div>

            </div>

            <div>
              <h4 className="font-semibold mb-4">Servislerimiz</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Kurumsal Etkinlikler</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Düğünler</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Fabrikalar</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Özel Etkinlikler</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Laleli Mahallesi Onat Caddesi</li>
                <li>399 Sk. No:1/A Buca/İzmir</li>
                <li>+90 (537) 213-5119</li>
                <li>gurmekepce@gmail.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sertifikalarımız</h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-400">
                  <li>ISO 10002:2018</li>
                  <li>ISO 22000:2018</li>
                  <li>ISO 45001:2018</li>
                  <li>ISO 14001:2015</li>
                </ul>
                <ul className="space-y-2 text-gray-400">
                  <li>ISO 9001:2015</li>
                  <li>GMP</li>
                  <li>HACCP</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gurme Kepçe Catering & Tabldot. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;