import c1Odnostvorchatoe from "../assets/images/typeWindows/c1Odnostvorchatoe.svg";
import c2Odnostvorchatoe from "../assets/images/typeWindows/c2Odnostvorchatoe.svg";
import c3Odnostvorchatoe from "../assets/images/typeWindows/c3Odnostvorchatoe.svg";
import c1Dvuhstvorchatoe from "../assets/images/typeWindows/c1Dvuhstvorchatoe.svg";
import c2Dvuhstvorchatoe from "../assets/images/typeWindows/c2Dvuhstvorchatoe.svg";
import c3Dvuhstvorchatoe from "../assets/images/typeWindows/c3Dvuhstvorchatoe.svg";
import c4Dvuhstvorchatoe from "../assets/images/typeWindows/c4Dvuhstvorchatoe.svg";
import c5Dvuhstvorchatoe from "../assets/images/typeWindows/c5Dvuhstvorchatoe.svg";
import c6Dvuhstvorchatoe from "../assets/images/typeWindows/c6Dvuhstvorchatoe.svg";
import c1Trehstvorchatoe from "../assets/images/typeWindows/c1Trehstvorchatoe.svg";
import c2Trehstvorchatoe from "../assets/images/typeWindows/c2Trehstvorchatoe.svg";
import c3Trehstvorchatoe from "../assets/images/typeWindows/c3Trehstvorchatoe.svg";
import c4Trehstvorchatoe from "../assets/images/typeWindows/c4Trehstvorchatoe.svg";
import c5Trehstvorchatoe from "../assets/images/typeWindows/c5Trehstvorchatoe.svg";
import c6Trehstvorchatoe from "../assets/images/typeWindows/c6Trehstvorchatoe.svg";
import c7Trehstvorchatoe from "../assets/images/typeWindows/c7Trehstvorchatoe.svg";
import c8Trehstvorchatoe from "../assets/images/typeWindows/c8Trehstvorchatoe.svg";
import c9Trehstvorchatoe from "../assets/images/typeWindows/c9Trehstvorchatoe.svg";
import c10Trehstvorchatoe from "../assets/images/typeWindows/c10Trehstvorchatoe.svg";
import c1Balcondoor from "../assets/images/typeWindows/c1Balcondoor.svg";
import c2Balcondoor from "../assets/images/typeWindows/c2Balcondoor.svg";
import c3Balcondoor from "../assets/images/typeWindows/c3Balcondoor.svg";
import c4Balcondoor from "../assets/images/typeWindows/c4Balcondoor.svg";
import c5Balcondoor from "../assets/images/typeWindows/c5Balcondoor.svg";
import c6Balcondoor from "../assets/images/typeWindows/c6Balcondoor.svg";
import c7Balcondoor from "../assets/images/typeWindows/c7Balcondoor.svg";
import c8Balcondoor from "../assets/images/typeWindows/c8Balcondoor.svg";
import c9Balcondoor from "../assets/images/typeWindows/c9Balcondoor.svg";
import c10Balcondoor from "../assets/images/typeWindows/c10Balcondoor.svg";
import colorProfile_1 from "../assets/images/colorProfiles/prof-1-thumb.jpg";
import colorProfile_2 from "../assets/images/colorProfiles/prof-2-thumb.jpg";
import colorProfile_3 from "../assets/images/colorProfiles/prof-3-thumb.jpg";
import colorProfile_4 from "../assets/images/colorProfiles/prof-4-thumb.jpg";
import colorProfile_5 from "../assets/images/colorProfiles/prof-5-thumb.jpg";
import colorProfile_6 from "../assets/images/colorProfiles/prof-6-thumb.jpg";
import colorProfile_7 from "../assets/images/colorProfiles/prof-7-thumb.jpg";
import colorProfile_8 from "../assets/images/colorProfiles/prof-8-thumb.jpg";
import colorProfile_9 from "../assets/images/colorProfiles/prof-9-thumb.jpg";
import colorProfile_10 from "../assets/images/colorProfiles/prof-10-thumb.jpg";
import colorProfile_11 from "../assets/images/colorProfiles/prof-11-thumb.jpg";
import imgBG from "../assets/images/previewWindow/bg.png";
import prof_1_1 from "../assets/images/previewWindow/prof_1_1.png";
import prof_1_2 from "../assets/images/previewWindow/prof_1_2.png";
import prof_1_3 from "../assets/images/previewWindow/prof_1_3.png";
import prof_1_4 from "../assets/images/previewWindow/prof_1_4.png";
import prof_1_5 from "../assets/images/previewWindow/prof_1_5.png";
import prof_1_6 from "../assets/images/previewWindow/prof_1_6.png";
import prof_1_7 from "../assets/images/previewWindow/prof_1_7.png";
import prof_1_8 from "../assets/images/previewWindow/prof_1_8.png";
import prof_1_9 from "../assets/images/previewWindow/prof_1_9.png";
import prof_1_10 from "../assets/images/previewWindow/prof_1_10.png";
import prof_1_11 from "../assets/images/previewWindow/prof_1_11.png";
import prof_2_1 from "../assets/images/previewWindow/prof_2_1.png";
import prof_2_2 from "../assets/images/previewWindow/prof_2_2.png";
import prof_2_3 from "../assets/images/previewWindow/prof_2_3.png";
import prof_2_4 from "../assets/images/previewWindow/prof_2_4.png";
import prof_2_5 from "../assets/images/previewWindow/prof_2_5.png";
import prof_2_6 from "../assets/images/previewWindow/prof_2_6.png";
import prof_2_7 from "../assets/images/previewWindow/prof_2_7.png";
import prof_2_8 from "../assets/images/previewWindow/prof_2_8.png";
import prof_2_9 from "../assets/images/previewWindow/prof_2_9.png";
import prof_2_10 from "../assets/images/previewWindow/prof_2_10.png";
import prof_2_11 from "../assets/images/previewWindow/prof_2_11.png";
import pod from "../assets/images/previewWindow/pod-1.png";
import otk1 from "../assets/images/previewWindow/otk-1.png";
import pet1 from "../assets/images/previewWindow/pet-1.png";
import glanec from "../assets/images/previewWindow/glanec.png";

