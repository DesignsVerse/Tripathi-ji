// in @/data/faq.js

export const faqs = [
  {
    id: 1,
    question: "What is the difference between Vedic and KP Astrology?",
    answer: "Vedic Astrology provides a broad overview of your life's path based on planetary positions at birth. KP (Krishnamurti Paddhati) Astrology is a more modern system that uses finer divisions of the zodiac to give highly precise, event-based predictions. Abhishek ji uses both to provide comprehensive and accurate guidance."
  },
  {
    id: 2,
    question: "How accurate are the astrological predictions?",
    answer: "The accuracy of predictions depends on the precision of your birth details (date, time, and place). Abhishek Tripathi combines the wisdom of his lineage with systematic analysis to provide highly accurate insights. However, astrology is a divine science that offers guidance; your free will and actions also play a crucial role."
  },
  {
    id: 3,
    question: "What kind of remedies do you suggest?",
    answer: "The remedies suggested are simple, practical, and effective. They are based on ancient principles and can range from gemstone recommendations and mantra chanting to simple rituals and lifestyle adjustments. The goal is always to provide solutions that are easy to perform and bring positive energy."
  },
  {
    id: 4,
    question: "How do I book a consultation with Abhishek Tripathi?",
    answer: "Booking a consultation is easy. You can visit our 'Contact' page and call or send a WhatsApp message to the provided number. Our team will guide you through the process, including the information we need from you and how to schedule your session."
  },
  {
    id: 5,
    question: "Is my personal information kept confidential?",
    answer: "Absolutely. We adhere to a strict policy of confidentiality. All your personal details and consultation discussions are kept private and secure. Your trust is our utmost priority."
  }
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
