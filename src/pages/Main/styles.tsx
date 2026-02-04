import { styled } from "styled-components";
import { device } from "../../assets/globalStyles";

export const SMain = styled.div.attrs({ className: "main" })`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
  }
`;
