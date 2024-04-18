import { useSearchParams } from "react-router-dom";
import PaginationArrowButton from "./PaginationArrowButton";

interface PaginationProps {
  lastPage: number;
  currentPage: number;
}

const Pagination = ({ lastPage, currentPage }: PaginationProps) => {
  const [, setSearchParams] = useSearchParams();

  const PAGE_COUNT = 5; // 한번에 노출하는 페이지 수
  const handlePage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > lastPage) page = lastPage;
    setSearchParams({ page: page.toString() });
  };

  return (
    <div className="py-8 gap-5 flex w-2/3 mx-auto justify-center items-center">
      <PaginationArrowButton
        abled={currentPage > 1}
        content="<<"
        handlePage={() => handlePage(currentPage - PAGE_COUNT)}
      />
      <PaginationArrowButton
        abled={currentPage > 1}
        content="<"
        handlePage={() => handlePage(currentPage - 1)}
      />
      {Array(lastPage)
        .fill(0)
        .map((_, i) => (
          <button
            key={"page-button" + i}
            onClick={() => handlePage(i + 1)}
            className={`h-6 w-6 ${
              currentPage === i + 1
                ? "bg-primary-orange rounded-full  text-white font-bold"
                : "text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
      <PaginationArrowButton
        abled={currentPage < lastPage}
        content=">"
        handlePage={() => handlePage(currentPage + 1)}
      />
      <PaginationArrowButton
        abled={currentPage < lastPage}
        content=">>"
        handlePage={() => handlePage(currentPage + PAGE_COUNT)}
      />
    </div>
  );
};

export default Pagination;
