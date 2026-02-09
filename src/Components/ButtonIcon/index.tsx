import { useState } from "react";
import Modal from "../Modal";
import { ToolHint } from "../ToolHint";
import { SButton, SIcon } from "./styles";
import { Confirm } from "../Confirm/Index";

interface IcontProps {
  src: string;
  alt: string;
  toolHint: string;
  onClick?: () => void;
}

export const ButtonIcon: React.FC<IcontProps> = ({
  src,
  alt,
  toolHint,
  onClick,
}) => {
  return (
    <>
      <SButton
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        <SIcon src={src} alt={alt} />
        <ToolHint>{toolHint}</ToolHint>
      </SButton>
    </>
  );
};
