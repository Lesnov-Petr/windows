import styled from "styled-components";
import { color, cubic, fontMixin, ms } from "../../assets/globalStyles";
import { SToolHint } from "../ToolHint/styles";

interface SImageContainerProps {
  $isChanging: boolean;
  $color: string;
}

interface SColorPickerProps {
  $color?: string;
}

interface SOptionButtonProps {
  $isActive?: boolean;
}

export const SCalc = styled.section.attrs({ className: "calc" })`
  background-color: ${color.bg};
`;

export const SBox = styled.div.attrs({ className: "calc__box" })`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${color.bg};
`;

export const STitle = styled.h2.attrs({ className: "calc__title" })`
  ${fontMixin.title}
  font-size: 40px;
  margin-bottom: 20px;
`;

export const SCalcContent = styled.div.attrs({ className: "calc__boxContent" })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SImageWrapper = styled.div<SOptionButtonProps>`
  position: relative;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: outline ${ms} ${cubic};
  outline: ${(props) =>
    props.$isActive ? `4px solid ${color.hoverAccent}` : `white`};
  background-color: ${(props) =>
    props.$isActive ? `${color.accent}` : `white`};

  &:hover {
    outline: 4px solid ${color.hoverAccent};
    /* background-color: ${color.accent}; */
  }

  &:hover ${SToolHint} {
    opacity: 1;
    visibility: visible;
  }

  h3 {
    margin-top: 20px;
    color: ${color.text};
  }

  p {
    margin-top: 10px;
    color: ${color.mark};
    line-height: 1.5;
  }
`;

export const SOptions = styled.div.attrs({ className: "calc__options" })`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

export const SOptionTitle = styled.h3.attrs({
  className: "calc__optionsTitle",
})`
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 15px;
`;

export const SOptionButton = styled.button.attrs({
  className: "calc__btn",
})<SOptionButtonProps>`
  position: relative;
  display: flex;
  padding: 20px 20px;
  justify-content: center;
  background-color: ${(props) =>
    props.$isActive ? `${color.accent}` : "white"};
  color: ${(props) => (props.$isActive ? `${color.text}` : `${color.mark}`)};
  border: 2px solid
    ${(props) => (props.$isActive ? `${color.hoverAccent}` : "#e0e0e0")};
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${color.hoverAccent};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const SListWindows = styled.ul.attrs({
  className: "calc__listWindows",
})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

export const SItemWindow = styled.li.attrs({
  className: "calc__itemWindow",
})`
  display: grid;
  justify-items: center;
  gap: 10px;
`;

export const STypeWindow = styled.img.attrs({
  className: "calc__typeWindow",
})`
  height: 55px;
  width: 55px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.08);
    filter: brightness(0.95) saturate(1.8)
      drop-shadow(0 3px 6px ${color.hoverAccent});
  }
`;

export const SImageContainer = styled.div.attrs({
  className: "calc__ImageContent",
})<SImageContainerProps>`
  position: relative;
  opacity: ${(props) => (props.$isChanging ? 0.6 : 1)};
  transform: ${(props) => (props.$isChanging ? "scale(0.98)" : "scale(1)")};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;

export const SPreviewWrapper = styled.div.attrs({
  className: "clac__previewWrapper",
})<SColorPickerProps>`
  position: relative;
  width: 400px;
  height: 400px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${({ $color }) => $color};
`;

export const SWindowImage = styled.img.attrs({
  className: "calc__previewWindow",
})<{ $isHidden?: boolean; $isChanging?: boolean }>`
  position: absolute;
  top: 0%;
  left: 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$isHidden ? 0 : 1)};
  /* transform: ${(props) =>
    props.$isChanging ? "scale(0.95)" : "scale(1)"}; */

  &:hover {
    transform: scale(1.02);
  }
`;

export const SAdditionalParams = styled.div.attrs({
  className: "calc__paramsWindow",
})`
  position: absolute;
  top: 85px;
  right: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  padding: 25px;
  background-color: white;
  border: 2px solid ${color.hoverAccent};
  border-radius: 8px;
  transition: all 0.3s ease;
  min-width: 200px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const SImageParamWindow = styled.img.attrs({
  className: "calc__imgParamsWindow",
})`
  width: 50px;
  height: 50px;
  object-fit: contain;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid ${color.accent};
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    border: 1px solid ${color.hoverAccent};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.selected {
    box-shadow: 0 0 0 3px ${color.hoverAccent};
  }
`;

export const SBoxColorProfile = styled.div.attrs({
  className: "calc__BoxColorProfile",
})`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  align-items: start;
  gap: 4px;
`;

export const SPriviewColorProfile = styled.img.attrs({
  className: "calc__colorProfile",
})`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  object-fit: cover;
`;

export const SSpanColorProfile = styled.span.attrs({
  className: "calc__spanColorProfile",
})`
  font-family: "Menlo", "Monaco", "Courier New", monospace;
  font-size: 14px;
  color: ${color.text};
  font-weight: 600;
`;

export const STitleColorProfile = styled.span.attrs({
  className: "calc__titleColorProfile",
})`
  font-size: 14px;
  color: ${color.mark};
  margin-left: "auto";
`;

export const SPreviewProfile = styled.div.attrs({
  className: "calc__PreviewProfile",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
