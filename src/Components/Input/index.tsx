import { ChangeEvent } from "react";
import { SInput } from "./styles";

interface InputProps {
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <SInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};
