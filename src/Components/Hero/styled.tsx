import styled from "styled-components";
import heroImg from "../../assets/images/heroImg.png";
import { color, fontMixin } from "../../assets/globalStyles";

export const SHero = styled.div.attrs({ className: "hero" })`
  display: flex;
  background: url(${heroImg}) center/100% auto no-repeat;
  width: 100%;
  height: 600px;
  padding: 40px;
`;

export const SContainer = styled.div.attrs({ className: "hero__container" })`
  display: inherit;
  flex-direction: column;
  width: 50%;
`;

export const STitle = styled.h1.attrs({ className: "hero__title" })`
  ${fontMixin.title}
  font-size: 86px;
  color: black;
`;

export const SSubTitle = styled.h2.attrs({ className: "hero__subTitle" })`
  ${fontMixin.subTitle}
  font-size: 48px;
  color: ${color.textDarkGreen};
  border-bottom: 3px solid black;
  font-weight: 500;
`;

export const SList = styled.ul.attrs({ className: "hero__list" })``;

export const SItem = styled.li.attrs({ className: "hero__item" })`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SIcon = styled.img.attrs({ className: "hero__icon" })`
  width: 50px;
  border: 1px solid ${color.accent_2};
  background-color: ${color.accent_2}50;
  border-radius: 8px;
  padding: 4px;
`;
export const SBoxForm = styled.div.attrs({ className: "hero__boxForm" })`
  width: 21vw;
  padding: 20px;
  border: 1px solid ${color.accent_2};
  border-radius: 8px;
  background-color: ${color.bg};
  /* text-align: center; */
`;

export const STitleForm = styled.h2.attrs({ className: "hero__subTitle" })`
  ${fontMixin.subTitle}
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;
