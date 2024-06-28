import MaterialSymbolsErrorOutlineRounded from "~icons/material-symbols/error-outline-rounded";
import MaterialSymbolsCheckCircleOutlineRounded from "~icons/material-symbols/check-circle-outline-rounded";
import MaterialSymbolsTabCloseOutlineRounded from "~icons/material-symbols/tab-close-outline-rounded";
import useToast from "../../contexts/toast/useToast";
import { useEffect, useRef, useState } from "react";

type Toast = {
  message: string;
  type: "success" | "error";
  id: number;
};

const toastTypes = {
  success: {
    icon: (
      <MaterialSymbolsCheckCircleOutlineRounded style={{ color: "#44bbbb" }} />
    ),
    progressBarClass: "bg-secondary-500",
  },
  error: {
    icon: <MaterialSymbolsErrorOutlineRounded style={{ color: "#ff4d00" }} />,
    progressBarClass: "bg-accent-500",
  },
};

export default function Toast({ message, type, id }: Toast) {
  const { icon, progressBarClass } = toastTypes[type];
  const toast = useToast();

  const [animateClose, setAnimateClose] = useState<boolean>(false);

  const timerID = useRef<number | undefined>(undefined);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    if (toast) {
      setAnimateClose(true);
      setTimeout(() => {
        toast.remove(id);
      }, 400);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timerID.current);
    if (progressRef.current) {
      progressRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (progressRef.current && progressRef.current.parentElement) {
      const remainingTime =
        (progressRef.current.offsetWidth /
          progressRef.current.parentElement.offsetWidth) *
        4000;

      progressRef.current.style.animationPlayState = "running";

      timerID.current = setTimeout(() => {
        handleClose();
      }, remainingTime);
    }
  };

  useEffect(() => {
    timerID.current = setTimeout(() => {
      handleClose();
    }, 4000);

    return () => {
      clearTimeout(timerID.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id={`toast-${id}`}
      className={`toast ${animateClose ? "toast-close" : "toast-open"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{icon}</span>
      <p className="toast-message mr-2">{message}</p>
      <button className="ml-auto" onClick={handleClose}>
        <MaterialSymbolsTabCloseOutlineRounded width="18" height="18" />
      </button>
      <div className="toast-progress">
        <div
          ref={progressRef}
          className={`toast-progress-bar ${progressBarClass}`}
        ></div>
      </div>
    </div>
  );
}
