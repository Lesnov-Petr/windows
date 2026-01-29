import { ChangeEvent } from "react";
import { STextarea } from "./styles";

interface TextareaProps {
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <STextarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};
