export interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  benefits: string[];
  imageUrl: string;
  iconName: string;
  indications: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  service: string;
  rating: number;
}
