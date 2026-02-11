export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'Payment & billing' | 'Shopping & Orders' | 'Technical Support';
}

export const faqData: FAQ[] = [
  {
    id: 1,
    question: "What materials are ZAYQ cases made from?",
    answer: "ZAYQ cases are made from high-quality, durable materials including polycarbonate and TPU (Thermoplastic Polyurethane) for maximum protection and flexibility.",
    category: 'Technical Support'
  },
  {
    id: 2,
    question: "Are ZAYQ cases compatible with wireless charging?",
    answer: "Yes, all ZAYQ cases are designed to be compatible with wireless charging, allowing you to charge your device without removing the case.",
    category: 'Technical Support'
  }
];