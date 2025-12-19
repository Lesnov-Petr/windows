import { SButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children: string;
  style?: React.CSSProperties;
  type: "button" | "submit";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
  type,
  disabled,
}) => {
  return (
    <SButton onClick={onClick} type={type} style={style} disabled={disabled}>
      {children}
    </SButton>
  );
};
