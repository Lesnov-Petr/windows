import { styled } from "styled-components";
import { color, cubic, device, fontMixin } from "../../assets/globalStyles";

export const SFooter = styled.div.attrs({ className: "footer" })`
  display: flex;
  max-width: 94rem;
  margin: auto;
  padding: 3rem;

  @media ${device.tablet}, ${device.mobile} {
    flex-direction: column;
  }
`;

export const SSection = styled.div.attrs({ className: "footer__section" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 1rem;

  &:last-child {
    align-items: end;

    @media ${device.tablet}, ${device.mobile} {
      align-items: start;
    }
  }

  @media ${device.tablet}, ${device.mobile} {
    width: auto;
  }
`;

export const STitle = styled.h3.attrs({ className: "footer__phone" })`
  ${fontMixin.logo}
  color:${color.textDarkGreen};
  margin-bottom: 2rem;

  @media ${device.mobile} {
    ${fontMixin.subTitle}
    font-weight: 700;
  }
`;

export const SText = styled.p.attrs({ className: "footer__text" })`
  ${fontMixin.subTitle}
`;

export const SList = styled.ul.attrs({ className: "contacts__list" })`
  display: inherit;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.2rem;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0.2rem 0;
  }
`;

export const SItem = styled.li.attrs({ className: "footer_social__item" })`
  display: flex;
  width: 100%;
`;

export const SLink = styled.a.attrs({ className: "footer__social__link" })`
  display: flex;
  width: 4rem;
  height: 4rem;
  padding: 2px;
  border-radius: 50%;
  transition: border 250ms ${cubic};

  &:hover {
    transform: scale(1.1);
  }
`;

export const SButton = styled.a.attrs({ className: "footer__button" })`
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  border: 1px solid ${color.accent_2};
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
  }
`;
