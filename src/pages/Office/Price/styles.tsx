import styled from "styled-components";
import { btnMixin, color, fontMixin } from "../../../assets/globalStyles";
import { SToolHint } from "../../../Components/ToolHint/styles";

export const SPrice = styled.div.attrs({ className: "price" })``;

export const SForm = styled.form.attrs({ className: "price__form" })`
  display: flex;
  flex-direction: column;
`;

export const SBtn = styled.button.attrs({
  className: "price__btnAddPrice",
})`
  ${btnMixin}
  margin-bottom: 20px;
`;

export const SBtnLoading = styled.button.attrs({
  className: "price__btnLoading",
})`
  position: relative;
  margin-bottom: 20px;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 2px solid ${color.accent_2};
  border-radius: 8px;
  background-color: ${color.accent};
  margin-left: auto;
  margin-right: 40px;

  &:hover ${SToolHint} {
    opacity: 1;
    visibility: visible;
  }
`;

export const SList = styled.ul.attrs({ className: "price__list" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SItem = styled.li.attrs({ className: "price__item" })`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid ${color.accent_2};
  border-radius: 4px;
  background-color: ${color.bgCards};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.1rem;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  gap: 20px;

  &:hover {
    box-shadow: 0 4px 8px rgba(70, 39, 39, 0.15);
    transform: scale(1);
  }
`;

export const SText = styled.p.attrs({ className: "price__text" })`
  ${fontMixin.standard}
  width:calc((100% - 0.5rem) / 3 );
`;

export const SBoxIcon = styled.div.attrs({ className: "price__boxIcon" })`
  display: flex;

  & > *:last-child {
    margin: 0;
  }
`;
