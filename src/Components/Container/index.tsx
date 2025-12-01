import { SContainer } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
