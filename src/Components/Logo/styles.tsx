import styled from "styled-components";
import { device } from "../../assets/globalStyles"; // путь к вашему файлу с device/media

export const SLogo = styled.div.attrs({ className: "logotype" })`
  display: flex;
  justify-content: flex-start;

  @media ${device.mobile} {
    justify-content: center;
    padding: 5px 0;
  }
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const SLogoImage = styled.img.attrs({ className: "logotype__img" })`
  width: 100px;
  height: 100px;

  @media ${device.mobile} {
    width: 80px;
    height: 80px;
  }
  @media ${device.tablet} {
    width: 90px;
    height: 90px;
  }
`;

export const SLink = styled.a.attrs({ className: "logotype__link" })`
  display: block;
  text-decoration: none;

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
  }
`;
