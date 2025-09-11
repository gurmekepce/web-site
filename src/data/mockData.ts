export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'appetizers' | 'mains' | 'desserts' | 'beverages';
  price?: string;
}


export const services: Service[] = [
  {
    id: '1',
    title: 'Kurumsal Etkinlikler',
    description: 'Kurumsal toplantılar, konferanslar ve iş toplantıları için profesyonel catering çözümleri.',
    image: '/kurumsal_etkinlik.png',
    features: ['Taze lezzetler','Özel menüler','Zamanında teslimat']
  },
  {
    id: '2',
    title: 'Düğün Yemekleri',
    description: 'Özel gününüzü unutulmaz kılacak, zarif ve lezzetli yemek deneyimleri ve özel menüler.',
    image: '/dugun4.png',
    features: ['Özel menüler','Şık sunumlar','Eksiksiz organizasyon']
  },
  {
    id: '3',
    title: 'Fabrikalar',
    description: 'Fabrikalar için sağlıklı, dengeli ve zamanında teslim edilen tabldot yemek menüleri.',
    image: '/fabrika.png',
    features: ['Hijyenik hazırlık','Dengeli beslenme','Zamanında teslimat']
  },
  {
    id: '4',
    title: 'Özel Etkinlikler',
    description: 'Her özel etkinliğe özel, özenle hazırlanmış ve şık sunumlu yemekler sunuyoruz.',
    image: '/ozel_etkinlik2.png',
    features: [  'Özel menüler','Esnek seçenekler','Zamanında teslimat']
  }
];
