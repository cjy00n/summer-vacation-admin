interface MainTitle {
  title: string;
}

const MainTitle = ({ title }: MainTitle) => {
  return <h1 className="font-bold py-4 text-lg">{title}</h1>;
};

export default MainTitle;
