import styled from "styled-components";
import { device } from "../../assets/globalStyles";

export const SContainer = styled.div.attrs({ className: "container" })`
  width: 1200px;
  padding: 0 20px;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 100%;
    padding: 0 16px;
  }

  @media ${device.tablet} {
    width: calc(100% - 32px);
    padding: 0 16px;
  }

  @media ${device.laptop} {
    width: 90vw;
    padding: 0 20px;
  }
`;
