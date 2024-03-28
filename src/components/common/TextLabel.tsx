interface TextLabel {
  text: string;
}

const TextLabel = ({ text }: TextLabel) => {
  return <label className="font-medium my-1">{text}</label>;
};

export default TextLabel;
