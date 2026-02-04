import { ChangeEvent } from "react";
import { STextarea } from "./styles";

interface TextareaProps {
  id?: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <STextarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};
