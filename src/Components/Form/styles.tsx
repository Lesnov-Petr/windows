import styled from "styled-components";
import { color, fontMixin } from "../../assets/globalStyles";

interface ErrorProps {
  $error?: boolean;
}

export const SForm = styled.form.attrs({ className: "header__form" })`
  text-align: center;
`;

export const SSubTitleModal = styled.p.attrs({
  className: "header__subTitleModal",
})`
  ${fontMixin.subTitle};
  text-align: center;
  margin-bottom: 20px;
`;

export const SCheckboxContainer = styled.div.attrs({
  className: "header__checkContainer",
})<ErrorProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 4px;
  border: ${({ $error }) =>
    $error ? `1px solid ${color.accentCoral}` : "none"};
  background: ${({ $error }) => ($error ? "#fff5f5" : "transparent")};
  transition: all 0.3s ease;
`;

export const SCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-top: 3px;
  cursor: pointer;
  min-width: 18px;
  min-height: 18px;
  border-radius: 3px;
  transition: all 0.3s ease;

  &.accent {
    border: 1px solid ${color.accentCoral} !important;
    box-shadow: 0 0 0 2px rgba(255, 59, 48, 0.2);
  }
`;

export const SCheckboxLabel = styled.label`
  font-size: 14px;
  line-height: 1.4;
  color: #666;
  cursor: pointer;
  user-select: none;
  text-align: start;

  a {
    color: #007bff;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
