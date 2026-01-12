import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../../hooks";
import { signIn } from "../../redux/auth/auth-operations";
import { Input } from "../../Components/Input";
import { SAuth, SForm, STitle } from "./styles";
import { Button } from "../../Components/Button";
import { CredentialsType } from "../../types/credentials";
import { useSelector } from "react-redux";
import { authSelectorError } from "../../redux/auth/auth-selectors";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LogoFirst } from "../Logo";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authError = useSelector(authSelectorError);
  const [formData, setFormData] = useState<CredentialsType>({
    identifier: "",
    password: "",
  });

  useEffect(() => {
    if (authError) toast.error(authError);
  }, [authError]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = await dispatch(signIn(formData));

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
