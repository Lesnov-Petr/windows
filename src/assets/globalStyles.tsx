import { createGlobalStyle, css } from "styled-components";
import "./fonts.css";
import { title } from "process";

export const cubic = "cubic-bezier(0.4, 0, 0.2, 1);";
export const ms = "300ms";

//======================== Размеры девайса ===============================
const size = {
  mobileS: "320px", // Очень маленькие смартфоны (до 320px)
  mobileM: "375px", // iPhone 8, SE (2020)
  mobileL: "767px", // Большие смартфоны (iPhone 12/13/14 Pro Max)
  tabletS: "768px", // Планшеты в портретной ориентации (iPad, Android)
  tabletL: "1024px", // Планшеты в альбомной ориентации
  laptopS: "1024px", // Ноутбуки/нетбуки (11–13")
  laptopL: "1440px", // Ноутбуки (14–16")
  desktopS: "1680px", // Десктопы (21–24")
  desktopM: "1920px", // Full HD (24–27")
  desktopL: "2560px", // 2K/4K мониторы
};

export const device = {
  mobile: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tabletS}) and (max-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptopS}) and (max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktopS})`,
};

//======================== Цвета ========================================
export const color = {
  text: "#413b32",
  textAccent: "#5c7560",
  textDarkGreen: "#085237",
  accent: "#e1eedc",
  accent_2: "#1ad3d3",
  accentOrange: "#ff6b35",
  accentCoral: "#E63946",
  hoverAccent: "#a8c79a",
  mark: "#7f8c8d",
  logo: "#073826",
  bg: "#fcf4e6",
  bgCards: "#e1eedc",
  disable: "#faf8ea",
  lightAccent: "#6BA1FF",
  white: "#f8f1f1",
};

//======================== Шрифты ========================================
const fontsFamaly = {
  logo: "Amaranth",
  standard: "Poppins",
  title: "Luckiest Guy",
};

const sizeFonts = {
  mobile: {
    standard: "14px", // Базовый текст (читаемость на малых экранах)
    title: "24px", // Заголовки H1–H2
    subTitle: "18px", // Подзаголовки H3–H4
    logo: "32px", // Логотип/брендовый элемент
  },
  tablet: {
    standard: "16px", // Комфортное чтение на планшетах
    title: "28px", // Увеличенные заголовки
    subTitle: "20px", // Подзаголовки с запасом читаемости
    logo: "48px", // Визуально заметный логотип
  },
  laptop: {
    standard: "16px", // Стандартный размер для ноутбуков
    title: "32px", // Выразительные заголовки
    subTitle: "22px", // Подзаголовки с иерархией
    logo: "56px", // Акцентный логотип
  },
  desktop: {
    standard: "18px", // Улучшенная читаемость на больших экранах
    title: "36px", // Крупные заголовки для десктопов
    subTitle: "24px", // Подзаголовки с визуальным весом
    logo: "64px", // Монументальный логотип
  },
};

//======================== MIXIN ========================================
export const fontMixin = {
  logo: css`
    font-family: ${fontsFamaly.logo};
    font-size: ${sizeFonts.desktop.logo};
    font-weight: 400;
    line-height: 1.21;
    color: white;

    @media ${device.tablet} {
      font-size: ${sizeFonts.tablet.logo};
    }
    @media ${device.mobile} {
      font-size: ${sizeFonts.mobile.logo};
    }
    @media ${device.laptop} {
      font-size: ${sizeFonts.laptop.logo};
    }
  `,

  standard: css`
    font-family: ${fontsFamaly.standard} sans-serif;
    font-size: ${sizeFonts.desktop.standard};
    font-weight: 400;
    line-height: 1;

    @media ${device.tablet} {
      font-size: ${sizeFonts.tablet.standard};
    }
    @media ${device.mobile} {
      font-size: ${sizeFonts.mobile.standard};
    }
    @media ${device.laptop} {
      font-size: ${sizeFonts.laptop.standard};
    }
  `,

  title: css`
    font-family: ${fontsFamaly.title};
    font-size: ${sizeFonts.desktop.title};
    font-weight: 400;
    line-height: 1.21;
    letter-spacing: 1.5px;

    @media ${device.tablet} {
      font-size: ${sizeFonts.tablet.title};
      letter-spacing: 1px;
    }
    @media ${device.mobile} {
      font-size: ${sizeFonts.mobile.title};
      letter-spacing: 0.5px;
    }
    @media ${device.laptop} {
      font-size: ${sizeFonts.laptop.title};
    }
  `,

  subTitle: css`
    font-family: ${fontsFamaly.standard};
    font-size: ${sizeFonts.desktop.subTitle};
    font-weight: 400;
    letter-spacing: 2px;

    @media ${device.tablet} {
      font-size: ${sizeFonts.tablet.subTitle};
      letter-spacing: 1.5px;
    }
    @media ${device.mobile} {
      font-size: ${sizeFonts.mobile.subTitle};
      letter-spacing: 1px;
    }
    @media ${device.laptop} {
      font-size: ${sizeFonts.laptop.subTitle};
    }
  `,
};

// === BTN MIXIN ===
export const btnMixin = {
  accent: css`
    ${fontMixin.standard} /* Используем готовый шрифт из fontMixin */
    color: ${color.text};
    background-color: ${color.accent};
    padding: 15px 15px;
    border: 2px solid transparent;
    box-shadow: 0px 4px 10px ${color.accent};
    border-radius: 8px;
    transition: all ${ms} ${cubic};
    outline: 1px solid #1ad3d3;
    position: relative;
    overflow: hidden;

    @media ${device.mobile} {
      padding: 10px 10px;
    }
    @media ${device.tablet} {
      padding: 14px 14px;
    }
    @media ${device.laptop} {
      padding: 16px 16px;
    }

    /* Градиентный эффект при наведении */
    &:hover:not([disabled]) {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(255, 255, 255, 0.1) 100%
        );
        z-index: 0;
        animation: gradientFlow 1.5s ease infinite;
      }

      span {
        position: relative;
        z-index: 1;
      }
    }

    @keyframes gradientFlow {
      to {
        transform: translateX(100%);
      }
    }

    &:disabled {
      background-color: ${color.disable};
      box-shadow: 0px 4px 10px rgba(102, 102, 102, 0.5);
    }
  `,
};

// === INPUT MIXIN ===
export const inputMixin = {
  standard: css`
    ${fontMixin.standard}
    box-sizing: border-box;
    margin-bottom: 20px;
    height: 40px;
    width: 100%;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: #fff;
    vertical-align: top;
    transition: outline-color ${ms} ${cubic};
    box-shadow: 1px 1px 0px 0px rgba(34, 60, 80, 0.2);

    &:focus {
      outline: 2px solid ${color.accent};
    }
    &:hover {
      background-color: ${color.accent};
    }
    &:last-child {
      margin-bottom: 0;
    }

    @media ${device.mobile} {
      height: 36px;
      padding-left: 12px;
    }
    @media ${device.tablet} {
      height: 38px;
      padding-left: 14px;
    }
    @media ${device.laptop} {
      height: 40px;
      padding-left: 16px;
    }
  `,
};

// === TEXTAREA MIXIN ===
export const textareaMixin = {
  standard: css`
    ${fontMixin.standard}
    box-sizing: border-box;
    margin-bottom: 20px;
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: #fff;
    vertical-align: top;
    transition: outline-color ${ms} ${cubic};
    resize: vertical;
    box-shadow: 1px 1px 0px 0px rgba(34, 60, 80, 0.2);

    &:focus {
      outline: 2px solid ${color.accent};
      background-color: #fff;
    }

    &:not(:focus):hover {
      background-color: ${color.accent};
    }

    &:last-child {
      margin-bottom: 0;
    }

    &::placeholder {
      color: ${color.text};
      opacity: 1;
    }

    @media ${device.mobile} {
      padding: 10px 12px;
      margin-bottom: 16px;
    }

    @media ${device.tablet} {
      padding: 11px 14px;
      margin-bottom: 18px;
    }
  `,
};

//======================== Глобальные стили ===============================
export const GlobalStyle = createGlobalStyle`
	body {
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		font-family: Philosopher, sans-serif;
		font-size: 1.6vmin;
		font-weight: 700;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${color.text};
		letter-spacing: 0.1px;
		/* overflow: hidden; */
		transition: background-color 500ms ease-in-out;
		background-color: ${color.bg};
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	ol,
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}


	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd,
	hr {
		margin: 0;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		display: block;
	}

	article>*+* {
		margin-top: 1em;
	}

	input,
	button,
	textarea,
	select {
		border: none;
		outline: none;
		padding: 0;
		font: inherit;
	}

	button {
		cursor: pointer;
		background: none;
		>*{
			pointer-events: none;
		}
	}

	svg {
		width: 100%; 
		height: 100%;
	}

	.g-recaptcha {
		margin-top: 1vh;
	}

  
`;
