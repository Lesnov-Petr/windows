import { styled } from "styled-components";
import { color, fontMixin, device } from "../../assets/globalStyles";

export const SAuth = styled.div.attrs({ className: "auth" })`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SForm = styled.form.attrs({ className: "auth__form" })`
  width: 100%;
  /* max-width: 400px; */
  padding: 20px;
  text-align: right;
  border: 2px solid ${color.text};
  border-radius: 8px;
  background-color: #f0fff5;

  @media ${device.tablet} {
    width: 60%;
  }

  /* @media ${device.desktop} {
    width: 30%;
  } */
`;

export const STitle = styled.h2.attrs({ className: "auth__title" })`
  ${fontMixin.title}
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const SLink = styled.a.attrs({ className: "auth__link" })`
  ${fontMixin.standart}
  display: inline-block;
  padding-bottom: 5px;
`;

export const SLinkRegistration = styled.a.attrs({ className: "auth__link" })`
  ${fontMixin.standart}
  position:relative;
  display: inline-block;
  margin-top: 20px;
  line-height: 2;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${color.text};
    transition: all 0.3s ease-out;
  }

  &:hover::after {
    background-color: ${color.accent};
  }
`;
