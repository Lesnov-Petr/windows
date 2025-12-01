import { SButton } from "./styles";

interface ButtonProps {
  children: string;
  style?: React.CSSProperties;
  type: "button" | "submit";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  type,
  disabled,
}) => {
  return (
    <SButton type={type} style={style} disabled={disabled}>
      {children}
    </SButton>
  );
};
