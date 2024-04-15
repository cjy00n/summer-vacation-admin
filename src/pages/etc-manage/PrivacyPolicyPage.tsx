import { format } from "date-fns";
import MainTitle from "../../components/common/MainTitle";
import SubTitle from "../../components/common/SubTitle";
import { useGetTermsOfUse } from "../../api/getTermsOfUse";
import { ko } from "date-fns/locale";
import CustomDropDown from "../../components/common/CustomDropDown";
import { useEffect, useState } from "react";

const PrivacyPolicyPage = () => {
  const { data: termsOfUses, isSuccess } = useGetTermsOfUse();
  const [currentTermsOfUse, setCurrentTermsOfUse] = useState("");

  useEffect(() => {
    if (termsOfUses) {
      setCurrentTermsOfUse(
        "개인정보처리방침 V" + termsOfUses[0].version.toFixed(1)
      );
    }
  }, [isSuccess, termsOfUses]);

  return (
    <div>
      <MainTitle title="개인정보처리방침" />
      <SubTitle title="개인정보처리방침 선택" />
      <div className="flex items-center mb-6">
        {termsOfUses && (
          <CustomDropDown
            values={termsOfUses.map(
              (item) => "개인정보처리방침 V" + item.version.toFixed(1)
            )}
            defaultValue={currentTermsOfUse}
            setValue={setCurrentTermsOfUse}
          />
        )}
        <button className="bg-gray-80 w-[10vw] rounded-md h-8 mx-3">
          적용
        </button>
      </div>

      <div className="w-full flex flex-col">
        {termsOfUses && (
          <table className="table-fixed">
            <thead>
              <tr>
                <th> </th>
                <th>#</th>
                <th>버전</th>
                <th>날짜</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {termsOfUses.map((use) => (
                <tr key={"faq-category" + use.id}>
                  <td className="w-8">
                    <input type="checkbox" />
                  </td>
                  <td className="w-12">{use.id}</td>
                  <td className="">
                    <div className="mx-auto">
                      {"개인정보처리방침 V" + use.version.toFixed(1)}
                    </div>
                  </td>
                  <td>
                    {format(use.date, "yyyy. MM. dd", {
                      locale: ko,
                    })}
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
      <div className="flex justify-between my-3">
        <button className="bg-gray-80 w-[14vw] rounded-md h-8">삭제</button>
        <button className="bg-gray-80 w-[14vw] rounded-md h-8">추가</button>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
