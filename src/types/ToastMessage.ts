export default interface ToastMessage {
  id?: number;
  content: string;
  type?: "default" | "success" | "error";
  timeout?: number;
  isRemoving?: boolean;
}
