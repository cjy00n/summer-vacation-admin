const WarningOXSelect = () => {
  return (
    <form className="flex h-8 items-center w-[15vw]">
      <div className="w-[8vw]">
        <input
          id="report-X"
          type="radio"
          value={"X"}
          name="X"
          className="mx-1"
        />
        <label htmlFor="report-X">X</label>
      </div>
      <div className="w-[8vw]">
        <input
          id="report-O"
          type="radio"
          value={"O"}
          name="O"
          className="mx-1"
        />
        <label htmlFor="report-O">O</label>
      </div>
    </form>
  );
};

export default WarningOXSelect;
