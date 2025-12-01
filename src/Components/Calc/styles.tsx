import styled from "styled-components";
import { fontMixin } from "../../assets/globalStyles";

interface SImageContainerProps {
  $isChanging: boolean;
}

export const SCalc = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

export const STitle = styled.h2`
  ${fontMixin.title}
  font-size: 40px;
  margin-bottom: 20px;
`;

export const SCalcContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SImageWrapper = styled.div`
  text-align: center;

  h3 {
    margin-top: 20px;
    color: #2c3e50;
  }

  p {
    margin-top: 10px;
    color: #7f8c8d;
    line-height: 1.5;
  }
`;

export const SOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

interface SOptionButtonProps {
  $isActive?: boolean;
}

export const SOptionButton = styled.button<SOptionButtonProps>`
  padding: 12px 20px;
  background-color: ${(props) => (props.$isActive ? "#3498db" : "#ffffff")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#2c3e50")};
  border: 2px solid ${(props) => (props.$isActive ? "#3498db" : "#e0e0e0")};
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#2980b9" : "#f8f9fa")};
    border-color: ${(props) => (props.$isActive ? "#2980b9" : "#3498db")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
  }
`;

export const SOptionTitle = styled.h3`
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 15px;
`;

export const SImageContainer = styled.div<SImageContainerProps>`
  position: relative;
  opacity: ${(props) => (props.$isChanging ? 0.6 : 1)};
  transform: ${(props) => (props.$isChanging ? "scale(0.98)" : "scale(1)")};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const SWindowImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
