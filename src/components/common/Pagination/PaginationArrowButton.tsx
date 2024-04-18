interface PaginationArrowButtonProps {
  abled: boolean;
  handlePage: () => void;
  content: string;
}

const PaginationArrowButton = ({
  abled,
  handlePage,
  content,
}: PaginationArrowButtonProps) => {
  return (
    <button
      className={`${abled ? "text-black" : "text-gray-50 cursor-not-allowed"}`}
      onClick={abled ? handlePage : () => {}}
    >
      {content}
    </button>
  );
};

export default PaginationArrowButton;
