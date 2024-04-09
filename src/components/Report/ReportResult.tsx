import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import { Report } from "../../types/Report";

interface ReportResultProps {
  reports: Report[];
}

const ReportResult = ({ reports }: ReportResultProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col">
      <table className="table-fixed">
        <thead>
          <tr>
            <th>#</th>
            <th>신고자</th>
            <th>ID</th>
            <th>신고대상</th>
            <th>ID</th>
            <th>신고누적</th>
            <th>게시물번호</th>
            <th>신고이유</th>
            <th>신고일</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={"user-list-" + report.id}>
              <td>{report.id}</td>
              <td>{report.reporter}</td>
              <td>{report.reporterKakaoId}</td>
              <td>{report.reportSubject}</td>
              <td>{report.reportSubjectKakaoId}</td>
              <td>{report.reportNum}</td>
              <td>{report.feedId}</td>
              <td>
                <div className="truncate w-[15vw] px-[1vw] text-center">
                  {report.reason}
                </div>
              </td>
              <td>
                {format(report.date, "yyyy. MM. dd", {
                  locale: ko,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-8 gap-5 flex w-2/3 mx-auto justify-center ">
        <button>&lt;&lt;</button>
        <button>&lt;</button>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <button
              key={"users-page-" + i}
              onClick={() => handlePage(i + 1)}
              className={currentPage === i + 1 ? "text-black" : "text-gray-50"}
            >
              {i + 1}
            </button>
          ))}
        <button>&gt;</button>
        <button>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default ReportResult;
