import styled from "styled-components";
import { color, fontMixin } from "../../assets/globalStyles";
import { NavLink } from "react-router-dom";

export const SNavigation = styled.div.attrs({ className: "navigation" })`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const SList = styled.ul.attrs({ className: "header__list" })`
  display: inherit;
`;

export const SLink = styled(NavLink).attrs({ className: "header__link" })`
  ${fontMixin.standart}
  font-size: 20px;
  height: auto;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &.active {
    padding-bottom: 5px;
    color: ${color.accent};
    font-weight: bold;
    border-bottom: 2px solid ${color.accent};
    background: none;
  }

  &:hover {
    background-color: ${color.accent};
    color: ${color.textAccent};
  }

  &:last-child {
    margin-right: 0;
  }
`;
