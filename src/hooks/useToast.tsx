import { useSetRecoilState } from "recoil";
import { toastMessageState } from "../recoil/atom/ToastMessageState";
import ToastMessage from "../types/ToastMessage";

export function useToast() {
  const setToasts = useSetRecoilState(toastMessageState);

  const addToast = ({
    content,
    type = "default",
    timeout = 2000,
  }: ToastMessage) => {
    const newToast = { id: Date.now(), isRemoving: false, content, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, timeout - 500); // isRemoving 상태 0.5초
  };

  const removeToast = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isRemoving: true } : toast
      )
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 500); // isRemoving 상태 0.5초 기다린 후 배열에서 삭제
  };

  return { addToast, removeToast };
}
