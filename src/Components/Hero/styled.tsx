import styled from "styled-components";
import heroImg from "../../assets/images/heroImg.png";
import { color, fontMixin, device } from "../../assets/globalStyles";

export const SHero = styled.div.attrs({ className: "hero" })`
  display: flex;
  background: url(${heroImg}) center/100% auto no-repeat;
  width: 100%;
  height: 600px;
  padding: 40px 0;

  @media ${device.mobile} {
    height: 400px;
    padding: 20px 0;
  }
  @media ${device.tablet} {
    height: 500px;
    padding: 30px 0;
  }
`;

export const SContainer = styled.div.attrs({ className: "hero__container" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const STitle = styled.h1.attrs({ className: "hero__title" })`
  ${fontMixin.title}
  font-size: 86px;
  color: black;
  @media ${device.mobile} {
    font-size: 48px;
    text-align: center;
  }
  @media ${device.tablet} {
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

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const SIcon = styled.img.attrs({ className: "hero__icon" })`
  width: 50px;
  border: 1px solid ${color.accent_2};
  background-color: ${color.accent_2}50;
  border-radius: 8px;
  padding: 4px;

  @media ${device.mobile} {
    width: 40px;
    padding: 3px;
  }
  @media ${device.tablet} {
    width: 45px;
    padding: 3.5px;
  }
`;

export const SBoxForm = styled.div.attrs({ className: "hero__boxForm" })`
  width: 50%;
  height: 90%;
  padding: 20px;
  border: 1px solid ${color.accent_2};
  border-radius: 8px;
  background-color: ${color.bg};

  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    width: 80%;
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
