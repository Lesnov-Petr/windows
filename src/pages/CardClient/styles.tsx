import styled from "styled-components";
import { color, cubic, fontMixin, ms } from "../../assets/globalStyles";
import { SToolHint } from "../../Components/ToolHint/styles";

// Основной контейнер карточки
export const SCardClient = styled.div.attrs({ className: "cardClient" })`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${color.bgCards};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: ${fontMixin.standard}, sans-serif;
  color: ${color.text};

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 0.5rem;
    padding: 1rem;
  }
`;

export const SWrapper = styled.div.attrs({
  className: "cardClient__wrapper",
})`
  display: flex;
  justify-content: space-between; /* Растягивает элементы по краям */
  align-items: center; /* Вертикальное выравнивание */
  border-bottom: 2px solid ${color.accent_2};
  padding-bottom: 0.5rem;
  letter-spacing: 0.5px;
  width: 100%; /* На всю ширину родителя */

  img {
    margin: 0;
    cursor: pointer;
  }
`;

export const SButton = styled.div.attrs({ className: "cardClient__button" })`
  position: relative;
  margin-right: 5px;
  padding: 2px;
  transition: all ${ms} ${cubic};

  &:hover {
    border-radius: 8px;
    outline: 2px solid ${color.accent_2};
  }

  &:hover ${SToolHint} {
    opacity: 1;
    visibility: visible;
  }

  &:last-child {
    margin: 0;
  }
`;

// Заголовок карточки
export const STitle = styled.h3.attrs({ className: "cardClient__title" })`
  ${fontMixin}
  color: ${color.text};
  margin: 0; /* Убираем margin-bottom — теперь выравнивание через flex */
  text-align: center;
  flex: 1; /* Занимает доступное пространство */
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

// Секция с основной информацией (сетка)
export const SInfo = styled.div.attrs({ className: "cardClient__info" })`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.25rem 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Метка поля (название параметра)
export const SLabel = styled.span`
  font-weight: 600;
  color: ${color.textDarkGreen};
  white-space: nowrap;
  font-size: 0.95rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

// Значение поля
export const SValue = styled.span`
  color: ${color.text};
  word-break: break-word;
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

// Список заказов
export const SList = styled.ul.attrs({ className: "cardClient__list" })`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding: 0;

  @media (max-width: 600px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SIcon = styled.img.attrs({
  className: "cardClient__icon",
})`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  object-fit: contain;
`;

export const SItem = styled.li.attrs({ className: "cardClient__item" })`
  position: relative;
  background-color: ${color.bg};
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  cursor: pointer;
  transition: all ${ms} ${cubic};

  @media (max-width: 600px) {
    padding: 1rem;
    grid-template-columns: 1fr;
  }

  &:hover {
    outline: 2px solid ${color.accent_2};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }

  /* Позиционирование SButton */
  ${SButton} {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    padding: 5px;

    /* Стили для иконки внутри кнопки */
    ${SIcon} {
      width: 20px;
      height: 20px;
      object-fit: contain;
      margin: 0;
    }

    @media (max-width: 600px) {
      top: 1rem;
      right: 1rem;
    }
  }
`;

export const SOrderLabel = styled(SLabel)`
  font-weight: 600;
  color: ${color.accent_2};
`;

export const SOrderValue = styled(SValue)`
  color: ${color.text};
`;

export const SWrapperInfo = styled.div.attrs({
  className: "office__wrapperInfoItem",
})`
  display: flex;
  align-items: center;
`;

export const SInfoItem = styled.p.attrs({ className: "office__infoItem" })`
  font-size: 0.9rem;
  color: ${color.textDarkGreen};
  margin: 0;
  line-height: 1.4;
`;
