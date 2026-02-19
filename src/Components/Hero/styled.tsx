import styled from "styled-components";
import heroImg from "../../assets/images/heroImg2.jpeg";
import { color, fontMixin, device } from "../../assets/globalStyles";
import { ReactComponent as IconQuality } from "../../assets/images/iconQuality.svg";
import { ReactComponent as IconQualityCheck } from "../../assets/images/iconQualityCheck.svg";
import { SButton } from "../Button/styles";

export const SHero = styled.div.attrs({ className: "hero" })`
  display: flex;
  background: url(${heroImg}) center/100% auto no-repeat;
  width: 100%;
  height: calc(100vh - 110px);

  @media ${device.mobile} {
    height: auto;
  }
  @media ${device.tablet} {
    height: calc(100vh - 90px);
  }

  @media ${device.laptop} {
    height: calc(100vh - 100px);
  }
`;

export const SContainer = styled.div.attrs({ className: "hero__container" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 20px;

  &:first-child {
    align-items: start;
    justify-content: top;
    padding-top: 70px;
    padding-left: 70px;
    & ${SButton} {
      display: none;
    }

    @media ${device.tablet} {
      gap: 1rem;
      width: 100%;

      & ${SButton} {
        display: block;
      }
    }

    @media ${device.mobile} {
      width: 100%;
      padding: 1rem;
      & ${SButton} {
        display: block;
      }
    }
  }

  &:nth-child(2) {
    padding-right: 1.25rem;
    justify-content: center;

    @media ${device.tablet} {
      display: none;
    }

    @media ${device.mobile} {
      display: none;
    }
  }
`;

export const SBoxTitle = styled.div.attrs({ className: "hero__boxTitle" })`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid ${color.accent_2};

  /* Прозрачный матовый фон */
  background-color: rgba(182, 188, 207, 0.6);
  /* backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px); для Safari */
  border-radius: 1.25em;

  @media ${device.mobile} {
    padding: 0.5rem;
  }
`;

export const STitle = styled.h1.attrs({ className: "hero__title" })`
  ${fontMixin.title}
  font-weight: 700;
  color: black;
  text-align: left;
`;

export const SList = styled.ul.attrs({ className: "hero__list" })``;

export const SItem = styled.li.attrs({ className: "hero__item" })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;

  @media ${device.mobile} {
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const SIconQuality = styled(IconQuality).attrs({
  className: "hero__icon",
})`
  width: 4rem;
  margin-right: 1rem;
  flex-shrink: 0;

  fill: ${color.bg};

  @media ${device.mobile} {
    width: 3rem;
  }
  @media ${device.tablet} {
    width: 3.5rem;
  }
`;

export const SIcon = styled(IconQualityCheck).attrs({
  className: "hero__icon",
})`
  width: 1.5rem;
  margin-right: 0.3rem;
  flex-shrink: 0;

  fill: ${color.accent_2};

  @media ${device.mobile} {
    width: 1rem;
  }
  @media ${device.tablet} {
    width: 1.25rem;
  }
`;

export const SText = styled.p.attrs({ className: "hero__text" })`
  ${fontMixin.standard}
  color:black;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

export const SBoxForm = styled.div.attrs({ className: "hero__boxForm" })`
  width: 60%;

  padding: 1.75rem;
  border: 1px solid ${color.accent_2};
  border-radius: 8px;

  /* Прозрачный матовый фон */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(50px);
  /* background-color: rgba(255, 107, 53, 0.4); */
  border-radius: 22px;

  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    min-width: 70%;
  }
`;

export const STitleForm = styled.h2.attrs({ className: "hero__subTitle" })`
  ${fontMixin.subTitle}
  margin-bottom: 1.25rem;
  text-align: center;
  font-weight: 600;
  background-color: rgba(26, 211, 211, 0.5);
  border-radius: 8px;
`;
