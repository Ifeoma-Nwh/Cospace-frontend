import { useState } from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

interface ModalButtonProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

export default function ModalButton({
  label,
  className,
  children,
}: ModalButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    console.log("isOpen : ", isOpen);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`${className} font-text font-semibold`}
      >
        {label}
      </button>

      {isOpen &&
        createPortal(
          <ModalContent onClose={closeModal}>{children}</ModalContent>,
          document.body
        )}
    </>
  );
}
