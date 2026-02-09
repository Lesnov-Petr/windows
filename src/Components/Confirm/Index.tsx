import { useState } from "react";
import Modal from "../Modal";
import { SButton, SConfirm, STitle } from "./styles";

interface ConfirmProps {
  question: string;
  onConfirm: (answer: boolean) => void | Promise<void>;
}

export const Confirm: React.FC<ConfirmProps> = ({ question, onConfirm }) => {
  const [isOpenModal, setOpenModal] = useState(true);
  const handleCancel = () => {
    onConfirm(false);
    setOpenModal(false);
  };

  return (
    <SConfirm>
      <Modal isOpen={isOpenModal} onClose={handleCancel}>
        <STitle>{question}</STitle>
        <SButton onClick={() => onConfirm(true)}>Подтверждаю</SButton>
        <SButton onClick={() => onConfirm(false)}>Отмена</SButton>
      </Modal>
    </SConfirm>
  );
};
