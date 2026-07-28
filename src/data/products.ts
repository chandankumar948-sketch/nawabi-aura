export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "short" | "long" | "palazzo";
  collection: string[];
  badge?: string;
  fabric: string;
  work: string;
  fit: string;
  setIncludes?: string;
  sizes: string[];
  occasion: string;
  care: string;
  description: string;
  available: boolean;
  image: string;
}

export const products: Product[] = [
  {
    id: "7",
    slug: "royal-blue-chikankari-palazzo-set",
    name: "Royal Blue Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/royal-blue-chikankari-palazzo-set.png",
  },
  {
    id: "8",
    slug: "olive-green-chikankari-palazzo-set",
    name: "Olive Green Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/olive-green-chikankari-palazzo-set.png",
  },
  {
    id: "9",
    slug: "baby-pink-chikankari-palazzo-set",
    name: "Baby Pink Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/baby-pink-chikankari-palazzo-set.png",
  },
  {
    id: "10",
    slug: "dark-olive-chikankari-palazzo-set",
    name: "Dark Olive Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/dark-olive-chikankari-palazzo-set.png",
  },
  {
    id: "11",
    slug: "ruby-red-chikankari-palazzo-set",
    name: "Ruby Red Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/ruby-red-chikankari-palazzo-set.png",
  },
  {
    id: "12",
    slug: "sunshine-yellow-chikankari-palazzo-set",
    name: "Sunshine Yellow Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/sunshine-yellow-chikankari-palazzo-set.png",
  },
  {
    id: "13",
    slug: "royal-purple-chikankari-palazzo-set",
    name: "Royal Purple Chikankari Kurta Palazzo Set",
    price: 1450,
    originalPrice: 2550,
    category: "palazzo",
    collection: ["Festive Elegance", "Office Wear", "Premium Chikankari"],
    fabric: "Premium Riyon",
    work: "Lucknowi Chikankari",
    fit: "Straight-fit kurta with matching palazzo",
    setIncludes: "Kurta + Palazzo + Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Festive, Casual, Office, Party Wear",
    care: "Hand wash separately in cold water. Dry in shade. Use mild detergent.",
    description:
      "Elevate your ethnic wardrobe with this elegant Lucknowi Chikankari Kurta Palazzo Set from Nawabi Aura. Crafted from premium Riyon fabric, this 3-piece ensemble features intricate Chikankari embroidery, a straight-fit kurta, matching palazzo, and a lightweight dupatta. Perfect for festive occasions, office wear, family gatherings, and everyday elegance.",
    available: true,
    image: "/images/palazzo-sets/royal-purple-chikankari-palazzo-set.png",
  },
];

export const collections = [
  {
    id: "office-wear",
    name: "Office Wear",
    description: "Elegant, polished kurtis for the modern working woman",
    image: "https://picsum.photos/seed/office-wear/800/600",
    productCount: 8,
  },
  {
    id: "daily-wear",
    name: "Daily Wear Comfort",
    description: "Breathable, comfortable kurtis for everyday elegance",
    image:
      "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=800&q=80",
    productCount: 12,
  },
  {
    id: "festive",
    name: "Festive Elegance",
    description: "Grace and grandeur for every celebration",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    productCount: 6,
  },
  {
    id: "summer",
    name: "Summer Specials",
    description: "Light, breathable kurtis for warm days",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    productCount: 9,
  },
  {
    id: "college",
    name: "College Friendly",
    description: "Stylish, affordable kurtis for campus life",
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
    productCount: 10,
  },
  {
    id: "premium",
    name: "Premium Chikankari",
    description: "Handcrafted masterpieces for the discerning connoisseur",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    productCount: 5,
  },
];

export const reviews: {
  id: string;
  name: string;
  initials: string;
  rating: number;
  product: string;
  review: string;
  date: string;
}[] = [];
