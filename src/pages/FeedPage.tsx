import ArrowIcon from "../assets/icons/ArrowIcon";
import BannerSection from "../components/Feed/BannerSection";
import ContestList from "../components/Feed/ContestList";
import MainTitle from "../components/common/MainTitle";
import SubTitle from "../components/common/SubTitle";
import { useGetContest } from "../api/getContest";

const FeedPage = () => {
  const { data: contestList } = useGetContest({
    year: 2024,
    month: 3,
    week: 2,
  });

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
          <button className="border border-gray-80 border-solid py-1 w-28 flex justify-center gap-2 items-center px-2">
            2024년 <ArrowIcon />
          </button>
          <button className="border border-gray-80 border-solid py-1 w-28 flex justify-center gap-2 items-center px-2">
            03월 <ArrowIcon />
          </button>
          <button className="border border-gray-80 border-solid py-1 w-28 flex justify-center gap-2 items-center px-2">
            1주 <ArrowIcon />
          </button>
          <button className="bg-black text-white rounded-md px-6">검색</button>
        </div>
      </div>
      <MainTitle title="수상목록" />
      {contestList && <ContestList contestList={contestList} />}
    </div>
  );
};
export default FeedPage;
