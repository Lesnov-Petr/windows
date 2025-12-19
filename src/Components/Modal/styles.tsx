import styled, { keyframes } from "styled-components";
import { color } from "../../assets/globalStyles";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

export const SModalOverlay = styled.div.attrs({ className: "modal-overlay" })`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const SModal = styled.div.attrs({ className: "modal" })`
  position: relative;
  background: ${color.bg};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 25vw;
  border: 1px solid ${color.accent_2};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${scaleIn} 0.3s ease-out;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 24px;
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

  &:hover {
    transform: rotate(90deg);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: ${color.accent};
  }
`;

export const SModalHeader = styled.div.attrs({ className: "modal__header" })`
  margin-bottom: 24px;
  text-align: center;
`;

export const SModalTitle = styled.h2.attrs({ className: "modal__title" })`
  font-size: 1.5rem;
  margin: 0;
  color: ${color.text};
`;

export const SModalContent = styled.div.attrs({ className: "modal__content" })`
  margin-bottom: 32px;
`;
