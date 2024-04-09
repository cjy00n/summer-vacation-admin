interface ReportCountSelectProps {
  toggleReportUnitOpen: () => void;
  reportUnit: "이상" | "이하" | "동일";
  isReportUnitOpen: boolean;
  setReportUnit: (reportUnit: "이상" | "이하" | "동일") => void;
}

const ReportCountSelect = ({
  toggleReportUnitOpen,
  reportUnit,
  isReportUnitOpen,
  setReportUnit,
}: ReportCountSelectProps) => {
  const selectReportUnit = (reportUnit: "이상" | "이하" | "동일") => {
    toggleReportUnitOpen();
    setReportUnit(reportUnit);
  };

  return (
    <div className="flex items-center justify-between">
      <input type="number" className="w-[6vw] h-8 " />
      <div className="relative flex flex-col">
        <button
          onClick={toggleReportUnitOpen}
          className="border-solid border-gray-70 border h-8 w-[6vw]"
        >
          {reportUnit} ▼
        </button>
        {isReportUnitOpen && (
          <div className="flex absolute flex-col z-10 mt-8 w-[6vw]">
            <button
              onClick={() => selectReportUnit("이상")}
              className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
            >
              이상 ▼
            </button>
            <button
              onClick={() => selectReportUnit("이하")}
              className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
            >
              이하 ▼
            </button>
            <button
              onClick={() => selectReportUnit("동일")}
              className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
            >
              동일 ▼
            </button>
          </div>
        )}
      </div>
      <span className="text-center w-[1vw] text-sm">회</span>
    </div>
  );
};

export default ReportCountSelect;
