import { useState } from "react";
import { ClientType } from "../../types/client";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { SFormUpdateClient, SLabel, STitle, SWrapper } from "./styles";
import { Button } from "../Button";
import { useAppDispatch } from "../../hooks";
import { updateClient } from "../../redux/clients/client-operation";

interface FormUpdateClientProps {
  data: ClientType;
  onClose: (value: boolean) => void;
}

export const FormUpdateClient: React.FC<FormUpdateClientProps> = ({
  data: { id, name, lastName, email, phone, description },
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    Имя: name,
    Фамилия: lastName,
    Email: email,
    Телефон: phone,
    Комментарий: description,
  });

  const keys = Object.keys(formData) as (keyof typeof formData)[];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updateDataClient = {
      name: formData.Имя,
      lastName: formData.Фамилия,
      email: formData.Email,
      phone: formData.Телефон,
      description: formData.Комментарий,
    };
    console.log(updateDataClient);

    dispatch(updateClient(id, updateDataClient));
    onClose(false);
  };

  return (
    <SFormUpdateClient onSubmit={handleSubmit}>
      <STitle>Обновить данные клиента</STitle>
      {keys.map((key) => (
        <SWrapper key={key}>
          <SLabel>{`${key}: `}</SLabel>
          {key === "Комментарий" ? (
            <Textarea
              name={key}
              value={formData[key]?.toString()}
              onChange={handleChange}
            />
          ) : (
            <Input
              name={key}
              value={formData[key]?.toString()}
              onChange={handleChange}
            />
          )}
        </SWrapper>
      ))}

      <Button type="submit">Обновить</Button>
    </SFormUpdateClient>
  );
};
