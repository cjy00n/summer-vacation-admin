import { useState } from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";

interface CustomDropDownProps {
  defaultValue: string;
  values: string[];
  setValue: (v: string) => void;
}

const CustomDropDown = ({
  defaultValue,
  values,
  setValue,
}: CustomDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectValue = (value: string) => {
    toggleOpen();
    setValue(value);
  };

  return (
    <div
      className="border border-black border-solid w-[24vw] py-1 my-1 relative flex flex-col h-8"
      onClick={toggleOpen}
    >
      <div className="flex justify-between items-center px-3">
        <span>{defaultValue}</span>
        <ArrowIcon />
      </div>
      {isOpen && (
        <div className="absolute  bg-white w-full flex flex-col top-[31px]">
          {values.map((item) => (
            <button
              key={"dropdown-" + item}
              className="border border-black border-solid border-t-0 h-8 px-3 text-left"
              onClick={() => selectValue(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
