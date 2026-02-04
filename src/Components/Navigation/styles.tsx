import styled from "styled-components";
import { color, fontMixin } from "../../assets/globalStyles";
import { NavLink } from "react-router-dom";
import { device } from "../../assets/globalStyles";

export const SNavigation = styled.div.attrs({ className: "navigation" })`
  display: flex;
  height: 100%;
  align-items: center;

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const SList = styled.ul.attrs({ className: "header__list" })`
  display: inherit;
  margin: 0;
  padding: 0;
  gap: 5px;
`;

export const SLink = styled(NavLink).attrs({ className: "header__link" })`
  ${fontMixin.standard}
  font-size: 24px;
  height: auto;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${color.text};

  &.active {
    padding-bottom: 5px;
    color: ${color.accent_2};
    border-bottom: 2px solid ${color.accent_2};
    background: none;
  }

  &:hover {
    background-color: ${color.accent};
    color: ${color.textAccent};
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${device.mobile} {
    padding: 8px 12px;
    width: 100%;
    text-align: left;
    margin: 5px 0;
  }
  @media ${device.tablet} {
    padding: 9px 14px;
  }
  @media ${device.laptop} {
    padding: 10px 15px;
  }
`;
