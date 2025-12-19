import { SContainer } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, styles }) => {
  return <SContainer style={styles}>{children}</SContainer>;
};
