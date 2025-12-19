import styled, { keyframes } from "styled-components";
import { ReactComponent as PhoneIcon } from "../../assets/images/phone.svg";

const vibrate = keyframes`
  0% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(2deg) translateX(2px); }
  50% { transform: rotate(0deg) translateX(0); }
  75% { transform: rotate(-2deg) translateX(-2px); }
  100% { transform: rotate(0deg) translateX(0); }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(52, 152, 219, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
  }
`;

const floatIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Анимация расходящихся волн
const wavePulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const wavePulse2 = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const wavePulse3 = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

// Контейнер для волн
export const WaveContainer = styled.div<{ $isVisible?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

// Отдельные волны с разной задержкой
export const Wave = styled.div<{ $delay: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  animation: ${wavePulse} 3s infinite ease-out;
  animation-delay: ${(props) => props.$delay}s;
`;

export const Wave2 = styled.div<{ $delay: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  animation: ${wavePulse2} 4s infinite ease-out;
  animation-delay: ${(props) => props.$delay}s;
`;

export const Wave3 = styled.div<{ $delay: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: ${wavePulse3} 5s infinite ease-out;
  animation-delay: ${(props) => props.$delay}s;
`;

// Стилизованная иконка телефона
export const SButtonCallIcon = styled(PhoneIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
  animation: ${vibrate} 1.5s infinite ease-in-out;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;

  path {
    fill: white;
    transition: fill 0.3s ease;
  }
`;

export const SButtonCall = styled.button<{
  $isVibrating?: boolean;
  $isFloating?: boolean;
  $isVisible?: boolean;
  $showWaves?: boolean;
}>`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #2980b9);
  border: 3px solid white;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulse} 2s infinite;
  position: ${(props) => (props.$isFloating ? "fixed" : "relative")};
  overflow: visible;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  /* Обеспечиваем место для волн */
  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    z-index: -1;
    pointer-events: none;
  }

  /* Плавающее позиционирование */
  ${(props) =>
    props.$isFloating &&
    `
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
    
    /* Анимация появления */
    opacity: ${props.$isVisible ? 1 : 0};
    visibility: ${props.$isVisible ? "visible" : "hidden"};
    transform: ${props.$isVisible ? "translateY(0)" : "translateY(20px)"};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    }
  `}

  /* Условная анимация вибрации */
  animation-play-state: ${(props) =>
    props.$isVibrating ? "running" : "paused"};

  &:hover {
    transform: ${(props) => (props.$isFloating ? "scale(1.05)" : "scale(1.1)")};
    background: linear-gradient(135deg, #2980b9, #1c5a7d);

    ${SButtonCallIcon} {
      transform: scale(1.1);
      animation-play-state: ${(props) =>
        props.$isVibrating ? "paused" : "running"};

      path {
        fill: #f0f8ff;
      }
    }

    ${WaveContainer} {
      opacity: 0.8;
    }
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;

    ${WaveContainer} {
      opacity: 1;
    }
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    animation: none;

    &:hover {
      transform: none;
      background: linear-gradient(135deg, #3498db, #2980b9);
    }

    ${WaveContainer} {
      opacity: 0;
    }
  }

  /* Внутренняя вибрация */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 1%,
      transparent 1%
    );
    background-size: 20px 20px;
    animation: ${vibrate} 3s infinite linear;
    animation-play-state: ${(props) =>
      props.$isVibrating ? "running" : "paused"};
  }

  /* Адаптивность */
  @media (max-width: 768px) {
    width: ${(props) => (props.$isFloating ? "120px" : "140px")};
    height: ${(props) => (props.$isFloating ? "120px" : "140px")};

    ${(props) =>
      props.$isFloating &&
      `
      bottom: 20px;
      right: 20px;
    `}

    ${SButtonCallIcon} {
      width: 35px;
      height: 35px;
    }

    /* Уменьшаем волны на мобильных */
    ${Wave}, ${Wave2}, ${Wave3} {
      width: 90%;
      height: 90%;
    }
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.$isFloating ? "100px" : "120px")};
    height: ${(props) => (props.$isFloating ? "100px" : "120px")};
    padding: 10px;

    ${(props) =>
      props.$isFloating &&
      `
      bottom: 15px;
      right: 15px;
    `}

    ${SButtonCallIcon} {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
    }

    /* Уменьшаем волны на маленьких экранах */
    ${Wave}, ${Wave2}, ${Wave3} {
      width: 85%;
      height: 85%;
    }
  }

  /* Анимация при первом появлении */
  animation: ${floatIn} 0.5s ease-out;
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 5px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
