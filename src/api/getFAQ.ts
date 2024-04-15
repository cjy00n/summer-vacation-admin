import { useQuery } from "react-query";
import { FAQ } from "../types/FAQ";

export const getFAQ = () => {
  const faqs: FAQ[] = [
    {
      id: "1",
      category: { id: "1", category: "일기" },
      question: "일기 작성은 어떻게하나요?",
      answer: "안녕하세요. 답변 드리겠습니다. ",
    },
    {
      id: "2",
      category: { id: "1", category: "일기" },
      question: "일기 작성은 어떻게하나요?",
      answer:
        "안녕하세요. 답변 드리겠습니다. 메인 페이지 또는 하단 바에서 일기 작성 버튼을 클릭한 후,",
    },
  ];

  return faqs;
};

export function useGetFAQ() {
  return useQuery(["getFAQ"], () => getFAQ());
}
