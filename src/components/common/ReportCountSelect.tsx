import { ReportUnit } from "../../types/Report";

interface ReportCountSelectProps {
  toggleReportUnitOpen: () => void;
  reportNum: number;
  setReportNum: (reportNum: number) => void;
  reportUnit: ReportUnit;
  isReportUnitOpen: boolean;
  setReportUnit: (reportUnit: ReportUnit) => void;
}

const ReportCountSelect = ({
  toggleReportUnitOpen,
  reportNum,
  setReportNum,
  reportUnit,
  isReportUnitOpen,
  setReportUnit,
}: ReportCountSelectProps) => {
  const selectReportUnit = (reportUnit: ReportUnit) => {
    toggleReportUnitOpen();
    setReportUnit(reportUnit);
  };

  return (
    <div className="flex items-center justify-between">
      <input
        type="number"
        className="w-short h-8 "
        value={reportNum}
        onChange={(e) => setReportNum(parseInt(e.target.value))}
      />
      <div className="relative flex flex-col">
        <button
          onClick={toggleReportUnitOpen}
          className="border-solid border-gray-70 border h-8 w-short"
        >
          {reportUnit} ▼
        </button>
        {isReportUnitOpen && (
          <div className="flex absolute flex-col z-10 mt-8 w-short">
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
