import styled from "styled-components";
import { color, device, fontMixin } from "../../assets/globalStyles";

export const SDescription = styled.div.attrs({ className: "description" })`
  width: 100%;
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
