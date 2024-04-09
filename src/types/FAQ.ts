export interface FAQCategory {
  id: string;
  category: string;
}

export interface FAQ {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}
