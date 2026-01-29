import styled, { keyframes } from "styled-components";
import { color, device } from "../../assets/globalStyles";

// Анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

export const SModalOverlay = styled.div.attrs({
  className: "modal-overlay",
})`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(4px);
`;

export const SModal = styled.div.attrs({
  className: "modal",
})`
  position: relative;
  background: ${color.bg};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 500px;
  border: 1px solid ${color.accent_2};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${scaleIn} 0.3s ease-out;
  max-height: 90vh;
  overflow-y: auto;

  @media ${device.mobile} {
    padding: 16px;
    margin: 16px;
  }
  @media ${device.tablet} {
    max-width: 60vw;
    padding: 20px;
    border-radius: 12px;
  }

  @media ${device.laptop} {
    width: 50vw;
  }
`;

export const SButtonClose = styled.button.attrs({
  className: "modal__btnClose",
})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: rotate(90deg);
    background-color: ${color.accent};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${color.textDarkGreen};
    transition: fill 0.2s ease;
  }
`;

export const SModalHeader = styled.div.attrs({
  className: "modal__header",
})`
  margin-bottom: 24px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: ${color.text};
    font-weight: 600;
  }
`;

export const SModalTitle = styled.h2.attrs({
  className: "modal__title",
})`
  font-size: 1.5rem;
  margin: 0;
  color: ${color.text};
  font-weight: 600;
`;

export const SModalContent = styled.div.attrs({
  className: "modal__content",
})`
  margin-bottom: 32px;

  p {
    line-height: 1.6;
    color: ${color.text};
    margin-bottom: 16px;
  }

  ul,
  ol {
    margin-left: 20px;
    margin-bottom: 16px;
  }
`;
