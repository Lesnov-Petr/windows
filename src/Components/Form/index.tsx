import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SCheckbox, SCheckboxContainer, SCheckboxLabel, SForm } from "./styles";
import { toast } from "react-toastify";

interface FormProps {
  onClick?: () => void;
  styles?: React.CSSProperties;
}

const FormContact: React.FC<FormProps> = ({ onClick, styles }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });

  // Регулярное выражение для телефона (международный формат)
  const phoneRegExp =
    /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone)
      return toast.error("Укажите телефон в формате +7 (917) 123 45 67");
    if (formData.phone) {
      const isChecked = phoneRegExp.test(formData.phone);
      if (!isChecked)
        return toast.error("Укажите телефон в формате +7 (917) 123 45 67");
    }

    if (!isAgreed) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      setAgreementError(true);
      return;
    }

    console.log(formData);
    toast("Мы Вам перезвоним в ближайшее время");
    setFormData({ name: "", phone: "", comments: "" });
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
        style={{ width: "100%" }}
      />
      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        style={{ width: "100%" }}
      />
      <Input
        name="comments"
        value={formData.comments}
        onChange={handleChange}
        placeholder="Комментарий"
        style={{ width: "100%", height: "10vh" }}
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
