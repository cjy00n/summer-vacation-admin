import { atom } from "recoil";
import ToastMessage from "../../types/ToastMessage";

export const toastMessageState = atom<ToastMessage[]>({
  key: "toastMessagesState",
  default: [],
});
