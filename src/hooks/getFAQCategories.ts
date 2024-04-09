import { useQuery } from "react-query";
import { FAQCategory } from "../types/FAQ";

export const getFAQCategories = () => {
  const faqCategories: FAQCategory[] = [
    { id: "1", category: "일기" },
    { id: "2", category: "캘린더" },
    { id: "3", category: "프로필" },
    { id: "4", category: "콘테스트" },
    { id: "5", category: "참잘했어요" },
  ];

  return faqCategories;
};

export function useGetFAQCategories() {
  return useQuery(["getFAQCategories"], () => getFAQCategories());
}
