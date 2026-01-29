import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { signIn } from "../../redux/auth/auth-operations";
import { Input } from "../../Components/Input";
import { SAuth, SForm, STitle } from "./styles";
import { Button } from "../../Components/Button";
import { CredentialsType } from "../../types/credentials";
import { useNavigate } from "react-router-dom";
import { LogoFirst } from "../Logo";
import { toast } from "react-toastify";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CredentialsType>({
    identifier: "",
    password: "",
  });

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

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formattedPhone = formatPhoneToInternational(formData.identifier);
      if (!formattedPhone) {
        return toast.error("Укажите телефон в формате +7 (917) 123 45 67");
      }
      const data = await dispatch(
        signIn({ ...formData, identifier: formattedPhone })
      );

      if (data) {
        setFormData({ identifier: "", password: "" });
        navigate("/office");
      }
    },
    [dispatch, formData]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <SAuth>
      <LogoFirst />
      <STitle>Авторизация в личный кабинет</STitle>
      <SForm onSubmit={handleSubmit}>
        <Input
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
          placeholder="Телефон"
          style={{ width: "100%" }}
        />
        {/* <SLink href="/password_reset">Забыли пароль?</SLink> */}
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Пароль"
          style={{ width: "100%" }}
        />

        <Button type="submit" style={{ width: "100%" }}>
          Авторизоваться
        </Button>
      </SForm>
    </SAuth>
  );
};

export default Auth;
