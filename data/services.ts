export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  features: string[];
  icon: string;
}



export const services: Service[] = [
  {
    id: "1",
    title: "Kundli Analysis",
    slug: "kundli-analysis",
    description: "Comprehensive birth chart analysis revealing your life's blueprint, planetary influences, and cosmic destiny with precise predictions.",
    image: "https://images.pexels.com/photos/6473766/pexels-photo-6473766.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,500",
    duration: "60 mins",
    features: [
      "Complete birth chart analysis",
      "Life predictions and guidance",
      "Career and business insights",
      "Marriage and relationship compatibility",
      "Health and wellness guidance",
      "Remedial measures and solutions",
      "Dasha and transit analysis",
      "Lucky dates and timing"
    ],
    icon: "🔮"
  },
  {
    id: "2",
    title: "Palmistry Reading",
    slug: "palmistry-reading",
    description: "Ancient art of palm reading to decode your personality, life events, and future possibilities through the lines on your hands.",
    image: "https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1,800",
    duration: "45 mins",
    features: [
      "Complete palm analysis",
      "Life line interpretation",
      "Heart and head line reading",
      "Career and money line analysis",
      "Health indicators",
      "Marriage and relationship insights",
      "Future predictions",
      "Remedial suggestions"
    ],
    icon: "✋"
  },
  {
    id: "3",
    title: "Numerology Consultation",
    slug: "numerology-consultation",
    description: "Unlock the power of numbers in your life through comprehensive numerological analysis and personalized guidance.",
    image: "https://images.pexels.com/photos/6980999/pexels-photo-6980999.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1,500",
    duration: "40 mins",
    features: [
      "Life path number calculation",
      "Destiny number analysis",
      "Lucky numbers and dates",
      "Name numerology correction",
      "Business name suggestions",
      "Mobile number analysis",
      "Color and gemstone recommendations",
      "Annual predictions"
    ],
    icon: "🔢"
  },
  {
    id: "4",
    title: "Marriage Compatibility",
    slug: "marriage-compatibility",
    description: "Comprehensive compatibility analysis combining Vedic astrology, numerology, and palmistry for perfect marital harmony.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,200",
    duration: "60 mins",
    features: [
      "Gun Milan analysis",
      "Numerological compatibility",
      "Palm reading compatibility",
      "Compatibility percentage",
      "Doshas and remedies",
      "Best marriage timing",
      "Family harmony predictions",
      "Future relationship guidance",
      "Children and prosperity analysis"
    ],
    icon: "💑"
  },
  {
    id: "5",
    title: "Career Guidance",
    slug: "career-guidance",
    description: "Multi-dimensional career analysis using astrology, numerology, and palmistry to find your ideal professional path.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,300",
    duration: "55 mins",
    features: [
      "Career suitability analysis",
      "Numerological career path",
      "Palm reading for profession",
      "Business vs job guidance",
      "Best career timing",
      "Professional growth predictions",
      "Financial prosperity insights",
      "Success enhancement remedies",
      "Partnership compatibility"
    ],
    icon: "💼"
  },
  {
    id: "6",
    title: "Gemstone Consultation",
    slug: "gemstone-consultation",
    description: "Scientific gemstone therapy combining astrological analysis with numerological calculations for maximum benefit.",
    image: "https://images.pexels.com/photos/1018994/pexels-photo-1018994.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1,800",
    duration: "40 mins",
    features: [
      "Personalized gemstone selection",
      "Numerological stone analysis",
      "Wearing guidelines",
      "Quality specifications",
      "Auspicious timing for wearing",
      "Alternative stone options",
      "Maintenance instructions",
      "Combination therapy guidance"
    ],
    icon: "💎"
  },
  {
    id: "7",
    title: "Vastu Consultation",
    slug: "vastu-consultation",
    description: "Comprehensive Vastu analysis integrated with numerological calculations for optimal energy harmonization.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹3,500",
    duration: "90 mins",
    features: [
      "Complete property analysis",
      "Numerological direction analysis",
      "Room-wise Vastu guidance",
      "Entrance and main door advice",
      "Color and decor suggestions",
      "Remedial measures",
      "Energy enhancement tips",
      "Business Vastu consultation",
      "Construction timing guidance"
    ],
    icon: "🏠"
  },
  {
    id: "8",
    title: "Health & Wellness Reading",
    slug: "health-wellness-reading",
    description: "Holistic health analysis through astrology, palmistry, and numerology to identify health patterns and preventive measures.",
    image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2,000",
    duration: "50 mins",
    features: [
      "Astrological health analysis",
      "Palm reading for health indicators",
      "Numerological health patterns",
      "Disease prediction and prevention",
      "Dietary recommendations",
      "Lifestyle modifications",
      "Healing gemstone suggestions",
      "Yoga and meditation guidance"
    ],
    icon: "🌿"
  },
  {
    id: "9",
    title: "Business Consultation",
    slug: "business-consultation",
    description: "Complete business analysis using astrology, numerology, and Vastu to ensure success and prosperity in your ventures.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹4,000",
    duration: "75 mins",
    features: [
      "Business timing analysis",
      "Partnership compatibility",
      "Numerological business name",
      "Office Vastu consultation",
      "Financial growth predictions",
      "Market analysis through astrology",
      "Investment timing guidance",
      "Success enhancement remedies"
    ],
    icon: "📈"
  }
];




