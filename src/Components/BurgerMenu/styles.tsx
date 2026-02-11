import styled from "styled-components";
import { color, device, fontMixin } from "../../assets/globalStyles";
import { NavLink } from "react-router-dom";

export const SBurgerMenu = styled.div.attrs({ className: "burgerMenu" })`
  display: none;
  position: relative;
  z-index: 3;

  @media ${device.mobile} {
    display: block;
  }

  @media ${device.tablet} {
    display: block;
  }
`;

export const SMenuOverlay = styled.div.attrs({
  className: "burgerMenu__overlay",
})`
  position: fixed;
  top: -15px;
  left: -26px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SMenuContent = styled.div.attrs({
  className: "burgerMenu__content",
})<{
  $isOpen: boolean;
}>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 340px;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${color.bg};
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-out;
  overflow-y: auto;
  /* overflow-x: hidden; */
  border-radius: 22px;

  /* Полный выход из потока при закрытии */
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

  /* Убираем transform, так как display: none эффективнее */
  transition: display 300s ease-out; /* Плавность не нужна для none */
`;

export const SList = styled.ul.attrs({ className: "burgerMenu__list" })`
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
`;

export const SLink = styled(NavLink).attrs({ className: "burgerMenu__link" })`
  ${fontMixin.standard}
  margin-bottom: 20px;
  color: ${color.text};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${color.textDarkGreen};
    font-weight: 600;
  }
`;

export const SButtonClose = styled.button.attrs({
  className: "burgerMenu__btnClose",
})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: rotate(90deg);
    background-color: ${color.accent};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${color.textDarkGreen};
    transition: fill 0.2s ease;
  }
`;

export const SBurgerIcon = styled.button.attrs({
  className: "burgerMenu__icon",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${color.textDarkGreen};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const SAuthMenu = styled.div.attrs({
  className: "burgermenu__authMenu",
})`
  position: absolute;
  top: 80px;
  right: 100px;
`;
