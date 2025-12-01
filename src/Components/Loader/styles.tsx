import styled from "styled-components";

export const SLogoLoader = styled.div.attrs({ className: "loader" })`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid transparent;
    mix-blend-mode: overlay;
  }

  &::before {
    border-top-color: #49497f;
    border-right-color: #49497f;
    animation: logo-spin 1.5s linear infinite;
  }

  &::after {
    border-bottom-color: #298c97;
    border-left-color: #298c97;
    animation: logo-spin 2s linear infinite;
  }

  @keyframes logo-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SLogoLoaderInner = styled.div.attrs({
  className: "loader__inner",
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #1f1e1f;
  animation: logo-spin-inner 1s linear infinite;

  @keyframes logo-spin-inner {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
