import MaterialSymbolsTabCloseOutlineRounded from "~icons/material-symbols/tab-close-outline-rounded";

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalOverlay({ onClose, children }: ModalOverlayProps) {
  // TODO: block scrolling

  return (
    <>
      <div
        className="w-screen h-screen bg-black-500 opacity-50 fixed z-0 top-0 left-0"
        onClick={onClose}
      ></div>
      <div
        role="dialog"
        aria-modal="true"
        className="modal bg-secondary-200 z-10"
      >
        <button className="self-end" onClick={onClose}>
          <MaterialSymbolsTabCloseOutlineRounded width="32px" height="32px" />
        </button>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
