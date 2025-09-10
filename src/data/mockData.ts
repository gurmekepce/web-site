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

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
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

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Artisanal Charcuterie Board',
    description: 'Carefully curated selection of premium cheeses, cured meats, and accompaniments',
    image: 'https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'appetizers'
  },
  {
    id: '2',
    name: 'Herb-Crusted Salmon',
    description: 'Fresh Atlantic salmon with herbs, served with seasonal vegetables and lemon butter',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mains'
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, vanilla ice cream and berry compote',
    image: 'https://images.pexels.com/photos/2099348/pexels-photo-2099348.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'desserts'
  },
  {
    id: '4',
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan',
    image: 'https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mains'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    name: 'Ayşe Yılmaz',
    role: 'Etkinlik Müdürü',
    company: 'Teknoloji A.Ş.',
    content: 'Yıllık konferansımız için verdikleri catering hizmeti gerçekten olağanüstüydü. Sunumdan lezzete kadar her detay mükemmeldi. Misafirlerimiz hala bu muhteşem lezzetlerden bahsediyor!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5
  },
  {
    id: 'testimonial2',
    name: 'Mehmet Demir',
    role: 'Düğün Organizatörü',
    company: 'Elite Organizasyon',
    content: 'Bu catering ekibiyle çalışmak bir rüya gibiydi. Her şeyi kusursuz bir şekilde hallettiler ve yemekler restoran kalitesindeydi. Kesinlikle tavsiye ediyorum!',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5
  },
  {
    id: 'testimonial3',
    name: 'Zeynep Kaya',
    role: 'İK Direktörü',
    company: 'Global Çözümler',
    content: 'Profesyonel, güvenilir ve lezzetli! Şirket toplantımız için verdikleri hizmet beklentilerimizi aştı. Kesinlikle tekrar tercih edeceğiz.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Corporate Lunch Setup',
    category: 'corporate'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Elegant Wedding Reception',
    category: 'wedding'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Gourmet Appetizer Spread',
    category: 'appetizers'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Holiday Party Buffet',
    category: 'events'
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Premium Dessert Station',
    category: 'desserts'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Outdoor Event Catering',
    category: 'outdoor'
  }
];