import styled from "styled-components";
import { fontMixin, color } from "../../assets/globalStyles";

export const SFormUpdateClient = styled.form.attrs({
  className: "formUpdateClient",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SWrapper = styled.div.attrs({
  className: "formUpdateClient__wrapper",
})`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const STitle = styled.h3.attrs({
  className: "formUpdateClient__title",
})`
  ${fontMixin}
  color: ${color.text};

  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  flex: 1; /* Занимает доступное пространство */
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const SLabel = styled.label.attrs({
  className: "formUpdateClient__label",
})`
  ${fontMixin.standard}
  display: block;
  margin-right: 5px;
  color: ${color.text};
  min-width: 25%;
`;
