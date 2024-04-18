import ArrowIcon from "../assets/icons/ArrowIcon";
import BannerSection from "../components/Feed/BannerSection";
import ContestList from "../components/Feed/ContestList";
import MainTitle from "../components/common/MainTitle";
import SubTitle from "../components/common/SubTitle";
import { useGetContest } from "../api/getContest";
import Warning from "../components/Warning";
import Loading from "../components/Loading";
import DatePicker from "../components/common/DatePicker";
import { useState } from "react";
import { ContestPeriod } from "../types/ContestPeriod";

const FeedPage = () => {
  const today = new Date();

  const [selectedPeriod, setSelectedPeriod] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    week: (today.getDay() % 7) + 1,
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

  const { data: contestList, isLoading: contentLoading } =
    useGetContest(selectedPeriod);

  return (
    <div className="flex flex-col">
      <MainTitle title="홈" />
      <SubTitle title="배너" />
      <SubTitle title="이미지 업로드" />
      <BannerSection />
      <MainTitle title="피드" />
      <div className="flex items-center">
        <SubTitle title="사생대회" />
        <div className="flex gap-2 mx-8">
          <DatePicker
            type="year"
            size="short"
            selected={new Date(`${selectedPeriod.year}`)}
            onChange={(date: Date) => updateField("year", date.getFullYear())}
          />

          <DatePicker
            type="month"
            size="short"
            selected={new Date(selectedPeriod.year, selectedPeriod.month)}
            onChange={(date: Date) => updateField("month", date.getMonth())}
          />
          <button className="border border-gray-80 border-solid py-1 w-[8vw] flex justify-center gap-2 items-center px-2">
            1주 <ArrowIcon />
          </button>
          <button className="bg-black text-white rounded-md w-short">
            검색
          </button>
        </div>
      </div>
      <MainTitle title="수상목록" />
      {contentLoading ? (
        <Loading />
      ) : contestList ? (
        <ContestList contestList={contestList} />
      ) : (
        <Warning content="해당 기간의 사생대회 기록이 없습니다." />
      )}
    </div>
  );
};
export default FeedPage;
