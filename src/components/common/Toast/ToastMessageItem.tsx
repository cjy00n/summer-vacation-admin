import ToastMessage from "../../../types/ToastMessage";

const ToastMessageItem = ({ type, content, isRemoving }: ToastMessage) => {
  return (
    <div
      className={`my-1 w-[20vw] rounded-md flex items-center text-center px-4 py-2 justify-center text-sm ${
        isRemoving ? "animate-fadeout " : "animate-fadein "
      }${
        type == "success"
          ? "bg-primary-green text-white "
          : type == "error"
          ? "bg-error-red text-white "
          : "bg-black text-white"
      }`}
    >
      {content}
    </div>
  );
};

export default ToastMessageItem;
