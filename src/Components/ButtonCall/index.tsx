// Обновленный компонент с волнами
import React, { useState, useEffect } from "react";
import {
  ButtonText,
  SButtonCallIcon,
  SButtonCall as StyledButton,
  WaveContainer,
  Wave,
  Wave2,
  Wave3,
} from "./styles";

interface ButtonCallProps {
  onClick: () => void;
  disabled?: boolean;
  isVibrating?: boolean;
  showWaves?: boolean;
  className?: string;
  ariaLabel?: string;
  floating?: boolean;
  showAfterScroll?: number;
  hideOnTop?: boolean;
}

const ButtonCall: React.FC<ButtonCallProps> = ({
  onClick,
  disabled = false,
  isVibrating: externalIsVibrating = true,
  showWaves = true,
  className,
  ariaLabel = "Заказать обратный звонок",
  floating = false,
  showAfterScroll = 10,
  hideOnTop = true,
}) => {
  const [isVisible, setIsVisible] = useState(!floating);
  const [internalIsVibrating, setInternalIsVibrating] =
    useState(externalIsVibrating);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!floating) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (hideOnTop) {
        setIsVisible(scrollY > showAfterScroll);
      } else {
        setIsVisible(true);
      }

      setInternalIsVibrating(scrollY > showAfterScroll);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [floating, showAfterScroll, hideOnTop]);

  const handleClick = () => {
    if (floating) {
      setInternalIsVibrating(false);
      setTimeout(() => setInternalIsVibrating(true), 3000);
    }
    onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isVibrating = floating ? internalIsVibrating : externalIsVibrating;
  const shouldShowWaves = showWaves && isVibrating;

  return (
    <StyledButton
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      $isVibrating={isVibrating}
      $isFloating={floating}
      $isVisible={isVisible}
      $showWaves={shouldShowWaves}
      className={className}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {/* Волны вокруг кнопки */}
      {shouldShowWaves && (
        <WaveContainer $isVisible={isHovered || isVibrating}>
          <Wave $delay={0} />
          <Wave $delay={1} />
          <Wave $delay={2} />
          <Wave2 $delay={0.5} />
          <Wave2 $delay={1.5} />
          <Wave2 $delay={2.5} />
          <Wave3 $delay={1} />
          <Wave3 $delay={2} />
          <Wave3 $delay={3} />
        </WaveContainer>
      )}

      <SButtonCallIcon />
      <ButtonText>
        Закажите
        <br />
        звонок
      </ButtonText>
    </StyledButton>
  );
};

export { ButtonCall };
