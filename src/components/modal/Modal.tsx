import { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import { createPortal } from "react-dom";

interface ModalButtonProps {
  label: string;
  btnClass?: string;
  modalBgColor?: string;
  children: React.ReactNode;
}

export default function ModalButton({
  label,
  btnClass,
  modalBgColor,
  children,
}: ModalButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`${btnClass} font-text font-semibold`}
      >
        {label}
      </button>

      {isOpen &&
        createPortal(
          <ModalOverlay onClose={closeModal} bgColor={modalBgColor}>
            {children}
          </ModalOverlay>,
          document.body
        )}
    </>
  );
}
