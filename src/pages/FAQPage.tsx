import { useState } from "react";
import MainTitle from "../components/common/MainTitle";
import SubTitle from "../components/common/SubTitle";
import { useGetFAQ } from "../api/getFAQ";
import { useGetFAQCategories } from "../api/getFAQCategories";

const FAQPage = () => {
  const { data: faqs } = useGetFAQ();
  const { data: faqCategories } = useGetFAQCategories();

  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isOpenCategorySelect, setIsOpenCategorySelect] = useState(false);

  const toggleCategorySelect = () => {
    setIsOpenCategorySelect(!isOpenCategorySelect);
  };

  const selectCategory = (category: string) => {
    toggleCategorySelect();
    setSelectedCategory(category);
  };

  return (
    <div>
      <MainTitle title="FAQ" />
      <SubTitle title="카테고리 생성" />
      <div className="w-full flex flex-col">
        {faqCategories && (
          <table className="table-fixed">
            <thead>
              <tr>
                <th> </th>
                <th>#</th>
                <th>카테고리 종류</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {faqCategories.map((category) => (
                <tr key={"faq-category" + category.id}>
                  <td className="w-8">
                    <input type="checkbox" />
                  </td>
                  <td className="w-12">{category.id}</td>
                  <td className="">
                    <div className="mx-auto">{category.category}</div>
                  </td>
                  <td className="w-12">
                    <button>수정</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-between w-full py-2">
        <button className="w-[15vw] bg-error-red py-[6px] rounded-md text-white text-sm">
          삭제
        </button>
        <button className="w-[15vw] bg-black py-[6px] rounded-md text-white text-sm">
          추가
        </button>
      </div>
      <div className="flex items-center my-3">
        <SubTitle title="카테고리 선택" />
        <div className="relative flex flex-col mx-2">
          <button
            onClick={toggleCategorySelect}
            className="border-solid border-gray-70 border h-8 w-[10vw]"
          >
            {selectedCategory} ▼
          </button>
          {isOpenCategorySelect && (
            <div className="flex absolute flex-col z-10 mt-8 w-[10vw]">
              {faqCategories &&
                faqCategories.map((category) => (
                  <button
                    onClick={() => selectCategory(category.category)}
                    className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
                  >
                    {category.category}
                  </button>
                ))}
            </div>
          )}
        </div>
        <button className="rounded-sm w-[6vw] bg-black text-white h-8 text-sm">
          조회
        </button>
      </div>

      <div className="w-full flex flex-col">
        {faqs && (
          <table className="table-fixed">
            <thead>
              <tr>
                <th> </th>
                <th>#</th>
                <th>카테고리</th>
                <th>질문</th>
                <th>답변</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((faq) => (
                <tr key={"faq-" + faq.id}>
                  <td className="w-8">
                    <input type="checkbox" />
                  </td>
                  <td className="w-12">{faq.id}</td>
                  <td className="w-40">{faq.category.category}</td>
                  <td className="max-w-[20vw]">
                    <div className="truncate w-full">{faq.question}</div>
                  </td>
                  <td className="max-w-[25vw]">
                    <div className="truncate w-full">{faq.answer}</div>
                  </td>
                  <td className="w-12">
                    <button>수정</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-between w-full py-2">
        <button className="w-[15vw] bg-error-red py-[6px] rounded-md text-white text-sm">
          삭제
        </button>
        <button className="w-[15vw] bg-black py-[6px] rounded-md text-white text-sm">
          추가
        </button>
      </div>
    </div>
  );
};
export default FAQPage;
