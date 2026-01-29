import { styled } from "styled-components";
import { device } from "../../assets/globalStyles";
import { SToolHint } from "../ToolHint/styles";

export const SHeader = styled.div.attrs({ className: "header" })`
  display: flex;
  width: 100%;
  height: 110px;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    height: 80px;
  }
  @media ${device.tablet} {
    height: 90px;
  }

  @media ${device.laptop} {
    height: 100px;
  }
`;

export const SAuth = styled.div.attrs({ className: "auth" })`
  position: relative;
  display: flex;
  cursor: pointer;

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.tablet} {
    display: none;
  }

  .burgerMenu & {
    @media ${device.mobile} {
      display: flex;
    }
    @media ${device.tablet} {
      display: flex;
    }
  }
`;

export const SListBtn = styled.ul.attrs({ className: "auth__listBtn" })`
  display: flex;
  gap: 5px;
`;

export const SAuthItemBtn = styled.li.attrs({ className: "auth__itemBtn" })`
  position: relative;

  &:hover ${SToolHint} {
    opacity: 1;
    visibility: visible;
  }
`;

export const SAuthIcon = styled.img.attrs({ className: "auth__icon" })`
  width: 30px;
  height: 30px;

  @media ${device.mobile} {
    width: 24px;
    height: 24px;
  }
  @media ${device.tablet} {
    width: 26px;
    height: 26px;
  }
`;
