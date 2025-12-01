import { styled } from "styled-components";
import { color, device, fontMixin } from "../../assets/globalStyles";

export const SSignUp = styled.div.attrs({ className: "signUp" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const STitle = styled.h2.attrs({ className: "signUp__title" })`
  ${fontMixin.title}
  margin: 20px 0;
`;

export const SForm = styled.form.attrs({ className: "signUp__form" })`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: right;
  border: 2px solid ${color.text};
  border-radius: 8px;
  background-color: #f0fff5;

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.desktop} {
    width: 30%;
  }
`;
