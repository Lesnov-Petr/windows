import React, { useState } from "react";
import { Container } from "../Container";
import {
  SCalc,
  STitle,
  SCalcContent,
  SImageWrapper,
  SWindowImage,
  SOptions,
  SOptionButton,
  SOptionTitle,
  SImageContainer,
} from "./styles";

// Типы для конфигураций окон
type WindowType = "standard" | "sliding" | "arched" | "corner" | "bay";

// Данные для каждого типа окна
const windowConfigs: Record<
  WindowType,
  {
    title: string;
    imageUrl: string;
    description: string;
  }
> = {
  standard: {
    title: "Стандартное окно",
    imageUrl: "/images/windows/standard.png", // Путь к изображению
    description: "Классическое прямое окно, подходит для большинства помещений",
  },
  sliding: {
    title: "Раздвижное окно",
    imageUrl: "/images/windows/sliding.png",
    description: "Окно с раздвижными створками, идеально для балконов и террас",
  },
  arched: {
    title: "Арочное окно",
    imageUrl: "/images/windows/arched.png",
    description:
      "Окно с арочной верхней частью, добавляет элегантности интерьеру",
  },
  corner: {
    title: "Угловое окно",
    imageUrl: "/images/windows/corner.png",
    description:
      "Окно, расположенное на углу здания, обеспечивает панорамный обзор",
  },
  bay: {
    title: "Эркерное окно",
    imageUrl: "/images/windows/bay.png",
    description:
      "Выступающее за плоскость фасада окно, создает дополнительное пространство",
  },
};

export const Calc: React.FC = () => {
  // Состояние для выбранного типа окна
  const [selectedWindowType, setSelectedWindowType] =
    useState<WindowType>("standard");

  const [isImageChanging, setIsImageChanging] = useState(false);

  // Обновить функцию смены изображения
  const handleWindowTypeChange = (type: WindowType) => {
    setIsImageChanging(true);
    setTimeout(() => {
      setSelectedWindowType(type);
      setIsImageChanging(false);
    }, 300);
  };

  return (
    <SCalc>
      <Container>
        <STitle>Калькулятор стоимости</STitle>

        <SCalcContent>
          {/* Левая часть с изображением */}
          <SImageWrapper>
            <SWindowImage
              src={windowConfigs[selectedWindowType].imageUrl}
              alt={windowConfigs[selectedWindowType].title}
            />
            <h3>{windowConfigs[selectedWindowType].title}</h3>
            <p>{windowConfigs[selectedWindowType].description}</p>
          </SImageWrapper>

          {/* Правая часть с выбором опций */}
          <div>
            <SOptionTitle>Выберите тип окна:</SOptionTitle>

            <SOptions>
              {Object.entries(windowConfigs).map(([type, config]) => (
                <SOptionButton
                  key={type}
                  $isActive={selectedWindowType === type}
                  onClick={() => handleWindowTypeChange(type as WindowType)}
                >
                  {config.title}
                </SOptionButton>
              ))}
            </SOptions>

            {/* Дополнительные опции для калькулятора */}
            <SOptionTitle style={{ marginTop: "30px" }}>
              Дополнительные параметры:
            </SOptionTitle>

            <SOptions>
              <SOptionButton>Размер: Средний</SOptionButton>
              <SOptionButton>Материал: Пластик</SOptionButton>
              <SOptionButton>Стеклопакет: Двухкамерный</SOptionButton>
              <SOptionButton>Цвет: Белый</SOptionButton>
            </SOptions>
          </div>
        </SCalcContent>

        {/* Блок с предварительным расчетом стоимости */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Предварительная стоимость:</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2c3e50" }}>
            15 000 ₽ - 25 000 ₽
          </p>
          <p style={{ marginTop: "10px", color: "#7f8c8d" }}>
            Точная стоимость будет рассчитана после замера
          </p>
        </div>
      </Container>
    </SCalc>
  );
};
