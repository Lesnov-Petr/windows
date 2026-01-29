import styled from "styled-components";
import { color, fontMixin } from "../../assets/globalStyles";

export const SDescription = styled.div.attrs({ className: "description" })`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  gap: 20px;
`;

export const SLink = styled.a.attrs({ className: "description__link" })`
  position: relative;
  display: block;
  overflow: hidden;
  width: calc(100% / 3);
  border: 1px solid ${color.accent_2};
  border-radius: 8px;

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
    align-items: end;
    padding: 20px;

    .icon {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      filter: brightness(2) invert(1);
    }

    .span {
      ${fontMixin.standard}
      font-size:25px;
    }

    .price {
      margin-left: auto;
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
