import { useRecoilValue } from "recoil";
import { toastMessageState } from "../../../recoil/atom/ToastMessageState";
import ToastMessageItem from "./ToastMessageItem";

const ToastMessageContainer = () => {
  const toasts = useRecoilValue(toastMessageState);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-10">
      {toasts &&
        toasts.map(({ content, type, id, isRemoving }) => (
          <ToastMessageItem
            content={content}
            type={type}
            key={"toast" + id}
            isRemoving={isRemoving}
          />
        ))}
    </div>
  );
};

export default ToastMessageContainer;
