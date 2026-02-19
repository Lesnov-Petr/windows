import { styled } from "styled-components";
import { device } from "../../assets/globalStyles";
import { SToolHint } from "../ToolHint/styles";
import { SButton } from "../Button/styles";

export const SHeader = styled.div.attrs({ className: "header" })`
  position: relative;
  display: flex;
  margin: auto auto;
  width: 70%;
  height: 110px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 18px;

  /* Прозрачный матовый фон */
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px); /* для Safari */

  @media ${device.mobile} {
    width: 100%;
    height: 80px;
    align-items: center;

    & ${SButton} {
      display: none;
    }
  }
  @media ${device.tablet} {
    width: 100%;
    height: 90px;

    & ${SButton} {
      display: none;
    }
  }

  @media ${device.laptop} {
    height: 100px;
    width: 85%;
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
