import { createGlobalStyle, css } from "styled-components";

export const cubic = "cubic-bezier(0.4, 0, 0.2, 1);";
export const ms = "300ms";

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
  bg: "#faf9f1",
  disable: "#faf8ea",
  lightAccent: "#6BA1FF",
};

//======================== Шрифты ========================================
const fontsFamaly = {
  logo: "Amaranth",
  standart: "Poppins",
};
const sizeFonts = {
  mobile: { standart: "12px" },
  desktop: {
    standart: "14px",
    title: "22px",
    logo: "64px",
  },
  table: {
    standart: "14px",
    title: "22px",
    logo: "48px",
  },
};
//======================== MIXIN ========================================
export const fontMixin = {
  logo: css`
    font-family: ${fontsFamaly.logo};
    font-size: ${sizeFonts.desktop.logo};
    font-weight: ${400};
    line-height: ${1.21};
    color: white;
  `,
  standart: css`
    font-family: ${fontsFamaly.standart};
    font-size: ${sizeFonts.desktop.standart};
    font-weight: ${400};
    line-height: ${1};
  `,
  title: css`
    font-family: ${fontsFamaly.standart};
    font-size: ${sizeFonts.desktop.title};
    font-weight: ${400};
    line-height: ${1.21};
    letter-spacing: ${"1.5px"};
  `,
  subTitle: css`
    font-family: ${fontsFamaly.standart};
    font-size: ${sizeFonts.desktop.title};
    font-weight: ${400};
    letter-spacing: ${"2px"};
  `,
};

export const btnMixin = {
  accent: css`
    ${fontMixin.standart}
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

export const inputMixin = {
  standart: css`
    ${fontMixin.standart}
    box-sizing: border-box;
    margin-bottom: 20px;
    height: 40px;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: #fff;
    vertical-align: top;
    transition: outline-color ${ms} ${cubic};

    /* Для многострочного текста */
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;

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
  `,
};

//======================== Размеры девайса ===============================
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "767px",
  tabletS: "768px",
  tabletL: "1279px",
  laptopS: "1280px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktopS: "1680px",
  desktopM: "1920px",
  desktopL: "2560px",
};

export const device = {
  mobile: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tabletS}) and (max-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptopS}) and (max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktopS})`,
};

type DeviceType = keyof typeof device;

export const media = (
  deviceType: DeviceType,
  styles: TemplateStringsArray | string
) => {
  return `@media ${device[deviceType]} { ${styles} }`;
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
