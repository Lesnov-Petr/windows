import styled from "styled-components";
import { color, cubic, ms } from "../../assets/globalStyles";

interface SColorPickerProps {
  $color?: string;
  $isOpen?: boolean;
}

export const SColorPickerBox = styled.div.attrs({
  className: "calc__colorPickerBox",
})<{ $color: string }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: white;
  border: 2px solid ${color.accent};
  border-radius: 8px;
  cursor: pointer;
  transition: all ${ms} ${cubic};
  user-select: none;

  &:hover {
    border-color: ${color.hoverAccent};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SColorPreview = styled.div.attrs({
  className: "calc__colorPickerPreview",
})<{ $color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: ${(props) => props.$color};
  border: 2px solid #e0e0e0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const SColorInfo = styled.div.attrs({
  className: "calc__colorPickerInfo",
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SColorTitle = styled.span.attrs({
  className: "calc__colorPickerTitle",
})`
  font-size: 14px;
  color: ${color.mark};
  font-weight: 500;
`;

export const SColorValue = styled.span.attrs({
  className: "calc__colorPickerValue",
})`
  font-family: "Menlo", "Monaco", "Courier New", monospace;
  font-size: 14px;
  color: ${color.text};
  font-weight: 600;
`;

export const SColorPickerDropdown = styled.div.attrs({
  className: "calc__colorPickerDropdown",
})<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  margin-top: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Стилизация react-colorful */
  .react-colorful {
    width: 220px;
    height: 220px;
    cursor: crosshair; /* Курсор для всей палитры */
  }

  .react-colorful__saturation {
    border-radius: 8px 8px 0 0;
    margin-bottom: 10px;
    cursor: crosshair; /* Специфичный для области насыщенности */
  }

  .react-colorful__hue {
    height: 18px;
    border-radius: 9px;
    margin-bottom: 10px;
    cursor: ew-resize; /* Горизонтальное изменение для ползунка оттенка */
  }

  .react-colorful__pointer {
    width: 22px;
    height: 22px;
    border: 3px solid white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  .react-colorful__pointer:active {
    cursor: grabbing; /* Курсор при активном перетаскивании */
  }
`;

export const SColorPickerActions = styled.div.attrs({
  className: "calc__colorPickerActions",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`;

export const SSelectedColorDisplay = styled.div.attrs({
  className: "calc__colorPickerDisplay",
})<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 12px;
    color: ${color.mark};
  }

  div {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: ${(props) => props.$color};
    border: 1px solid #ddd;
  }
`;
