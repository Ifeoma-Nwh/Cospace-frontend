import Toast from "./Toast";

type Toast = {
  message: string;
  type: "success" | "error";
  id: number;
};
export default function ToastsContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}
