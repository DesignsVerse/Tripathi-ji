export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    sections: { heading: string; description: string }[];
    image: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Power of Vedic Astrology in Modern Life",
      slug: "power-of-vedic-astrology-modern-life",
      excerpt: "Discover how ancient Vedic wisdom can guide your modern lifestyle decisions and bring clarity to your life's journey.",
      sections: [
        { 
          heading: "Introduction", 
          description: "In today's fast-paced world, many people are turning back to ancient wisdom for guidance and clarity. Vedic astrology, also known as Jyotish, offers profound insights that remain remarkably relevant in our modern context."
        },
        { 
          heading: "Understanding Vedic Astrology", 
          description: "Vedic astrology is a time-tested system that originated in ancient India over 5,000 years ago. Unlike Western astrology, it uses the sidereal zodiac and incorporates complex calculations based on the exact positions of planets at the time of birth."
        },
        { 
          heading: "Modern Applications", 
          description: "Vedic astrology can help identify your natural talents and the most suitable career paths based on your planetary positions. It aids in understanding astrological compatibility for more harmonious relationships and provides insights into health tendencies, suggesting preventive measures through lifestyle adjustments and remedial practices."
        },
        { 
          heading: "The Science Behind It", 
          description: "Modern quantum physics is beginning to validate what ancient sages knew - that everything in the universe is interconnected. The gravitational and electromagnetic fields of celestial bodies do indeed influence life on Earth."
        },
        { 
          heading: "Practical Benefits", 
          description: "Incorporating Vedic astrological guidance into modern life offers benefits like better decision-making timing, improved self-understanding, enhanced spiritual growth, clarity in life purpose, and stress reduction for mental peace."
        }
      ],
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
      sections: [
        { 
          heading: "Introduction", 
          description: "Your birth chart, also known as a natal chart or horoscope, is like a cosmic fingerprint - unique to you and filled with insights about your personality, life path, and potential."
        },
        { 
          heading: "What is a Birth Chart?", 
          description: "A birth chart is a map of where the planets were positioned at the exact moment and location of your birth. It's divided into 12 houses, each representing different areas of life."
        },
        { 
          heading: "The Key Components", 
          description: "The 12 houses cover aspects like personality, wealth, communication, and career, while planets like the Sun, Moon, and Mars represent energies such as vitality, emotions, and courage."
        },
        { 
          heading: "Reading Your Chart", 
          description: "Start by identifying your ascendant (rising sign) and the position of your Moon and Sun. These three form the foundation of your astrological profile."
        },
        { 
          heading: "Practical Applications", 
          description: "Understanding your birth chart can help you recognize your natural strengths and challenges, choose the right career path, improve relationships, time important decisions, and understand your life's purpose."
        }
      ],
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
      sections: [
        { 
          heading: "Introduction", 
          description: "Gemstones have been revered for their mystical and healing properties for thousands of years. In Vedic astrology, specific gems are recommended based on individual birth charts to enhance positive planetary influences."
        },
        { 
          heading: "The Science of Gemstones", 
          description: "Gemstones are believed to work through their unique vibrational frequencies that resonate with specific planetary energies. When worn correctly, they can amplify positive influences and neutralize negative ones."
        },
        { 
          heading: "Popular Astrological Gemstones", 
          description: "Gemstones like Ruby (Sun), Pearl (Moon), Red Coral (Mars), Emerald (Mercury), Yellow Sapphire (Jupiter), Diamond (Venus), and Blue Sapphire (Saturn) each offer specific benefits like boosting confidence, emotional stability, or discipline."
        },
        { 
          heading: "Important Guidelines", 
          description: "Ensure gemstones are natural, untreated, of good clarity, and worn correctly after consulting an astrologer. Proper purification and wearing methods are crucial for effectiveness."
        },
        { 
          heading: "Precautions", 
          description: "Never wear gemstones without astrological consultation, ensure regular purification, and avoid synthetic stones. Gemstones are tools for enhancement, not substitutes for hard work and good karma."
        }
      ],
      image: "https://images.pexels.com/photos/1018994/pexels-photo-1018994.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Pandit Tripathi",
      date: "2024-01-05",
      readTime: "12 min",
      category: "Gemstones",
      tags: ["Gemstones", "Healing", "Planetary Benefits", "Jewelry"]
    }
  ];