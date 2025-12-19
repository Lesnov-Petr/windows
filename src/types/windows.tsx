// types/windows.ts

interface Images {
  images: PreviewImage[];
}

export interface PreviewImage {
  img: string;
  description: string;
  hidden?: boolean;
}

export interface ColorProfiles {
  img: string;
  description: string;
}

// Тип для элемента превью (может быть одиночным изображением или группой)
export type PreviewElement =
  | PreviewImage
  | (Images & {
      groupId?: string;
      selectedIndex?: number;
      groupName?: string; // Добавляем имя группы для отображения
    });

// Типы для конфигураций окон
export type WindowType =
  | "odnostvorchatoe"
  | "dvuhstvorchatoe"
  | "trehstvorchatoe"
  | "balkondoor";

// Тип для конфигурации окна
export type WindowConfig = {
  typeConfig: string;
  image: string;
  description: string;
  preview: PreviewElement[];
  profiles: ColorProfiles[];
};
