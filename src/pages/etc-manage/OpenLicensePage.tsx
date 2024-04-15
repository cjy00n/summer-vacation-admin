import { useEffect, useState } from "react";
import MainTitle from "../../components/common/MainTitle";
import { useGetOpenLicense } from "../../api/getOpenLicense";

const OpenLicensePage = () => {
  const { data: openLicense } = useGetOpenLicense();
  const [inputOpenLicense, setInputOpenLicense] = useState(openLicense);

  useEffect(() => {
    if (openLicense) {
      setInputOpenLicense(openLicense);
    }
  }, [openLicense]);

  return (
    <div>
      <MainTitle title="오픈 라이선스" />
      <textarea
        className="bg-gray-60 w-full resize-none h-80 p-2"
        value={inputOpenLicense}
        onChange={(e) => setInputOpenLicense(e.target.value)}
      />
      <div className="flex justify-end my-2">
        <button className="bg-gray-60 w-[15vw] h-8 rounded-md">적용</button>
      </div>
    </div>
  );
};
export default OpenLicensePage;
