import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../../hooks";
import { signUp } from "../../redux/auth/auth-operations";
import { Input } from "../../Components/Input";
import { LogoFirst } from "../../Components/Logo";
import { SForm, SSignUp, STitle } from "./styles";
import { Button } from "../../Components/Button";
import CheckList from "../../Components/CheckList";
import { toast } from "react-toastify";
import { CredentialsType } from "../../types/credentials";
import { useSelector } from "react-redux";
import { authSelectorError } from "../../redux/auth/auth-selectors";
import { actions } from "../../redux/auth/auth-reducer";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const authError = useSelector(authSelectorError);
  const [formData, setFormData] = useState<CredentialsType>({
    identifier: "",
    password: "",
  });

  useEffect(() => {
    if (authError) toast.error(authError);
    dispatch(actions.authError(""));
  }, [authError]);

  const [checkListPass] = useState([
    { title: "содержать минимум 6 символов", regExp: /.{6,}/, checked: false },
    {
      title: "содержать максимум 20 символов",
      regExp: /^.{0,20}$/,
      checked: true,
    },
    {
      title: "содержать хотя бы одна строчная буква",
      regExp: /(?=.*[a-z])/,
      checked: false,
    },
    {
      title: "содержать хотя бы одна заглавную буква",
      regExp: /(?=.*[A-Z])/,
      checked: false,
    },
    {
      title: "содержать хотя бы одну цифру",
      regExp: /(?=.*\d)/,
      checked: false,
    },
    {
      title: "содержать хотя бы один спецсимвол",
      regExp: /(?=.*[@$!%*?&])/,
      checked: false,
    },
  ]);

  const [checkListIdentifier] = useState([
    {
      title: "Email",
      regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      checked: false,
    },
    {
      title: "Телефон",
      regExp:
        /^(\+?\d{1,3})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      checked: false,
    },
  ]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formData.identifier) return toast.error("Укажите Email или Телефон");
      if (formData.identifier) {
        const isChecked = checkListIdentifier.find(
          (check) => (check.checked = check.regExp.test(formData.identifier))
        );
        if (!isChecked) return toast.error("Укажите Email или Телефон");
      }

      const checkedPass = checkListPass.filter(
        (check) => check.checked !== true
      );

      if (checkedPass.length) {
        return checkedPass.forEach((check) => toast.error(check.title));
      }

      const data = await dispatch(signUp(formData));
      if (data) setFormData({ identifier: "", password: "" });
    },
    [dispatch, formData]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      checkListPass.map((check) => (check.checked = check.regExp.test(value)));
    }
  }, []);

  return (
    <SSignUp>
      <LogoFirst />
      <STitle>Регистрация в Work-Spaces</STitle>
      <SForm onSubmit={handleSubmit}>
        <Input
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
          placeholder="Email / Телефон"
          style={{ width: "100%" }}
        />

        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Пароль"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <CheckList list={checkListPass} title={"Пароль должен содержать:"} />
        <Button type="submit" style={{ width: "100%" }}>
          Зарегистрироваться
        </Button>
      </SForm>
    </SSignUp>
  );
};

export default SignUp;
