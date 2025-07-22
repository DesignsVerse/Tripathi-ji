export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  image: string;
  price: string;
  duration: string;
  features: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Kundli Analysis",
    slug: "kundli-analysis",
    description: "Comprehensive birth chart analysis revealing your life's blueprint, planetary influences, and cosmic destiny with precise predictions.",
    shortDesc: "Complete horoscope reading and life predictions",
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
    shortDesc: "Discover your destiny through palm lines",
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
    shortDesc: "Harness the power of numbers for success",
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
    shortDesc: "Find your perfect life partner compatibility",
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
    shortDesc: "Discover your ideal career path",
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
    shortDesc: "Get your lucky gemstone recommendations",
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
    shortDesc: "Create harmony in your living spaces",
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
    shortDesc: "Preventive health guidance through cosmic wisdom",
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
    shortDesc: "Cosmic guidance for business success",
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

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Power of Vedic Astrology in Modern Life",
    slug: "power-of-vedic-astrology-modern-life",
    excerpt: "Discover how ancient Vedic wisdom can guide your modern lifestyle decisions and bring clarity to your life's journey.",
    content: `
# The Power of Vedic Astrology in Modern Life

In today's fast-paced world, many people are turning back to ancient wisdom for guidance and clarity. Vedic astrology, also known as Jyotish, offers profound insights that remain remarkably relevant in our modern context.

## Understanding Vedic Astrology

Vedic astrology is a time-tested system that originated in ancient India over 5,000 years ago. Unlike Western astrology, it uses the sidereal zodiac and incorporates complex calculations based on the exact positions of planets at the time of birth.

## Modern Applications

### Career Guidance
In today's competitive job market, Vedic astrology can help identify your natural talents and the most suitable career paths based on your planetary positions.

### Relationship Harmony
Understanding astrological compatibility can lead to more harmonious relationships and better communication with loved ones.

### Health and Wellness
Vedic astrology provides insights into health tendencies and suggests preventive measures through lifestyle adjustments and remedial practices.

## The Science Behind It

Modern quantum physics is beginning to validate what ancient sages knew - that everything in the universe is interconnected. The gravitational and electromagnetic fields of celestial bodies do indeed influence life on Earth.

## Practical Benefits

- Better decision-making timing
- Improved self-understanding
- Enhanced spiritual growth
- Clarity in life purpose
- Stress reduction and mental peace

Incorporating Vedic astrological guidance into modern life doesn't mean abandoning logic or personal responsibility. Rather, it provides an additional layer of insight that can enhance your decision-making process and overall well-being.
    `,
    image: "https://images.pexels.com/photos/6473766/pexels-photo-6473766.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Pandit Tripathi",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Astrology",
    tags: ["Vedic Astrology", "Modern Life", "Guidance", "Spiritual Growth"]
  },
  {
    id: "2",
    title: "Understanding Your Birth Chart: A Beginner's Guide",
    slug: "understanding-birth-chart-beginners-guide",
    excerpt: "Learn how to read and interpret your birth chart with this comprehensive guide for astrology beginners.",
    content: `
# Understanding Your Birth Chart: A Beginner's Guide

Your birth chart, also known as a natal chart or horoscope, is like a cosmic fingerprint - unique to you and filled with insights about your personality, life path, and potential.

## What is a Birth Chart?

A birth chart is a map of where the planets were positioned at the exact moment and location of your birth. It's divided into 12 houses, each representing different areas of life.

## The Key Components

### The 12 Houses
1. **1st House (Ascendant)**: Your personality and physical appearance
2. **2nd House**: Wealth, possessions, and values
3. **3rd House**: Communication, siblings, and short travels
4. **4th House**: Home, family, and emotional foundations
5. **5th House**: Creativity, children, and romance
6. **6th House**: Health, work, and daily routines
7. **7th House**: Marriage, partnerships, and open enemies
8. **8th House**: Transformation, secrets, and shared resources
9. **9th House**: Higher learning, spirituality, and long travels
10. **10th House**: Career, reputation, and social status
11. **11th House**: Friends, hopes, and aspirations
12. **12th House**: Spirituality, subconscious, and hidden enemies

### The Planets
Each planet represents different energies and aspects of life:
- **Sun**: Core self, ego, vitality
- **Moon**: Emotions, mind, mother
- **Mars**: Energy, courage, conflicts
- **Mercury**: Communication, intelligence, business
- **Jupiter**: Wisdom, prosperity, spirituality
- **Venus**: Love, beauty, relationships
- **Saturn**: Discipline, challenges, karma
- **Rahu & Ketu**: Karmic nodes, life lessons

## Reading Your Chart

Start by identifying your ascendant (rising sign) and the position of your Moon and Sun. These three form the foundation of your astrological profile.

## Practical Applications

Understanding your birth chart can help you:
- Recognize your natural strengths and challenges
- Choose the right career path
- Improve relationships
- Time important decisions
- Understand your life's purpose

Remember, astrology is a tool for self-understanding and guidance, not a fixed destiny. You always have free will to shape your life's direction.
    `,
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Pandit Tripathi",
    date: "2024-01-10",
    readTime: "10 min",
    category: "Education",
    tags: ["Birth Chart", "Beginner Guide", "Houses", "Planets"]
  },
  {
    id: "3",
    title: "Gemstones and Their Astrological Benefits",
    slug: "gemstones-astrological-benefits",
    excerpt: "Explore the mystical world of gemstones and how they can enhance your life according to Vedic astrology principles.",
    content: `
# Gemstones and Their Astrological Benefits

Gemstones have been revered for their mystical and healing properties for thousands of years. In Vedic astrology, specific gems are recommended based on individual birth charts to enhance positive planetary influences.

## The Science of Gemstones

Gemstones are believed to work through their unique vibrational frequencies that resonate with specific planetary energies. When worn correctly, they can amplify positive influences and neutralize negative ones.

## Popular Astrological Gemstones

### Ruby (Manikya)
- **Planet**: Sun
- **Benefits**: Boosts confidence, leadership qualities, and vitality
- **Who should wear**: Those with weak or afflicted Sun in their chart

### Pearl (Moti)
- **Planet**: Moon
- **Benefits**: Enhances emotional stability and mental peace
- **Who should wear**: People with Moon-related issues or mental stress

### Red Coral (Moonga)
- **Planet**: Mars
- **Benefits**: Increases courage, energy, and physical strength
- **Who should wear**: Those needing more assertiveness and vitality

### Emerald (Panna)
- **Planet**: Mercury
- **Benefits**: Improves communication, business acumen, and intelligence
- **Who should wear**: Students, businesspeople, and communicators

### Yellow Sapphire (Pukhraj)
- **Planet**: Jupiter
- **Benefits**: Brings wisdom, prosperity, and spiritual growth
- **Who should wear**: Those seeking knowledge, wealth, and spiritual advancement

### Diamond (Heera)
- **Planet**: Venus
- **Benefits**: Enhances love, beauty, and artistic abilities
- **Who should wear**: Artists, performers, and those seeking marital harmony

### Blue Sapphire (Neelam)
- **Planet**: Saturn
- **Benefits**: Provides discipline, focus, and removes obstacles
- **Who should wear**: Those facing Saturn-related challenges

## Important Guidelines

### Quality Matters
The gemstone must be:
- Natural and untreated
- Of good clarity and color
- Free from visible cracks or inclusions
- Of appropriate weight (usually 3-5 carats)

### Proper Wearing Method
- Consult an astrologer before wearing
- Purify the stone before first use
- Wear on the correct finger and day
- Set in the appropriate metal
- Maintain regular cleansing rituals

## Precautions

- Never wear gemstones without astrological consultation
- Some stones may not suit everyone
- Regular purification is essential
- Remove during negative activities
- Be aware of genuine vs. synthetic stones

Remember, gemstones are tools for enhancement, not substitutes for hard work and good karma. They work best when combined with positive actions and spiritual practices.
    `,
    image: "https://images.pexels.com/photos/1018994/pexels-photo-1018994.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Pandit Tripathi",
    date: "2024-01-05",
    readTime: "12 min",
    category: "Gemstones",
    tags: ["Gemstones", "Healing", "Planetary Benefits", "Jewelry"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Pandit Tripathi ji's guidance completely transformed my life. His kundli analysis was incredibly accurate, and the remedies he suggested helped me overcome major obstacles in my career.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Kundli Analysis"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The marriage compatibility consultation was a blessing. Pandit ji's insights helped us understand each other better, and now we have a harmonious relationship.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Marriage Compatibility"
  },
  {
    id: 3,
    name: "Amit Gupta",
    location: "Bangalore",
    rating: 5,
    text: "I was confused about my career direction. Pandit Tripathi ji's guidance helped me choose the right path, and I'm now successfully running my own business.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Career Guidance"
  },
  {
    id: 4,
    name: "Meena Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "The gemstone consultation changed everything for me. The recommended stone brought positive changes in my health and overall well-being within months.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Gemstone Consultation"
  },
  {
    id: 5,
    name: "Suresh Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Pandit ji's Vastu consultation for our new home was amazing. The positive energy in our house is noticeable, and our family feels more peaceful and prosperous.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
    service: "Vastu Consultation"
  }
];

