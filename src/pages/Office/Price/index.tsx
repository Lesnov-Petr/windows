import { PriceType } from "../../../types/price";
import {
  SBtn,
  SForm,
  SPrice,
  SList,
  SItem,
  SText,
  SBoxIcon,
  SBtnLoading,
} from "./styles";
import { ButtonIcon } from "../../../Components/ButtonIcon";
import {
  priceSelectorLoading,
  priceSelectorPrices,
} from "../../../redux/price/price-selectors";
import { useSelector } from "react-redux";
import { Loader } from "../../../Components/Loader";
import { useEffect, useRef, useState } from "react";
import Modal from "../../../Components/Modal";
import { Input } from "../../../Components/Input";
import { useAppDispatch } from "../../../hooks";
import { toast } from "react-toastify";
import {
  createPrice,
  deletePrice,
  getPriceList,
  updatePrice,
} from "../../../redux/price/price-operations";
import IconUpdate from "../../../assets/images/update.png";
import IconDelete from "../../../assets/images/delete.png";
import { Confirm } from "../../../Components/Confirm/Index";
import { ReactComponent as IconClip } from "../../../assets/images/iconClip.svg";
import { ToolHint } from "../../../Components/ToolHint";

export const Price: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectorPrices = useSelector(priceSelectorPrices);
  const isLoadingPrice = useSelector(priceSelectorLoading);
  const [openModalAddPrice, setOpenModalAddPrice] = useState(false);
  const [openModalUpdatePrice, setOpenModalUpdatePrice] = useState(false);
  const [question, setQuestion] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<PriceType>({
    id: "",
    name: "",
    price: "",
    image: undefined,
  });

  useEffect(() => {
    dispatch(getPriceList());
  }, []);

  if (isLoadingPrice) <Loader />;

  const handleModalAddPrice = () => {
    setOpenModalAddPrice(!openModalAddPrice);
    if (!openModalAddPrice) setFormData({ id: "", name: "", price: "" });
  };

  const handleModalUpdatePrice = () => {
    setOpenModalUpdatePrice(!openModalUpdatePrice);
    if (!openModalUpdatePrice) setFormData({ id: "", name: "", price: "" });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, price, image } = formData;
    if (!name) return toast.error("Укажите наименование услуги");
    if (!price) return toast.error("Укажите цену за услугу");

    const newData = { name, price, image };
    const data = await dispatch(createPrice(newData));
    if (!data) return;

    setFormData({ id: "", name: "", price: "" });
    setOpenModalAddPrice(false);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const { id, name, price, image } = formData;
    const stringPrice = String(price);

    const updatedData = { name, price: stringPrice, image };
    const data = await dispatch(updatePrice(id, updatedData));
    if (!data) return;
    setOpenModalUpdatePrice(false);
    setFormData({ id: "", name: "", price: "", image: undefined });
  };
  const handleDelete = () => {
    dispatch(deletePrice(formData.id));
    setFormData({ id: "", name: "", price: "", image: undefined });
  };

  const handleLoadPictures = () => {
    fileInputRef.current?.click();
  };

  // Обрабатывает выбранный файл
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFormData((prev) => ({ ...prev, image: file }));
  };
  return (
    <SPrice>
      <SBtn onClick={handleModalAddPrice}>Добавить услугу</SBtn>
      <SList>
        {selectorPrices.map((price: PriceType) => (
          <SItem key={price.id}>
            <SText>{price.name}</SText>
            <SText>
              {price.price} <span>₽</span>
            </SText>
            <SBoxIcon>
              <ButtonIcon
                src={IconUpdate}
                alt="update"
                toolHint="Обновить услугу"
                onClick={() => {
                  handleModalUpdatePrice();
                  setFormData({ ...price });
                }}
              />
              <ButtonIcon
                src={IconDelete}
                alt="delete"
                toolHint="Удалить услугу"
                onClick={() => {
                  setQuestion(`${price.name} - удалить эту услугу?`);
                  setFormData({ ...formData, id: price.id, name: price.name });
                }}
              />
            </SBoxIcon>
          </SItem>
        ))}
      </SList>
      {question && (
        <Confirm
          question={question}
          onConfirm={(confirmed) => {
            if (confirmed) handleDelete();
            setQuestion("");
          }}
        />
      )}
      <Modal
        isOpen={openModalAddPrice}
        onClose={handleModalAddPrice}
        title="Добавить услугу"
      >
        <SForm onSubmit={handleSubmit}>
          <Input
            name="name"
            value={formData.name}
            placeholder="Наименование услуги"
            onChange={handleChange}
          />
          <Input
            name="price"
            value={String(formData.price)}
            placeholder="Цена"
            onChange={handleChange}
          />
          <SBtnLoading type="button" onClick={handleLoadPictures}>
            <IconClip style={{ width: "25px", height: "25px" }} />
            <ToolHint>Загрузить картинку</ToolHint>
          </SBtnLoading>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*" // Только изображения
            onChange={handleFileChange}
            style={{ display: "none" }} // Скрываем
          />

          <SBtn>Добавить услугу</SBtn>
        </SForm>
      </Modal>

      <Modal
        isOpen={openModalUpdatePrice}
        onClose={handleModalUpdatePrice}
        title="Обновить услугу"
      >
        <SForm onSubmit={handleUpdate}>
          <Input
            name="name"
            value={formData.name}
            placeholder="Наименование услуги"
            onChange={handleChange}
          />
          <Input
            name="price"
            value={formData.price}
            placeholder="Цена"
            onChange={handleChange}
          />
          <SBtnLoading type="button" onClick={handleLoadPictures}>
            <IconClip style={{ width: "25px", height: "25px" }} />
            <ToolHint>Загрузить картинку</ToolHint>
          </SBtnLoading>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*" // Только изображения
            onChange={handleFileChange}
            style={{ display: "none" }} // Скрываем
          />
          <SBtn>Обновить</SBtn>
        </SForm>
      </Modal>
    </SPrice>
  );
};
