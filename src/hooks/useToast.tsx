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
    const newToast = { id: Date.now(), content, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, timeout);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { addToast, removeToast };
}
