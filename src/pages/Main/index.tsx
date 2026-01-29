import { useState } from "react";
import { Description } from "../../Components/Description";
import { Calc } from "../../Components/Calc";
import { SMain } from "./styles";
import Hero from "../../Components/Hero";
import { Gallery } from "../../Components/Gallery";
import { ButtonCall } from "../../Components/ButtonCall";
import Modal from "../../Components/Modal";
import FormContact from "../../Components/Form";

const Main: React.FC<{}> = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <SMain>
      <Hero />
      <Description />
      <Calc />
      {/* <Gallery /> */}
      <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
        <ButtonCall onClick={handleClick} floating={true} hideOnTop={true} />
      </div>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={"Заказать звонок"}
      >
        <FormContact onClick={handleClick} />
      </Modal>
    </SMain>
  );
};

export default Main;
