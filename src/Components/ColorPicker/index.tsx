import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import {
  SColorPickerBox,
  SColorPreview,
  SColorInfo,
  SColorTitle,
  SColorValue,
  SColorPickerDropdown,
  SColorPickerActions,
  SSelectedColorDisplay,
} from "./styles";

interface ColorPickerProps {
  color: string;
  onSetColor: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  onSetColor,
}) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const handleColorChange = (newColor: string) => {
    onSetColor(newColor);
  };

  return (
    <SColorPickerBox
      $color={color}
      onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
    >
      <SColorPreview $color={color} />
      <SColorInfo>
        <SColorTitle>Цвет стены</SColorTitle>
        <SColorValue>{color.toUpperCase()}</SColorValue>
      </SColorInfo>

      <SColorPickerDropdown $isOpen={isColorPickerOpen}>
        <HexColorPicker color={color} onChange={handleColorChange} />

        <SColorPickerActions>
          <SSelectedColorDisplay $color={color}>
            <span>Выбрано:</span>
          </SSelectedColorDisplay>
        </SColorPickerActions>
      </SColorPickerDropdown>
    </SColorPickerBox>
  );
};
