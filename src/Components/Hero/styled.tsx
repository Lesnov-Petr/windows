import styled from "styled-components";
import heroImg from "../../assets/images/heroImg2.jpeg";
import { color, fontMixin, device } from "../../assets/globalStyles";
import { ReactComponent as IconQuality } from "../../assets/images/iconQuality.svg";
import { ReactComponent as IconQualityCheck } from "../../assets/images/iconQualityCheck.svg";

export const SHero = styled.div.attrs({ className: "hero" })`
  display: flex;
  background: url(${heroImg}) center/100% auto no-repeat;
  width: 100%;
  height: 100vh;

  @media ${device.mobile} {
    height: 400px;
    padding: 20px 0;
    align-items: end;
  }
  @media ${device.tablet} {
    height: 500px;
    padding: 30px 0;
  }
`;

export const SContainer = styled.div.attrs({ className: "hero__container" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 20px;

  &:nth-child(2) {
    padding-right: 20px;
    align-items: start;
    justify-content: center;

    @media ${device.tablet} {
      width: 100%;
      padding-left: 25px;
    }

    @media ${device.mobile} {
      width: 100%;
      padding-left: 25px;
    }
  }

  &:first-child {
    justify-content: center;
    padding-bottom: 100px;

    @media ${device.laptop} {
      padding-bottom: 40px;
    }

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
  padding: 20px;
  border: 1px solid ${color.accent_2};

  /* Прозрачный матовый фон */
  background-color: rgba(255, 107, 53, 0.2);
  /* backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px); для Safari */
  border-radius: 22px;

  @media ${device.laptop} {
    padding: 10px;
  }

  @media ${device.tablet} {
    padding: 5px;
  }
`;

export const STitle = styled.h1.attrs({ className: "hero__title" })`
  ${fontMixin.title}
  font-size: 60px;
  font-weight: 600;
  color: ${color.textDarkGreen};

  @media ${device.mobile} {
    font-size: 24px;
    text-align: center;
  }
  @media ${device.tablet} {
    font-size: 36px;
    text-align: left;
  }

  @media ${device.laptop} {
    font-size: 40px;
    text-align: left;
  }
`;

export const SSubTitle = styled.h2.attrs({ className: "hero__subTitle" })`
  ${fontMixin.subTitle}
  font-size: 48px;
  color: ${color.textDarkGreen};
  border-bottom: 3px solid black;
  font-weight: 500;

  @media ${device.mobile} {
    text-align: center;
    border-bottom: 2px solid black;
  }
  @media ${device.tablet} {
    text-align: left;
  }
`;

export const SList = styled.ul.attrs({ className: "hero__list" })``;

export const SItem = styled.li.attrs({ className: "hero__item" })`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 18px;

  @media ${device.mobile} {
    align-items: flex-start;
    gap: 5px;
  }
`;

export const SIconQuality = styled(IconQuality).attrs({
  className: "hero__icon",
})`
  width: 60px;
  margin-right: 20px;

  fill: ${color.white};

  @media ${device.mobile} {
    width: 40px;
  }
  @media ${device.tablet} {
    width: 55px;
  }
`;

export const SIcon = styled(IconQualityCheck).attrs({
  className: "hero__icon",
})`
  width: 25px;
  margin-right: 20px;

  fill: ${color.accent_2};

  @media ${device.mobile} {
    width: 18px;
  }
  @media ${device.tablet} {
    width: 20px;
  }
`;

export const SText = styled.p.attrs({ className: "hero__text" })`
  ${fontMixin.standard}
  color:black;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1.2px;
`;

export const SBoxForm = styled.div.attrs({ className: "hero__boxForm" })`
  width: 50%;

  padding: 20px;
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
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 15px;
  }
  @media ${device.tablet} {
    margin-bottom: 18px;
  }
`;
