import styled from "styled-components";
import { btnMixin, fontMixin, color } from "../../assets/globalStyles";

export const SConfirm = styled.div.attrs({
  className: "confirm",
})`
  text-align: center;
  padding: 32px;
  border-radius: 16px;
  background-color: ${color.bg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  /* Адаптивность */
  @media (max-width: 768px) {
    padding: 24px;
    margin: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const STitle = styled.h3.attrs({
  className: "confirm__title",
})`
  ${fontMixin.subTitle}
  margin-bottom: 30px;
  color: ${color.text};
  text-align: center;

  /* Дополнительная типографика */
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
`;

export const SButton = styled.button.attrs({
  className: "confirm__button",
})`
  ${btnMixin}
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;

  &:last-child {
    margin-left: 30px;

    @media (max-width: 480px) {
      margin-left: 0;
      margin-top: 16px;
    }
  }

  /* Стили для разных состояний */
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;
