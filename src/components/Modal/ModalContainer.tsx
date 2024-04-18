import { ReactElement, useEffect, useRef } from "react";

interface ModalContainerProps {
  toggleOpen: () => void;
  open: boolean;
  children: ReactElement;
}

const ModalContainer = ({
  children,
  toggleOpen,
  open,
}: ModalContainerProps) => {
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
      <div className="top-0 left-0 w-dvw h-dvh bg-black bg-opacity-30 z-10 absolute ">
        <div ref={modalRef} className="[&>div]:modal">
          {children}
        </div>
      </div>
    )
  );
};

export default ModalContainer;
