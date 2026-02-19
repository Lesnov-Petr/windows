import styled from "styled-components";
import { color, device, fontMixin } from "../../assets/globalStyles";

export const SDescription = styled.div.attrs({ className: "description" })`
  background-color: ${color.bg};
`;

export const SBox = styled.div.attrs({ className: "description__box" })`
  display: flex;
  flex-direction: column;
  max-width: 94rem;
  margin: 0 auto;
  padding: 1.25rem;
`;

export const STitle = styled.h2.attrs({ className: "description__title" })`
  ${fontMixin.title}
  margin-bottom: 1.25rem;
  text-align: center;
`;

export const SList = styled.ul.attrs({ className: "description__list" })`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.25rem;
`;

export const SLink = styled.a.attrs({ className: "description__link" })`
  position: relative;
  display: block;
  overflow: hidden;
  flex: 0 1 calc(25% - 15px);
  border: 1px solid ${color.accent_2};
  border-radius: 8px;

  /* Адаптация для ноутбуков (4 колонки с уменьшенными отступами) */
  @media ${device.laptop} {
    flex: 1 1 calc(25% - 10px);
  }

  /* Адаптация для планшетов (2 колонки) */
  @media ${device.tablet} {
    flex: 1 1 calc(50% - 10px);
    max-width: 30rem;
  }

  /* Адаптация для мобильных (1 колонка) */
  @media ${device.mobile} {
    flex: 1 1 calc(50% - 10px);
    border-radius: 8px;
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
    padding: 0.2rem; /* Уменьшили отступы для компактности на мобильных */

    .span,
    .price {
      ${fontMixin.subTitle}
      margin-left: auto;
      color: ${color.textDarkGreen};

      @media ${device.mobile} {
        ${fontMixin.standard}
        font-weight: 600;
      }
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
  padding-top: 3.75rem;
  min-height: 100vh;

  @media ${device.laptop} {
    padding-top: 3rem;
  }

  @media ${device.tablet} {
    padding-top: 2.5rem;
    flex-direction: column;
  }

  @media ${device.mobile} {
    padding-top: 2rem;
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
    padding-right: 1.25rem;
    width: 45%;
  }
  &:last-child {
    padding-left: 1.25rem;
    width: auto;
  }

  @media ${device.laptop} {
    &:first-child,
    &:last-child {
      width: 100%; /* Одна колонка на ноутбуках */
      padding: 0 1rem;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;

    &:first-child,
    &:last-child {
      width: 100%;
      padding: 0.5rem 0;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    &:first-child,
    &:last-child {
      width: 100%;
      padding: 0.5rem 0;
    }
  }
`;

export const SListReasons = styled.ul.attrs({
  className: "description__listReasons",
})`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media ${device.tablet} {
    padding: 0 10px;
  }

  @media ${device.mobile} {
    gap: 0.8rem;
    padding: 0 8px;
  }
`;

export const SItem = styled.li.attrs({ className: "description__item" })`
  display: flex;
  padding: 1.25rem;
  gap: 1rem;
  border-radius: 1em;
  border: 1px solid ${color.accent_2};
  background-color: rgba(26, 211, 211, 0.2);

  @media ${device.tablet} {
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 1em;
  }

  @media ${device.mobile} {
    padding: 0.75rem;
    gap: 0.5rem;
    border-radius: 1em;
  }
`;

export const STitleReasons = styled.h3.attrs({
  className: "description__titleReasons",
})`
  ${fontMixin.title}
  position:sticky;
  top: 0;
  font-weight: 700;
  text-transform: uppercase;
  align-self: flex-start;

  @media ${device.tablet} {
    padding: 0 0.5rem;
    margin: 0 auto;
    align-self: flex-start;
  }

  @media ${device.mobile} {
    padding: 0 0.5rem;
    margin: 0 auto;
  }
`;

export const SSubTitleReasons = styled.h3.attrs({
  className: "description__subTitleReasons",
})`
  ${fontMixin.subTitle}
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.textDarkGreen};
`;

export const SKey = styled.h2.attrs({
  className: "description__titleReasons",
})`
  ${fontMixin.title}
  font-size: 3.5rem;

  @media ${device.tablet} {
    font-size: 3rem;
    text-align: center;
  }

  @media ${device.mobile} {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const SItemReason = styled.li.attrs({
  className: "description__itemReason",
})`
  ${fontMixin.standard}

  display: flex;
  align-items: center;
  color: ${color.textDarkGreen};
  gap: 0.5rem;
`;
