interface SubTitle {
  title: string;
}

const SubTitle = ({ title }: SubTitle) => {
  return <h1 className="font-semibold py-1 text-lg">{title}</h1>;
};

export default SubTitle;
