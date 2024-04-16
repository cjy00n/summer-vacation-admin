import { Gender } from "../../types/User";

interface GenderSelectProps {
  gender: Gender;
  setGender: (gender: Gender) => void;
}

const GenderSelect = ({ gender, setGender }: GenderSelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as Gender);
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
          value={"남자"}
          name="남자"
          className="mx-1"
          checked={gender === "남자"}
          onChange={handleChange}
        />
        <label htmlFor="gender-man">남</label>
      </div>
      <div className="w-[5vw]">
        <input
          id="gender-woman"
          type="radio"
          value={"여자"}
          name="여자"
          className="mx-1"
          checked={gender === "여자"}
          onChange={handleChange}
        />
        <label htmlFor="gender-woman">여</label>
      </div>
    </form>
  );
};

export default GenderSelect;
