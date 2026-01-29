import { useState } from "react";
import Modal from "../Modal";
import { SButton, SConfirm, STitle } from "./styles";

interface ConfirmProps {
  confirm: {
    id: string;
    confirm: boolean;
    question: string;
  };
  onConfirm: (result: {
    id: string;
    confirm: boolean;
    question: string;
  }) => void | Promise<void>;
}

export const Confirm: React.FC<ConfirmProps> = ({ confirm, onConfirm }) => {
  const [isOpenModal, setOpenModal] = useState(true);

  const handleConfirm = () => {
    onConfirm({ ...confirm, confirm: true });
    setOpenModal(false);
  };

  const handleCancel = () => {
    onConfirm({ ...confirm, confirm: false, question: "" });
    setOpenModal(false);
  };

  return (
    <SConfirm>
      <Modal isOpen={isOpenModal} onClose={handleCancel}>
        <STitle>{confirm.question}</STitle>
        <SButton onClick={handleConfirm}>Подтверждаю</SButton>
        <SButton onClick={handleCancel}>Отмена</SButton>
      </Modal>
    </SConfirm>
  );
};
