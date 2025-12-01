import { Container } from "../Container";
import { SCalc, STitle } from "./styles";

export const Calc: React.FC = () => {
  return (
    <SCalc>
      <Container>
        <STitle>Калькулятор стоимости</STitle>
      </Container>
    </SCalc>
  );
};