import { WindowConfig, WindowType } from "../types/windows";

const windowConfigs: Record<
  WindowType,
  {
    title: string;
    typeConfigWindow: WindowConfig[];
  }
> = {
  odnostvorchatoe: {
    title: "Одностворчатое окно",
    typeConfigWindow: [
      {
        typeConfig: "Глухое",
        image: c1Odnostvorchatoe,
        description: "Одностворчатое глухое",
        preview: [
          { img: imgBG, description: "bg" },
          {
            images: [
              { img: prof_1_1, description: "Профиль вариант 1" },
              { img: prof_1_2, description: "Профиль вариант 2" },
              { img: prof_1_3, description: "Профиль вариант 3" },
              { img: prof_1_4, description: "Профиль вариант 4" },
              { img: prof_1_5, description: "Профиль вариант 5" },
              { img: prof_1_6, description: "Профиль вариант 6" },
              { img: prof_1_7, description: "Профиль вариант 7" },
              { img: prof_1_8, description: "Профиль вариант 8" },
              { img: prof_1_9, description: "Профиль вариант 9" },
              { img: prof_1_10, description: "Профиль вариант 10" },
              { img: prof_1_11, description: "Профиль вариант 11" },
            ],
            groupId: "profile", // Идентификатор группы
            selectedIndex: 0, // По умолчанию выбран первый вариант
          },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Поворотное открывание",
        image: c2Odnostvorchatoe,
        description: "Одностворчатое с поворотным открыванием",
        preview: [
          { img: imgBG, description: "bg" },
          {
            images: [
              { img: prof_2_1, description: "Профиль вариант 1" },
              { img: prof_2_2, description: "Профиль вариант 2" },
              { img: prof_2_3, description: "Профиль вариант 3" },
              { img: prof_2_4, description: "Профиль вариант 4" },
              { img: prof_2_5, description: "Профиль вариант 5" },
              { img: prof_2_6, description: "Профиль вариант 6" },
              { img: prof_2_7, description: "Профиль вариант 7" },
              { img: prof_2_8, description: "Профиль вариант 8" },
              { img: prof_2_9, description: "Профиль вариант 9" },
              { img: prof_2_10, description: "Профиль вариант 10" },
              { img: prof_2_11, description: "Профиль вариант 11" },
            ],
            groupId: "profile", // Идентификатор группы
            selectedIndex: 0, // По умолчанию выбран первый вариант
          },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1" },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Поворотно-откидное открывание",
        image: c3Odnostvorchatoe,
        description: "Одностворчатое с поворотно-откидным открыванием",
        preview: [
          { img: imgBG, description: "bg" },
          {
            images: [
              { img: prof_2_1, description: "Профиль вариант 1" },
              { img: prof_2_2, description: "Профиль вариант 2" },
              { img: prof_2_3, description: "Профиль вариант 3" },
              { img: prof_2_4, description: "Профиль вариант 4" },
              { img: prof_2_5, description: "Профиль вариант 5" },
              { img: prof_2_6, description: "Профиль вариант 6" },
              { img: prof_2_7, description: "Профиль вариант 7" },
              { img: prof_2_8, description: "Профиль вариант 8" },
              { img: prof_2_9, description: "Профиль вариант 9" },
              { img: prof_2_10, description: "Профиль вариант 10" },
              { img: prof_2_11, description: "Профиль вариант 11" },
            ],
            groupId: "profile", // Идентификатор группы
            selectedIndex: 0, // По умолчанию выбран первый вариант
          },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1" },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
    ],
  },
  dvuhstvorchatoe: {
    title: "Двухстворчатое окно",
    typeConfigWindow: [
      {
        typeConfig: "Глухое",
        image: c1Dvuhstvorchatoe,
        description: "Двухстворчатое глухое окно",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "C глухой и поворотной створками",
        image: c2Dvuhstvorchatoe,
        description: "Двухстворчатое с глухой и поворотной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "C глухой и поворотно-откиндной створками",
        image: c3Dvuhstvorchatoe,
        description: "Двухстворчатое с глухой и поворотно-откиндной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С двумя поворотными створками",
        image: c4Dvuhstvorchatoe,
        description: "Двухстворчатое с двумя поворотными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С поворотной и поворотно-откидной створками",
        image: c5Dvuhstvorchatoe,
        description:
          "Двухстворчатое с поворотной и поворотно-откидной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С двумя поворотно-откиндыми створками",
        image: c6Dvuhstvorchatoe,
        description: "Двухстворчатое глухое окно",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
    ],
  },
  trehstvorchatoe: {
    title: "Трехстворчатое окно",
    typeConfigWindow: [
      {
        typeConfig: "Глухое",
        image: c1Trehstvorchatoe,
        description: "Трехстворчатое глухое окно",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С одной поворотной створкой",
        image: c2Trehstvorchatoe,
        description: "Трехстворчатое окно с одной поворотной створкой",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С одной поворотно-откидной створкой",
        image: c3Trehstvorchatoe,
        description: "Трехстворчатое окно С одной поворотно-откидной створкой",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С двумя поворотными створками",
        image: c4Trehstvorchatoe,
        description: "Трехстворчатое окно с двумя поворотными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С одной поворотной и одной поворотно-откидной створками",
        image: c5Trehstvorchatoe,
        description:
          "Трехстворчатое окно с одной поворотной и одной поворотно-откидной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С двумя поворотно-откидными створками",
        image: c6Trehstvorchatoe,
        description:
          "Трехстворчатое окно с двумя поворотно-откидными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С тремя поворотными створками",
        image: c7Trehstvorchatoe,
        description: "Трехстворчатое окно с тремя поворотными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С одной поворотно-откидной и двумя поворотными створками",
        image: c8Trehstvorchatoe,
        description:
          "Трехстворчатое окно с одной поворотно-откидной и двумя поворотными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С двумя поворотно-откиндыми и одной поворотной створками",
        image: c9Trehstvorchatoe,
        description:
          "Трехстворчатое окно с двумя поворотно-откиндыми и одной поворотной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "С тремя поворотно-откидными створками",
        image: c10Trehstvorchatoe,
        description:
          "Трехстворчатое окно с тремя поворотно-откидными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
    ],
  },
  balkondoor: {
    title: "Балконная дверь",
    typeConfigWindow: [
      {
        typeConfig: "Одинарная поворотная с сендвичем",
        image: c1Balcondoor,
        description: "Одинарная поворотная с сендвичем",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Одинарная поворотно-откидная с сендвичем",
        image: c2Balcondoor,
        description: "ТОдинарная поворотно-откидная с сендвичем",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Одинарная поворотная полностью стеклянная",
        image: c3Balcondoor,
        description: "Одинарная поворотная полностью стеклянная",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Одинарная поворотно-откидная полностью стеклянная",
        image: c4Balcondoor,
        description: "Одинарная поворотно-откидная полностью стеклянная",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig:
          "Двойная с сендвичем с поворотной и поворотно-откидной створками",
        image: c5Balcondoor,
        description:
          "Двойная с сендвичем с поворотной и поворотно-откидной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Двойная с сендвичем с двумя повортными створками",
        image: c6Balcondoor,
        description: "Двойная с сендвичем с двумя повортными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Двойная с сендвичем с двумя повортно-откидными створками",
        image: c7Balcondoor,
        description: "Двойная с сендвичем с двумя повортно-откидными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig:
          "Двойная стеклянная с поворотной и поворотно-откидной створками",
        image: c8Balcondoor,
        description:
          "Двойная стеклянная с поворотной и поворотно-откидной створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Двойная стеклянная с двумя повортными створками",
        image: c9Balcondoor,
        description: "Двойная стеклянная с двумя повортными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
      {
        typeConfig: "Двойная стеклянная с двумя повортно-откидными створками",
        image: c10Balcondoor,
        description: "Двойная стеклянная с двумя повортно-откидными створками",
        preview: [
          { img: imgBG, description: "bg" },
          { img: prof_1_1, description: "prof_1_1", hidden: false },
          { img: prof_2_1, description: "prof_2_1", hidden: true },
          { img: pod, description: "pod" },
          { img: otk1, description: "okt-1" },
          { img: pet1, description: "pet-1", hidden: true },
          { img: glanec, description: "glanec", hidden: true },
        ],
        profiles: [
          { img: colorProfile_1, description: "Белый" },
          { img: colorProfile_2, description: "Выбеленный дуб" },
          { img: colorProfile_3, description: "Песочный дуб" },
          { img: colorProfile_4, description: "Золотой дуб" },
          { img: colorProfile_5, description: "Орех V" },
          { img: colorProfile_6, description: "Темный дуб" },
          { img: colorProfile_7, description: "Морёный дуб" },
          { img: colorProfile_8, description: "Антрацитово-серый" },
          { img: colorProfile_9, description: "Махагон" },
          { img: colorProfile_10, description: "Чёрная вишня" },
          { img: colorProfile_11, description: "Шоколадно-коричневый" },
        ],
      },
    ],
  },
};

export default windowConfigs;
