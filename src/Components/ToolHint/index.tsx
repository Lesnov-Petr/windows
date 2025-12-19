import { SToolHint } from "./styles";

interface ToolHintProps {
  children: string;
}

const ToolHint: React.FC<ToolHintProps> = ({ children }) => {
  return <SToolHint>{children}</SToolHint>;
};

export { ToolHint };
