import logoFirst from "../../assets/images/logo.svg";
import { SLink, SLogo, SLogoImage } from "./styles";

interface LogoProps {
  style?: React.CSSProperties;
}

export const LogoFirst: React.FC<LogoProps> = ({ style }) => {
  return (
    <SLogo>
      <SLink href="/">
        <SLogoImage src={logoFirst} alt="Logo" style={style} />
      </SLink>
    </SLogo>
  );
};

// export const LogoSecond: React.FC<LogoProps> = ({ style }) => {
//   return (
//     <SLogo>
//       <SLogoImage src={logoSecond} alt="Logo" style={style} />
//     </SLogo>
//   );
// };
