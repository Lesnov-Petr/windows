import React, { useEffect, useState } from "react";
import { Container } from "../Container";
import windowConfigs from "../../db/listWindows";
import { WindowType, PreviewElement } from "../../types/windows";
import { ColorPicker } from "../ColorPicker";
import {
  SCalc,
  STitle,
  SCalcContent,
  SImageWrapper,
  SWindowImage,
  SOptions,
  SOptionButton,
  SOptionTitle,
  STypeWindow,
  SListWindows,
  SItemWindow,
  SPreviewWrapper,
  SAdditionalParams,
  SImageParamWindow,
  SPriviewColorProfile,
  SSpanColorProfile,
  STitleColorProfile,
  SBoxColorProfile,
  SPreviewProfile,
} from "./styles";
import { ToolHint } from "../ToolHint";

export const Calc: React.FC = () => {
  const [isOpenParamWindow, setIsOpenParamWindow] = useState<boolean>(false);
  const [selectedType, setSelectedType] =
    useState<WindowType>("odnostvorchatoe");
  const selectedConfigs = windowConfigs[selectedType].typeConfigWindow;
  const [selectedConfig, setSelectedConfig] = useState<number>(0);
  const [wallColor, setWallColor] = useState("#33E3A9");

  const currentConfig = selectedConfigs[selectedConfig];
  const [groupSelections, setGroupSelections] = useState<
    Record<string, number>
  >({
    profile: 0,
  });
  const [isImageChanging, setIsImageChanging] = useState(false);

  // Текущая конфигурация окна - теперь обновляется при смене типа
  const [configWindow, setConfigWindow] = useState<Record<string, string>>({
    typeWindow: selectedType,
  });

  // Обновляем configWindow при изменении selectedType
  useEffect(() => {
    setConfigWindow({
      typeWindow: selectedType,
    });
  }, [selectedType]);

  // Получаем выбранный профиль
  const selectedProfile =
    currentConfig?.profiles?.[groupSelections.profile] || null;

  // Функция для получения плоского списка изображений для отображения
  const getDisplayImages = (previewElements: PreviewElement[]) => {
    const images: Array<{
      img: string;
      description: string;
      hidden?: boolean;
      elementIndex?: number; // Индекс элемента в preview
      isGroup?: boolean; // Является ли элемент группой
      groupId?: string; // ID группы (если есть)
    }> = [];

    previewElements.forEach((element, elementIndex) => {
      if ("img" in element) {
        // Это одиночное изображение
        images.push({
          ...element,
          elementIndex,
          isGroup: false,
        });
      } else if ("images" in element) {
        // Это группа изображений
        const selectedIndex = element.groupId
          ? groupSelections[element.groupId] || element.selectedIndex || 0
          : element.selectedIndex || 0;

        if (element.images[selectedIndex]) {
          images.push({
            ...element.images[selectedIndex],
            elementIndex,
            isGroup: true,
            groupId: element.groupId,
          });
        }
      }
    });

    return images;
  };

  const handleWindowTypeChange = (type: WindowType, delay: number = 200) => {
    setIsImageChanging(true);
    setTimeout(() => {
      setSelectedType(type);
      setSelectedConfig(0);
      setGroupSelections({ profile: 0 }); // Сброс выбранных групп, но сохраняем profile
      setIsImageChanging(false);
    }, delay);
  };

  const handleConfigChange = (index: number) => {
    setIsImageChanging(true);
    setSelectedConfig(index);
    setGroupSelections({ profile: 0 }); // Сброс выбранных групп, но сохраняем profile
    setIsImageChanging(false);
  };

  // Обработчик выбора профиля
  const handleProfileSelect = (groupId: string, imageIndex: number) => {
    setGroupSelections((prev) => ({
      ...prev,
      [groupId]: imageIndex,
    }));

    setIsImageChanging(true);

    setTimeout(() => {
      setIsImageChanging(false);
      setIsOpenParamWindow(false);
    }, 400);
  };

  const displayImages = currentConfig
    ? getDisplayImages(currentConfig.preview)
    : [];

  return (
    <SCalc>
      <Container>
        <STitle>Калькулятор стоимости</STitle>

        <SOptionTitle>Выберите тип окна:</SOptionTitle>
        <SOptions>
          {Object.entries(windowConfigs).map(([type, config]) => (
            <SOptionButton
              key={type}
              $isActive={configWindow.typeWindow === type}
              onClick={() => handleWindowTypeChange(type as WindowType)}
            >
              {config.title}
            </SOptionButton>
          ))}
        </SOptions>

        <SOptionTitle style={{ marginTop: "20px" }}>
          Укажите конфигурацию:
        </SOptionTitle>
        <SListWindows>
          {selectedConfigs.map((config, index) => (
            <SItemWindow key={index}>
              <SImageWrapper
                $isActive={selectedConfig === index}
                onClick={() => handleConfigChange(index)}
              >
                <STypeWindow src={config.image} />
                <ToolHint>{config.typeConfig}</ToolHint>
              </SImageWrapper>
            </SItemWindow>
          ))}
        </SListWindows>

        <SCalcContent>
          <SPreviewWrapper $color={wallColor}>
            {displayImages.map((item, index) => (
              <SWindowImage
                key={`${item.elementIndex}-${index}`}
                src={item.img}
                alt={item.description}
                $isHidden={item.hidden}
                $isChanging={isImageChanging}
              />
            ))}
          </SPreviewWrapper>

          <div>
            <SOptionTitle style={{ marginTop: "30px" }}>
              Дополнительные параметры:
            </SOptionTitle>

            <SOptions>
              {/* Цвет стены */}
              <ColorPicker color={wallColor} onSetColor={setWallColor} />

              {/* Кнопка Профиль */}
              <SOptionButton
                onClick={() => setIsOpenParamWindow(!isOpenParamWindow)}
                style={{ paddingLeft: "40px" }}
              >
                {selectedProfile && (
                  <SPriviewColorProfile
                    src={selectedProfile.img}
                    alt={selectedProfile.description}
                  />
                )}
                <SBoxColorProfile>
                  <STitleColorProfile>Выберите цвет профиля</STitleColorProfile>
                  {selectedProfile && (
                    <SSpanColorProfile>
                      {selectedProfile.description}
                    </SSpanColorProfile>
                  )}
                </SBoxColorProfile>
              </SOptionButton>
              {isOpenParamWindow && (
                <SAdditionalParams>
                  {currentConfig.profiles.map((profile, profileIndex) => {
                    const selectedColorIndex = groupSelections["profile"] || 0;

                    return (
                      <SPreviewProfile
                        key={profileIndex}
                        onClick={() =>
                          handleProfileSelect("profile", profileIndex)
                        }
                      >
                        <SImageParamWindow
                          src={profile.img}
                          alt={profile.description}
                          className={
                            selectedColorIndex === profileIndex
                              ? "selected"
                              : ""
                          }
                        />
                      </SPreviewProfile>
                    );
                  })}
                </SAdditionalParams>
              )}
            </SOptions>
          </div>
        </SCalcContent>
      </Container>
    </SCalc>
  );
};
