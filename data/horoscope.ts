export interface Horoscope {
    id: string;
    name: string;
    slug: string;
    image: string;
    shortDesc: string;
    dateRange: string;
    sections: { heading: string; description: string }[];
  }
  
  export const horoscopes: Horoscope[] = [
    {
      id: "1",
      name: "Aries",
      slug: "aries",
      image: "/horoscop/1.png",
      shortDesc: "Bold and ambitious, Aries leads with courage and enthusiasm.",
      dateRange: "March 21 - April 19",
      sections: [
        { 
          heading: "Overview", 
          description: "Aries, the first sign of the zodiac, is known for its fiery energy and leadership qualities. Ruled by Mars, you are driven by passion and determination, always ready to take on new challenges."
        },
        { 
          heading: "Personality Traits", 
          description: "You are confident, energetic, and independent. Your natural charisma makes you a born leader, but your impulsiveness can sometimes lead to hasty decisions."
        },
        { 
          heading: "Career and Wealth", 
          description: "Aries excels in roles requiring initiative and boldness. This month, focus on strategic planning to maximize opportunities for growth and financial stability."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your passionate nature seeks excitement in relationships. Open communication will strengthen bonds, while patience will help resolve conflicts."
        }
      ]
    },
    {
      id: "2",
      name: "Taurus",
      slug: "taurus",
      image: "/horoscop/2.png",
      shortDesc: "Grounded and reliable, Taurus values stability and comfort.",
      dateRange: "April 20 - May 20",
      sections: [
        { 
          heading: "Overview", 
          description: "Taurus, ruled by Venus, is known for its steadfast nature and love for beauty and comfort. You are practical and determined, with a strong sense of loyalty."
        },
        { 
          heading: "Personality Traits", 
          description: "Your patience and persistence make you dependable, but your stubbornness can sometimes hinder flexibility. Embrace change to unlock new possibilities."
        },
        { 
          heading: "Career and Wealth", 
          description: "This month, your hard work will pay off in professional endeavors. Stay focused on long-term goals, and avoid impulsive financial decisions."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your loyalty strengthens relationships, but ensure you express your feelings openly to avoid misunderstandings with loved ones."
        }
      ]
    },
    {
      id: "3",
      name: "Gemini",
      slug: "gemini",
      image: "/horoscop/3.png",
      shortDesc: "Curious and adaptable, Gemini thrives on communication and variety.",
      dateRange: "May 21 - June 20",
      sections: [
        { 
          heading: "Overview", 
          description: "Gemini, ruled by Mercury, is known for its quick wit and versatility. You love learning and connecting with others, making you a natural communicator."
        },
        { 
          heading: "Personality Traits", 
          description: "Your adaptability and intellectual curiosity drive you, but indecision can be a challenge. Focus on prioritizing tasks to stay grounded."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your communication skills shine in professional settings. Network actively this month to uncover new opportunities for growth."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your charm attracts many, but deep connections require consistency. Be open and honest to strengthen your relationships."
        }
      ]
    },
    {
      id: "4",
      name: "Cancer",
      slug: "cancer",
      image: "/horoscop/4.png",
      shortDesc: "Nurturing and intuitive, Cancer values emotional security.",
      dateRange: "June 21 - July 22",
      sections: [
        { 
          heading: "Overview", 
          description: "Cancer, ruled by the Moon, is deeply intuitive and empathetic. You prioritize emotional connections and creating a safe, nurturing environment."
        },
        { 
          heading: "Personality Traits", 
          description: "Your sensitivity and loyalty make you a cherished friend, but overprotectiveness can limit growth. Balance care with independence."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your intuitive nature helps in creative and caregiving roles. This month, trust your instincts for financial decisions."
        },
        { 
          heading: "Love and Relationships", 
          description: "Emotional depth defines your relationships. Communicate your needs clearly to foster harmony with loved ones."
        }
      ]
    },
    {
      id: "5",
      name: "Leo",
      slug: "leo",
      image: "/horoscop/5.png",
      shortDesc: "Confident and charismatic, Leo shines with natural leadership.",
      dateRange: "July 23 - August 22",
      sections: [
        { 
          heading: "Overview", 
          description: "Leo, ruled by the Sun, radiates warmth and confidence. Your natural leadership and charisma make you the center of attention."
        },
        { 
          heading: "Personality Traits", 
          description: "Your boldness and creativity inspire others, but pride can sometimes cloud judgment. Stay humble to maintain balance."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your leadership skills drive success in ambitious projects. Focus on collaboration this month to enhance outcomes."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your passion fuels vibrant relationships. Show appreciation to deepen emotional connections."
        }
      ]
    },
    {
      id: "6",
      name: "Virgo",
      slug: "virgo",
      image: "/horoscop/6.png",
      shortDesc: "Practical and analytical, Virgo excels in precision and service.",
      dateRange: "August 23 - September 22",
      sections: [
        { 
          heading: "Overview", 
          description: "Virgo, ruled by Mercury, is known for its meticulous and service-oriented nature. You thrive on organization and helping others."
        },
        { 
          heading: "Personality Traits", 
          description: "Your attention to detail and reliability are strengths, but perfectionism can lead to stress. Embrace flexibility for peace."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your analytical skills excel in detail-oriented roles. This month, streamline processes for financial gains."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your thoughtfulness strengthens bonds. Avoid overanalyzing to maintain harmony in relationships."
        }
      ]
    },
    {
      id: "7",
      name: "Libra",
      slug: "libra",
      image: "/horoscop/7.png",
      shortDesc: "Harmonious and diplomatic, Libra seeks balance and beauty.",
      dateRange: "September 23 - October 22",
      sections: [
        { 
          heading: "Overview", 
          description: "Libra, ruled by Venus, is driven by a desire for harmony and aesthetics. You excel in creating balance and fostering connections."
        },
        { 
          heading: "Personality Traits", 
          description: "Your charm and diplomacy make you a peacemaker, but indecision can delay progress. Trust your instincts."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your creativity shines in artistic and collaborative roles. Seek partnerships this month for success."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your romantic nature thrives on balance. Clear communication will enhance relationship harmony."
        }
      ]
    },
    {
      id: "8",
      name: "Scorpio",
      slug: "scorpio",
      image: "/horoscop/8.png",
      shortDesc: "Intense and passionate, Scorpio seeks depth and transformation.",
      dateRange: "October 23 - November 21",
      sections: [
        { 
          heading: "Overview", 
          description: "Scorpio, ruled by Pluto and Mars, is known for its intensity and transformative energy. You dive deep into emotions and truth."
        },
        { 
          heading: "Personality Traits", 
          description: "Your determination and intuition are powerful, but secrecy can create barriers. Embrace openness for growth."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your focus excels in investigative roles. This month, leverage your insight for strategic financial moves."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your passion creates deep bonds. Trust and vulnerability will strengthen connections."
        }
      ]
    },
    {
      id: "9",
      name: "Sagittarius",
      slug: "sagittarius",
      image: "/horoscop/9.png",
      shortDesc: "Adventurous and optimistic, Sagittarius loves exploration and freedom.",
      dateRange: "November 22 - December 21",
      sections: [
        { 
          heading: "Overview", 
          description: "Sagittarius, ruled by Jupiter, is known for its love of adventure and philosophical outlook. You seek freedom and knowledge."
        },
        { 
          heading: "Personality Traits", 
          description: "Your optimism and enthusiasm inspire, but restlessness can lead to impulsiveness. Focus on long-term goals."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your adventurous spirit thrives in dynamic roles. Explore new opportunities this month for growth."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your free spirit seeks meaningful connections. Honesty and shared adventures will deepen bonds."
        }
      ]
    },
    {
      id: "10",
      name: "Capricorn",
      slug: "capricorn",
      image: "/horoscop/10.png",
      shortDesc: "Disciplined and ambitious, Capricorn strives for success and stability.",
      dateRange: "December 22 - January 19",
      sections: [
        { 
          heading: "Overview", 
          description: "Capricorn, ruled by Saturn, is driven by discipline and ambition. You are focused on achieving long-term success."
        },
        { 
          heading: "Personality Traits", 
          description: "Your determination and practicality are strengths, but rigidity can limit creativity. Embrace flexibility."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your work ethic shines in leadership roles. This month, focus on steady progress for financial rewards."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your loyalty creates lasting bonds. Show vulnerability to deepen emotional connections."
        }
      ]
    },
    {
      id: "11",
      name: "Aquarius",
      slug: "aquarius",
      image: "/horoscop/11.png",
      shortDesc: "Innovative and independent, Aquarius embraces uniqueness and progress.",
      dateRange: "January 20 - February 18",
      sections: [
        { 
          heading: "Overview", 
          description: "Aquarius, ruled by Uranus, is known for its innovative and humanitarian spirit. You value individuality and progress."
        },
        { 
          heading: "Personality Traits", 
          description: "Your creativity and independence inspire, but detachment can create distance. Stay connected with others."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your innovative ideas excel in tech and social impact roles. Collaborate for success this month."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your unique approach attracts like-minded souls. Openness will strengthen emotional bonds."
        }
      ]
    },
    {
      id: "12",
      name: "Pisces",
      slug: "pisces",
      image: "/horoscop/12.png",
      shortDesc: "Dreamy and compassionate, Pisces is deeply intuitive and creative.",
      dateRange: "February 19 - March 20",
      sections: [
        { 
          heading: "Overview", 
          description: "Pisces, ruled by Neptune, is known for its compassionate and dreamy nature. You are deeply intuitive and creative."
        },
        { 
          heading: "Personality Traits", 
          description: "Your empathy and imagination are strengths, but escapism can be a challenge. Ground yourself in reality."
        },
        { 
          heading: "Career and Wealth", 
          description: "Your creativity shines in artistic and healing roles. Trust your intuition for financial decisions this month."
        },
        { 
          heading: "Love and Relationships", 
          description: "Your emotional depth creates strong bonds. Clear communication will enhance relationship harmony."
        }
      ]
    }
  ];