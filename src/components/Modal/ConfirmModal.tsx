import { ReactNode } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import ModalContainer from "./ModalContainer";

interface ConfirmModalProps {
  title?: string;
  content: ReactNode;
  toggleOpen: () => void;
  onOk?: () => void;
  okButtonText?: string;
  okButtonType?: "warning" | "default";
  open: boolean;
}

const ConfirmModal = ({
  title = "경고",
  content,
  toggleOpen,
  onOk,
  okButtonText = "삭제",
  okButtonType = "warning",
  open,
}: ConfirmModalProps) => {
  return (
    <ModalContainer open={open} toggleOpen={toggleOpen}>
      <div className="w-96 h-48 px-5 py-4 justify-between items-center">
        <div className="flex justify-between w-full">
          <span className="font-bold text-lg">{title}</span>
          <button onClick={toggleOpen}>
            <CloseIcon />
          </button>
        </div>
        <div>{content}</div>
        <div className="flex gap-2">
          <button
            className={`text-white rounded-md py-1 w-40 ${
              okButtonType === "warning" ? "bg-error-red" : "bg-primary-orange"
            }`}
            onClick={onOk}
          >
            {okButtonText}
          </button>
          <button
            className={`text-black rounded-md py-1 w-40  border border-black border-solid`}
            onClick={toggleOpen}
          >
            취소
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConfirmModal;
