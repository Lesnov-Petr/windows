import styled from "styled-components";
import { color } from "../../assets/globalStyles";

export const SGallery = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  box-shadow: 0 2px 10px ${color.accent};

  .swiper {
    width: 100%;
    padding: 60px 0; /* увеличенный паддинг */
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease !important; /* important для переопределения */
    opacity: 0.6;
    height: 300px;

    /* Базовые стили для всех слайдов */
    transform: scale(0.8) !important;
  }

  /* Активный слайд */
  .swiper-slide-active {
    transform: scale(1.2) !important; /* important для переопределения */
    /* z-index: 10; */
    opacity: 1;
  }

  /* Соседние слайды */
  .swiper-slide-next,
  .swiper-slide-prev {
    transform: scale(1) !important; /* important для переопределения */
    /* z-index: 5; */
    opacity: 0.8;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
    /* z-index: 20; */
    &::after {
      font-size: 24px;
    }
  }

  .swiper-pagination {
    bottom: 10px;
  }
`;

export const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  .swiper-slide-active & {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: scale(1.05);
  }
`;
