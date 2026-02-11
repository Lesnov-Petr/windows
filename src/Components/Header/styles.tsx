import { styled } from "styled-components";
import { color, device } from "../../assets/globalStyles";
import { SToolHint } from "../ToolHint/styles";

export const SHeader = styled.div.attrs({ className: "header" })`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 85%;
  height: 110px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  /* Прозрачный матовый фон */
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px); /* для Safari */
  border: 1px solid ${color.accent_2};
  border-radius: 22px;

  @media ${device.mobile} {
    width: 100%;
    height: 80px;
  }
  @media ${device.tablet} {
    width: 95%;
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
