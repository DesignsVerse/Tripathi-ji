export interface Testimonial {
    id: string;
    name: string;
    text: string;
    image: string;
    location: string;
    service: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Priya Sharma",
      text: "Pandit Tripathi’s Vedic astrology reading gave me clarity and confidence to pursue my career goals. Truly transformative!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Mumbai, India",
      service: "Vedic Astrology"
    },
    {
      id: "2",
      name: "Rohan Mehta",
      text: "The numerology consultation was spot-on, revealing insights about my life path that I never considered before.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Delhi, India",
      service: "Numerology"
    },
    {
      id: "3",
      name: "Anita Verma",
      text: "The palmistry reading provided deep insights into my relationships and personal growth. Highly recommend!",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Bangalore, India",
      service: "Palmistry"
    },
    {
      id: "4",
      name: "Vikram Singh",
      text: "Vastu consultation transformed my home’s energy, bringing peace and prosperity to my family.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Jaipur, India",
      service: "Vastu Shastra"
    }
  ];