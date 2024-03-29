import { ReactNode, useEffect, useRef } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";

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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        open &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        toggleOpen();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open, toggleOpen]);

  return (
    open && (
      <div className="top-0 left-0 w-dvw h-dvh bg-black bg-opacity-30 z-10 absolute">
        <div
          ref={modalRef}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-96 h-48 rounded-lg z-50 px-5 py-4 flex flex-col items-center bg-white shadow-sm drop-shadow-lg justify-between"
        >
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
                okButtonType === "warning"
                  ? "bg-error-red"
                  : "bg-primary-orange"
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
      </div>
    )
  );
};

export default ConfirmModal;
