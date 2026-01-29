import styled from "styled-components";
import { color, device, fontMixin } from "../../assets/globalStyles";

interface ErrorProps {
  $error?: boolean;
}

export const SForm = styled.form.attrs({ className: "header__form" })`
  width: 100%;
  text-align: center;
  padding: 0 30px;

  @media ${device.mobile} {
    padding: 0 15px;
  }

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;

export const SSubTitleModal = styled.p.attrs({
  className: "header__subTitleModal",
})`
  ${fontMixin.subTitle};
  text-align: center;
  margin-bottom: 20px;

  @media ${device.mobile} {
    margin-bottom: 15px;
  }

  @media ${device.tablet} {
    margin-bottom: 18px;
  }
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

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }
`;

export const SCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-top: 3px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 3px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.accent {
    border: 1px solid ${color.accentCoral} !important;
    box-shadow: 0 0 0 2px rgba(255, 59, 48, 0.2);
  }

  @media ${device.mobile} {
    min-width: 16px;
    min-height: 16px;
  }

  @media ${device.tablet} {
    min-width: 17px;
    min-height: 17px;
  }
`;

export const SCheckboxLabel = styled.label`
  ${fontMixin.standard}
  color: ${color.textDarkGreen};
  cursor: pointer;
  user-select: none;
  text-align: start;

  a {
    color: ${color.accent_2};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
