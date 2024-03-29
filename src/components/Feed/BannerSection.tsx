import { useState } from "react";
import ConfirmModal from "../common/ConfirmModal";

const BannerSection = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleIsOpenDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const bannerImages = ["https://summer-vacation.site/image/main.webp"];

  const handleImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      // 사진 업로드 api
    }
  };

  return (
    <div className="flex gap-3">
      {bannerImages.map((item) => (
        <div key={item} className="flex flex-col">
          <img src={item} className="w-40 h-40 rounded-sm my-2" />
          <button
            className="bg-error-red rounded-md py-1 text-white "
            onClick={toggleIsOpenDeleteModal}
          >
            삭제
          </button>
        </div>
      ))}
      <div className="flex flex-col">
        <div className="w-40 h-40 rounded-sm my-2 border border-black border-solid text-center items-center flex">
          이미지 사이즈 360x360
        </div>
        <label
          htmlFor="input-file"
          className={
            "flex py-1 w-40 cursor-pointer bg-black rounded-md justify-center"
          }
        >
          <button className=" text-white">업로드</button>
        </label>
        <input
          type="file"
          id="input-file"
          className="hidden"
          onChange={handleImgFile}
        />
      </div>
      <ConfirmModal
        content="정말 삭제하시겠습니까?"
        open={isOpenDeleteModal}
        toggleOpen={toggleIsOpenDeleteModal}
      />
    </div>
  );
};

export default BannerSection;
