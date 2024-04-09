interface MainTitle {
  title: string;
}

const MainTitle = ({ title }: MainTitle) => {
  return <h1 className="font-bold py-3 text-xl ">{title}</h1>;
};

export default MainTitle;
