import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SCheckbox, SCheckboxContainer, SCheckboxLabel, SForm } from "./styles";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks";
import { createOrder } from "../../redux/orders/orders-operations";
import { Textarea } from "../Textarea";

interface FormProps {
  onClick?: () => void;
  styles?: React.CSSProperties;
}

const FormContact: React.FC<FormProps> = ({ onClick, styles }) => {
  const dispatch = useAppDispatch();
  const [isAgreed, setIsAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  // Регулярное выражение для телефона (международный формат)
  const phoneRegExp =
    /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const formatPhoneToInternational = (phone: string): string | null => {
    // Удаляем все нецифровые символы (кроме + в начале)
    const cleaned = phone.replace(/[^\d+]/g, "");

    // Проверяем, есть ли + в начале
    const hasPlus = cleaned.startsWith("+");

    // Извлекаем только цифры
    const digits = cleaned.replace("+", "");

    // Если номер начинается с 8 и имеет 11 цифр (включая 8), заменяем 8 на +7
    if (digits.length === 11 && digits.startsWith("8")) {
      return "+7" + digits.slice(1);
    }

    // Если уже есть + и длина корректна (11 цифр после +)
    if (hasPlus && digits.length === 11) {
      return "+" + digits;
    }

    // Если нет + и длина 11 цифр, добавляем +7
    if (!hasPlus && digits.length === 11) {
      return "+7" + digits;
    }

    // Если длина не соответствует (не 11 цифр), возвращаем null
    return null;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhone = formatPhoneToInternational(formData.phone);

    if (!formattedPhone)
      return toast.error("Укажите телефон в формате +7 (917) 123 45 67");
    if (formattedPhone) {
      const isChecked = phoneRegExp.test(formattedPhone);
      if (!isChecked)
        return toast.error("Укажите телефон в формате +7 (917) 123 45 67");
    }

    setFormData((prev) => ({ ...prev, phone: formattedPhone }));

    if (!isAgreed) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      setAgreementError(true);
      return;
    }

    const data = dispatch(createOrder({ ...formData, phone: formattedPhone }));
    if (!data) return;

    toast("Мы Вам перезвоним в ближайшее время");
    setFormData({ name: "", phone: "", description: "" });
    setIsAgreed(false);
    setAgreementError(false);
    if (onClick) onClick();

    return formData;
  };
  return (
    <SForm onSubmit={handleSubmit} style={styles}>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
      />
      <Textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Комментарий"
      />
      {/* Чекбокс согласия */}
      <SCheckboxContainer
        onClick={handleCheckboxChange}
        $error={agreementError}
      >
        <SCheckbox
          checked={isAgreed}
          onChange={handleCheckboxChange}
          id="agreement"
          className={agreementError ? "accent" : ""}
        />
        <SCheckboxLabel htmlFor="agreement">
          Даю согласие на обработку {}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            моих персональных данных.
          </a>
        </SCheckboxLabel>
      </SCheckboxContainer>
      <Button type="submit">Заказать</Button>
    </SForm>
  );
};

export default FormContact;
