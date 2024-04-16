import { Warning } from "../../types/DiarySearchQuery";

interface WarningOXSelectProps {
  warning: Warning;
  setWarning: (warning: Warning) => void;
}

const WarningOXSelect = ({ warning, setWarning }: WarningOXSelectProps) => {
  const handleWarning = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setWarning(event.target.value as Warning);
  };

  return (
    <form className="flex h-8 items-center w-middle justify-between">
      <div className="w-1/2">
        <input
          id="report-X"
          type="radio"
          name="X"
          value={"X"}
          className="mx-1"
          checked={warning === "X"}
          onChange={handleWarning}
        />
        <label htmlFor="report-X">X</label>
      </div>
      <div className="w-1/2 ">
        <input
          id="report-O"
          type="radio"
          name="O"
          value={"O"}
          className="mx-1"
          checked={warning === "O"}
          onChange={handleWarning}
        />
        <label htmlFor="report-O">O</label>
      </div>
    </form>
  );
};

export default WarningOXSelect;
