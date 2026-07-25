export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "short" | "long";
  collection: string[];
  badge?: string;
  fabric: string;
  work: string;
  fit: string;
  sizes: string[];
  occasion: string;
  care: string;
  description: string;
  available: boolean;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ivory-chikankari-short-kurti",
    name: "Ivory Chikankari Short Kurti",
    price: 899,
    originalPrice: 1200,
    category: "short",
    collection: ["College Friendly", "Daily Wear Comfort", "Under ₹999"],
    badge: "Best Seller",
    fabric: "Pure Cotton",
    work: "Intricate hand-done chikankari embroidery",
    fit: "Regular fit, slightly relaxed",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Daily wear, college, casual outings",
    care: "Hand wash in cold water, gentle detergent, dry in shade",
    description:
      "Effortlessly elegant ivory chikankari kurti crafted in breathable pure cotton. The delicate hand-embroidered motifs give it that timeless Lucknowi charm, perfect for daily comfort without compromising on style.",
    available: true,
    image: "https://picsum.photos/seed/ivory-kurti/600/800",
  },
  {
    id: "2",
    slug: "blush-pink-chikankari-long-kurti",
    name: "Blush Pink Chikankari Long Kurti",
    price: 1299,
    category: "long",
    collection: ["Office Wear", "Festive Elegance", "Premium Chikankari"],
    badge: "New Arrival",
    fabric: "Georgette",
    work: "Shadow work and mukaish chikankari",
    fit: "Straight fit, floor-grazing length",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Office, festive occasions, family functions",
    care: "Dry clean or very gentle hand wash, iron on low heat",
    description:
      "A graceful blush pink long kurti in lightweight georgette featuring shadow work chikankari. The flowing silhouette and delicate embroidery make it perfect for office elegance and festive gatherings alike.",
    available: true,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
  },
  {
    id: "3",
    slug: "white-mul-cotton-kurti",
    name: "White Mul Cotton Chikankari Kurti",
    price: 799,
    category: "short",
    collection: ["Daily Wear Comfort", "Summer Specials", "Under ₹999"],
    badge: "Summer Pick",
    fabric: "Mul Cotton",
    work: "Traditional white-on-white chikankari",
    fit: "Loose fit for maximum comfort",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Daily wear, summer outings, casual",
    care: "Machine wash gentle, cold water, dry in shade",
    description:
      "Pure white mul cotton kurti with classic white-on-white chikankari embroidery. Ultra-breathable and supremely comfortable — the perfect summer companion that pairs beautifully with palazzos or jeans.",
    available: true,
    image:
      "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=600&q=80",
  },
  {
    id: "4",
    slug: "sage-green-anarkali-kurti",
    name: "Sage Green Anarkali Chikankari Kurti",
    price: 1599,
    category: "long",
    collection: ["Festive Elegance", "Premium Chikankari", "Office Wear"],
    badge: "Premium",
    fabric: "Chanderi Silk",
    work: "Kamdani and chikankari embroidery",
    fit: "Anarkali flared fit",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Festivals, weddings, formal events",
    care: "Dry clean recommended",
    description:
      "Regal sage green anarkali in luxurious chanderi silk with kamdani and chikankari embroidery. The flared silhouette and shimmering finish make every step feel like royalty.",
    available: true,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
  },
  {
    id: "5",
    slug: "peach-chikankari-short-kurti",
    name: "Peach Blossom Short Kurti",
    price: 949,
    category: "short",
    collection: ["College Friendly", "Daily Wear Comfort"],
    badge: "Trending",
    fabric: "Pure Cotton",
    work: "Phanda and murri chikankari",
    fit: "Slim fit with A-line flare",
    sizes: ["S", "M", "L", "XL"],
    occasion: "College, daily wear, brunch outings",
    care: "Hand wash, cold water, dry in shade",
    description:
      "A charming peach cotton kurti with delicate phanda and murri chikankari work. The A-line silhouette flatters all body types while keeping you comfortable through long college days.",
    available: true,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
  },
  {
    id: "6",
    slug: "lavender-office-kurti",
    name: "Lavender Serenity Office Kurti",
    price: 1199,
    category: "long",
    collection: ["Office Wear", "Daily Wear Comfort"],
    fabric: "Cotton Blend",
    work: "Delicate chikankari with pintuck details",
    fit: "Straight fit, knee-length",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Office, corporate meetings, semi-formal",
    care: "Machine wash gentle or hand wash",
    description:
      "Sophisticated lavender kurti with subtle chikankari embroidery and pintuck detailing. Designed for the modern working woman who values elegance without sacrificing comfort during long work days.",
    available: true,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
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

export const reviews = [
  {
    id: "1",
    name: "Priya S.",
    initials: "PS",
    rating: 5,
    product: "Ivory Chikankari Short Kurti",
    review:
      "Absolutely love this kurti! The fabric is so soft and the chikankari work is exquisite. Got so many compliments at college. Will definitely order more!",
    date: "March 2025",
  },
  {
    id: "2",
    name: "Ananya M.",
    initials: "AM",
    rating: 5,
    product: "Blush Pink Chikankari Long Kurti",
    review:
      "Ordered for office wear and it's perfect. The quality is premium but the price is very reasonable. The WhatsApp ordering process was so smooth!",
    date: "April 2025",
  },
  {
    id: "3",
    name: "Ritu K.",
    initials: "RK",
    rating: 5,
    product: "Sage Green Anarkali Kurti",
    review:
      "Wore this to a family function and received endless compliments. The chikankari work is so intricate and beautiful. Nawabi Aura truly lives up to its name!",
    date: "February 2025",
  },
  {
    id: "4",
    name: "Sneha P.",
    initials: "SP",
    rating: 5,
    product: "White Mul Cotton Kurti",
    review:
      "Perfect for summer! Super breathable and the design is so elegant. Love how it pairs with everything. Already recommended to all my friends.",
    date: "April 2025",
  },
  {
    id: "5",
    name: "Meera D.",
    initials: "MD",
    rating: 4,
    product: "Peach Blossom Short Kurti",
    review:
      "Beautiful kurti, great quality chikankari work. Delivery was prompt and packaging was lovely. The colour is exactly as shown in the photo.",
    date: "March 2025",
  },
  {
    id: "6",
    name: "Kavita R.",
    initials: "KR",
    rating: 5,
    product: "Lavender Serenity Office Kurti",
    review:
      "This has become my go-to office kurti. So comfortable for long days, looks professional, and the chikankari detailing is subtle yet stunning.",
    date: "May 2025",
  },
];
