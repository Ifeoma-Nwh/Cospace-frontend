import MaterialSymbolsErrorOutlineRounded from "~icons/material-symbols/error-outline-rounded";
import MaterialSymbolsCheckCircleOutlineRounded from "~icons/material-symbols/check-circle-outline-rounded";
import MaterialSymbolsTabCloseOutlineRounded from "~icons/material-symbols/tab-close-outline-rounded";

type Toast = {
  message: string;
  type: "success" | "error";
  id: number;
};

const toastTypes = {
  success: {
    icon: (
      <MaterialSymbolsCheckCircleOutlineRounded style={{ color: "#ede078" }} />
    ),
  },
  error: {
    icon: <MaterialSymbolsErrorOutlineRounded style={{ color: "#ff4d00" }} />,
  },
};

export default function Toast({ message, type, id }: Toast) {
  const { icon } = toastTypes[type];

  return (
    <div id={`toast-${id}`} className="toast">
      <span>{icon}</span>
      <p className="toast-message">{message}</p>
      <button className="ml-auto">
        <MaterialSymbolsTabCloseOutlineRounded width="18" height="18" />
      </button>
    </div>
  );
}
