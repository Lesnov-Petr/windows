import { ChangeEvent } from "react";
import { SInput } from "./styles";

interface InputProps {
  id?: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <SInput
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};
