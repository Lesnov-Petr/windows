import styled from "styled-components";
import { color, device, fontMixin } from "../../assets/globalStyles";

export const SDescription = styled.div.attrs({ className: "description" })`
  /* width: 100%; */
  background-color: white;
`;

export const SBox = styled.div.attrs({ className: "description__box" })`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

export const STitle = styled.h2.attrs({ className: "description__title" })`
  ${fontMixin.title}
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SList = styled.ul.attrs({ className: "description__list" })`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export const SLink = styled.a.attrs({ className: "description__link" })`
  position: relative;
  display: block;
  overflow: hidden;
  flex: 0 1 calc(25% - 15px);
  min-width: 250px;
  border: 1px solid ${color.accent_2};
  border-radius: 8px;

  /* Адаптация для ноутбуков (4 колонки с уменьшенными отступами) */
  @media ${device.laptop} {
    flex: 1 1 calc(25% - 10px);
    min-width: 220px;
    margin-bottom: 15px;
  }

  /* Адаптация для планшетов (2 колонки) */
  @media ${device.tablet} {
    flex: 1 1 calc(50% - 10px);
    min-width: 0;
    max-width: 480px;
    margin: 0 auto 15px;
  }

  /* Адаптация для мобильных (1 колонка) */
  @media ${device.mobile} {
    flex: 1 1 100%;
    min-width: 0;
    max-width: none;
    margin-bottom: 15px;
    border-radius: 6px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .wrapper {
    position: absolute;
    bottom: 0%;
    width: 100%;
    z-index: 3;
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 16px; /* Уменьшили отступы для компактности на мобильных */

    .icon {
      width: 36px;
      height: 36px;
      margin-right: 16px;
      filter: brightness(2) invert(1);
    }

    .span {
      ${fontMixin.subTitle}
      font-size: 18px; /* Уменьшили шрифт для планшетов/мобильных */
    }

    .price {
      margin-left: auto;
      font-size: 16px; /* Дополнительно уменьшили размер цены */
    }
  }
`;

export const SOverlay = styled.div.attrs({ className: "description__overlay" })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(253, 248, 241, 0.7) 20%,
    transparent 50%
  );
  z-index: 2;
  pointer-events: none;
`;

export const SBoxReasons = styled.div.attrs({
  className: "description__boxReasons",
})`
  display: flex;
  padding-top: 60px;
  min-height: 100vh;

  @media ${device.laptop} {
    padding-top: 50px;
    min-height: auto;
  }

  @media ${device.tablet} {
    padding-top: 40px;
    flex-direction: column;
  }

  @media ${device.mobile} {
    padding-top: 30px;
    flex-direction: column;
  }
`;

export const SSection = styled.div.attrs({
  className: "description__sercion",
})`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    padding-right: 20px;
    width: 45%;
  }
  &:last-child {
    padding-left: 20px;
    width: 55%;
  }

  @media ${device.laptop} {
    &:first-child,
    &:last-child {
      width: 100%; /* Одна колонка на ноутбуках */
      padding: 0 15px;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;

    &:first-child,
    &:last-child {
      width: 100%;
      padding: 10px 0;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    &:first-child,
    &:last-child {
      width: 100%;
      padding: 8px 0;
    }
  }
`;

export const SListReasons = styled.ul.attrs({
  className: "description__listReasons",
})`
  display: flex;
  flex-direction: column;

  gap: 20px;

  @media ${device.laptop} {
    gap: 18px;
  }

  @media ${device.tablet} {
    gap: 16px;
    padding: 0 10px;
  }

  @media ${device.mobile} {
    gap: 14px;
    padding: 0 8px;
  }
`;

export const SItem = styled.li.attrs({ className: "description__item" })`
  display: flex;
  padding: 20px;
  border-radius: 22px;
  border: 1px solid ${color.accent_2};
  gap: 15px;
  background-color: rgba(26, 211, 211, 0.2);

  @media ${device.laptop} {
    padding: 18px;
    gap: 13px;
  }

  @media ${device.tablet} {
    padding: 16px;
    gap: 12px;
    border-radius: 18px;
    width: 70vw;
  }

  @media ${device.mobile} {
    padding: 14px;
    gap: 10px;
    border-radius: 14px;
  }
`;

export const STitleReasons = styled.h3.attrs({
  className: "description__titleReasons",
})`
  ${fontMixin.title}
  position:sticky;
  top: 0;
  font-size: 46px;
  font-weight: 700;
  text-transform: uppercase;
  align-self: flex-start;

  @media ${device.laptop} {
    font-size: 40px;
  }

  @media ${device.tablet} {
    font-size: 27px;
    padding: 0 10px;
    margin: 0 auto;
  }

  @media ${device.mobile} {
    font-size: 28px;
    padding: 0 8px;
    margin: 0 auto;
  }
`;

export const SSubTitleReasons = styled.h3.attrs({
  className: "description__titleReasons",
})`
  ${fontMixin.subTitle}
  font-size:20px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.textDarkGreen};

  @media ${device.laptop} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    padding: 0 10px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    padding: 0 8px;
    /* text-align: center; */
  }
`;

export const SKey = styled.h2.attrs({
  className: "description__titleReasons",
})`
  ${fontMixin.title}
  font-size:64px;

  @media ${device.laptop} {
    font-size: 56px;
  }

  @media ${device.tablet} {
    font-size: 48px;
    text-align: center;
  }

  @media ${device.mobile} {
    font-size: 36px;
    text-align: center;
  }
`;

export const SItemReason = styled.li.attrs({
  className: "description__itemReason",
})`
  ${fontMixin.standard}
  font-size:20px;

  display: flex;
  padding-left: 20px;
  color: ${color.textDarkGreen};

  @media ${device.laptop} {
    font-size: 18px;
    padding-left: 18px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    padding-left: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px; /* Чтобы текст не упирался в край */
  }
`;
