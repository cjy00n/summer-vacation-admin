import { format } from "date-fns";
import User from "../../types/User";
import ModalContainer from "../Modal/ModalContainer";
import MainTitle from "../common/MainTitle";
import SubTitle from "../common/SubTitle";
import DatePicker from "../common/DatePicker";
import { useState } from "react";
import { ContestPeriod } from "../../types/ContestPeriod";
import CloseIcon from "../../assets/icons/CloseIcon";

interface UsersInfoModalProps {
  open: boolean;
  toggleOpen: () => void;
  user: User;
}

const UsersInfoModal = ({ open, toggleOpen, user }: UsersInfoModalProps) => {
  const today = new Date();

  const [selectedPeriod, setSelectedPeriod] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const updateField = <K extends keyof ContestPeriod>(
    field: K,
    value: ContestPeriod[K]
  ) => {
    setSelectedPeriod({
      ...selectedPeriod,
      [field]: value,
    });
  };

  return (
    <ModalContainer open={open} toggleOpen={toggleOpen}>
      <div className="w-2/3 h-3/4 py-2 px-4">
        <div className="flex w-full justify-between items-center">
          <MainTitle title="회원정보" />
          <CloseIcon />
        </div>
        <div className="flex gap-[4vw]">
          {[
            { title: "닉네임", content: user.nickname ?? "-" },
            { title: "카카오 ID", content: user.kakaoId },
            { title: "성별", content: user.gender ?? "-" },
            { title: "경고 누적", content: user.waring },
            { title: "출생년도", content: user.birth ?? "-" },
            { title: "가입일", content: format(user.createdAt, "yyyy.MM.dd") },
          ].map((item) => (
            <div className="flex flex-col items-center">
              <SubTitle title={item.title} />
              <span className="text-sm">{item.content}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[1vw] mt-6 mb-3">
          <MainTitle title="작성게시물" />
          <div className="flex items-center">
            <DatePicker
              type="year"
              size="short"
              selected={new Date(`${selectedPeriod.year}`)}
              onChange={(date: Date) => updateField("year", date.getFullYear())}
            />
            <span className="w-[1vw]" />
            <DatePicker
              type="month"
              size="short"
              selected={new Date(selectedPeriod.year, selectedPeriod.month)}
              onChange={(date: Date) => updateField("month", date.getMonth())}
            />
            <span className="w-[1vw]" />
            <button className="w-[8vw] text-white bg-black py-1">검색</button>
          </div>
          <div className="flex gap-4 ml-auto mr-4">
            <button className="w-[8vw] text-white bg-error-red py-1">
              계정삭제
            </button>
            <button className="w-[8vw] text-white bg-primary-orange py-1">
              계정경고
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <span>
            총 <span className="text-primary-orange font-bold">10</span>건의
            일기가 있습니다.
          </span>
        </div>
      </div>
    </ModalContainer>
  );
};

export default UsersInfoModal;
