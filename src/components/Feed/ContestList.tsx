import { format } from "date-fns";
import Diary from "../../types/Diary";

const ContestList = ({ contestList }: { contestList: Diary[] }) => {
  return (
    <div className="flex gap-2">
      {contestList.map((item) => (
        <div
          className="flex flex-col border w-40 border-black border-solid p-2 justify-between"
          key={"contest-" + item.id}
        >
          <div>
            <img className="h-40 mb-1" src={item.image} />
            <p className="text-sm font-semibold">
              {format(item.date, "yyyy년 MM월 dd일")}
            </p>
            <p className="text-sm font-semibold my-1 ">{item.title}</p>
            <p className="text-sm ">{item.contents}</p>
          </div>

          <button className="text-white bg-error-red text-sm py-1 rounded-md mt-4">
            삭제
          </button>
        </div>
      ))}
      <div className="flex flex-col border w-40 border-black border-solid p-2 justify-between">
        <div className="h-40 border-black border border-solid flex items-center justify-center text-sm">
          지정되지 않음
        </div>
        <button className="text-black bg-white border-black border border-solid text-sm py-1 rounded-md mt-4">
          일기 선택
        </button>
      </div>
    </div>
  );
};

export default ContestList;