export const faqs = [
  {
    id: 1,
    question: "How accurate are astrological predictions?",
    answer: "Vedic astrology, when practiced by experienced astrologers, can be highly accurate. However, it's important to understand that astrology provides guidance and probabilities, not fixed destinies. The accuracy depends on precise birth details and the astrologer's expertise."
  },
  {
    id: 2,
    question: "What information do I need to provide for a consultation?",
    answer: "You need to provide your exact birth date, time (as accurate as possible), and place of birth. Even a few minutes difference in birth time can affect the reading, so try to get the most accurate time from official records."
  },
  {
    id: 3,
    question: "How long does a typical consultation take?",
    answer: "Consultation duration varies by service type. A basic kundli reading takes 45-60 minutes, while comprehensive consultations can take 60-90 minutes. We ensure you have enough time to ask questions and understand the guidance provided."
  },
  {
    id: 4,
    question: "Can astrology help with health issues?",
    answer: "Astrology can indicate health tendencies and potential problem areas based on planetary positions. However, it should complement, not replace, medical treatment. We often suggest preventive measures and lifestyle changes based on astrological insights."
  },
  {
    id: 5,
    question: "Do remedies really work?",
    answer: "Astrological remedies work by harmonizing planetary energies and creating positive vibrations. Their effectiveness depends on faith, proper implementation, and consistency. Remedies should be performed with understanding and devotion for best results."
  },
  {
    id: 6,
    question: "How often should I consult an astrologer?",
    answer: "For general guidance, an annual consultation is usually sufficient. However, you may need more frequent consultations during major life transitions, important decisions, or challenging periods. Emergency consultations are also available when needed."
  }
];