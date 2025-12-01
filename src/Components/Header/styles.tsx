import { styled } from "styled-components";
import { device } from "../../assets/globalStyles";

export const SHeader = styled.div.attrs({ className: "header" })`
  display: flex;
  width: 100%;
  height: 110px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  /* @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.desktop} {
    width: 20%;
  } */
`;
