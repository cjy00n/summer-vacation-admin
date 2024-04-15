interface GenderSelectProps {
  gender: "전체" | "남성" | "여성";
  setGender: (gender: "전체" | "남성" | "여성") => void;
}

const GenderSelect = ({ gender, setGender }: GenderSelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as "전체" | "남성" | "여성");
  };

  return (
    <form className="flex gap-4 h-8 items-center w-[15vw]">
      <div className="w-[5vw]">
        <input
          id="gender-all"
          type="radio"
          value={"전체"}
          name="전체"
          className="mx-1"
          checked={gender === "전체"}
          onChange={handleChange}
        />
        <label htmlFor="gender-all">전체</label>
      </div>
      <div className="w-[5vw]">
        <input
          id="gender-man"
          type="radio"
          value={"남성"}
          name="남성"
          className="mx-1"
          checked={gender === "남성"}
          onChange={handleChange}
        />
        <label htmlFor="gender-man">남</label>
      </div>
      <div className="w-[5vw]">
        <input
          id="gender-woman"
          type="radio"
          value={"여성"}
          name="여성"
          className="mx-1"
          checked={gender === "여성"}
          onChange={handleChange}
        />
        <label htmlFor="gender-woman">여</label>
      </div>
    </form>
  );
};

export default GenderSelect;
