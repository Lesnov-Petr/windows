import {
  SModalOverlay,
  SModal,
  SButtonClose,
  SModalHeader,
  SModalTitle,
  SModalContent,
} from "./styles";
import { ReactComponent as CloseSvg } from "../../assets/images/close.svg";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // Блокировка скролла при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <SModalOverlay
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <SModal onClick={(e) => e.stopPropagation()}>
        <SButtonClose onClick={onClose}>
          <CloseSvg />
        </SButtonClose>

        <SModalHeader>
          <SModalTitle>{title}</SModalTitle>
        </SModalHeader>

        <SModalContent>{children}</SModalContent>
      </SModal>
    </SModalOverlay>
  );
};

export default Modal;
