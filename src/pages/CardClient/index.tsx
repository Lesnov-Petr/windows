import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import {
  SButton,
  SCardClient,
  SIcon,
  SInfo,
  SItem,
  SLabel,
  SList,
  STitle,
  SValue,
  SWrapper,
  SWrapperInfo,
} from "./styles";
import {
  deleteClient,
  getClientByID,
} from "../../redux/clients/client-operation";
import { Loader } from "../../Components/Loader";
import {
  clientSelectorClient,
  clientSelectorLoading,
  clientSelectorMessage,
} from "../../redux/clients/client-selectors";
import { OrderType } from "../../types/orderType";
import { ToolHint } from "../../Components/ToolHint";
import { FormUpdateClient } from "../../Components/FormUpdateClient";
import { Confirm } from "../../Components/Confirm/Index";
import { deleteOrder } from "../../redux/orders/orders-operations";
import { orderSelectorMessage } from "../../redux/orders/orders-selectors";
import iconPhone from "../../assets/images/phone.png";
import iconEmail from "../../assets/images/email.png";
import iconUpdate from "../../assets/images/update.png";
import iconDelete from "../../assets/images/delete.png";
import Modal from "../../Components/Modal";

const CardClient: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { id } = useParams<{ id: string }>();
  const clientSelector = useSelector(clientSelectorClient);
  const [listOrders, setListOrders] = useState<OrderType[]>([]);
  const [isUpdateClientModal, setIsUpdateClientModal] = useState(false);
  const clientSelectorNotificatiion = useSelector(clientSelectorMessage);
  const isLoadingSelector = useSelector(clientSelectorLoading);
  const [isConfirm, setConfirm] = useState({
    id: "",
    confirm: false,
    question: "",
  });

  const { name, lastName, createdAt, phone, email } = clientSelector;

  useEffect(() => {
    if (id) {
      dispatch(getClientByID(id));
    }
  }, [id]);

  useEffect(() => {
    if (clientSelector.orders) setListOrders([...clientSelector.orders]);
  }, [clientSelector.orders]);

  useEffect(() => {
    if (clientSelectorNotificatiion) navigation("/office");
  }, [clientSelectorNotificatiion]);

  useEffect(() => {
    if (isConfirm.confirm) {
      if (isConfirm.id === id) {
        dispatch(deleteClient(isConfirm.id));
      } else {
        dispatch(deleteOrder(isConfirm.id));
        setListOrders((prev) =>
          prev.filter((order) => order.id !== isConfirm.id),
        );
      }
    }
    setConfirm({ id: "", confirm: false, question: "" });
  }, [isConfirm.confirm]);

  return (
    <>
      {isLoadingSelector ? (
        <Loader />
      ) : (
        <SCardClient>
          <SWrapper>
            <STitle>Карточка клиента</STitle>
            <SButton onClick={() => setIsUpdateClientModal(true)}>
              <SIcon src={iconUpdate} alt="обновить" />
              <ToolHint>обновить данные клиента</ToolHint>
            </SButton>
            <SButton
              onClick={() => {
                if (id) {
                  setConfirm({
                    id: id,
                    confirm: false,
                    question:
                      "Карточка клиента и его заказы будут удалены с базы данных",
                  });
                }
              }}
            >
              <SIcon src={iconDelete} alt="удаление" />
              <ToolHint>Удалить карточку клиента</ToolHint>
            </SButton>
          </SWrapper>

          <SInfo>
            <SWrapperInfo>
              <SLabel>Имя: </SLabel>
              <SValue>{name}</SValue>
            </SWrapperInfo>

            <SWrapperInfo>
              <SLabel>Фамилия: </SLabel>
              <SValue>{lastName || "Не указана"}</SValue>
            </SWrapperInfo>

            <SWrapperInfo>
              <SLabel>Дата регистрации: </SLabel>
              <SValue>
                {createdAt && new Date(createdAt).toLocaleDateString("ru-RU")}
              </SValue>
            </SWrapperInfo>

            <SWrapperInfo>
              <SIcon src={iconPhone} alt="телефон" />
              <SValue>{phone}</SValue>
            </SWrapperInfo>

            <SWrapperInfo>
              <SIcon src={iconEmail} alt="почта" />
              <SValue>{email || "Не указан"}</SValue>
            </SWrapperInfo>
          </SInfo>
          {listOrders.length > 0 && (
            <SList>
              {listOrders.map((order: OrderType) => (
                <SItem>
                  <SButton
                    onClick={() => {
                      if (order.id) {
                        setConfirm({
                          id: order.id,
                          confirm: false,
                          question: "Заказ будет удален",
                        });
                      }
                    }}
                  >
                    <SIcon src={iconDelete} alt="удалить" />
                    <ToolHint>Удалить заказ</ToolHint>
                  </SButton>

                  <div>
                    <SLabel>Имя: </SLabel>
                    <SValue>{order?.name}</SValue>
                  </div>
                  <div>
                    <SLabel>Комментарий: </SLabel>
                    <SValue>{order?.description}</SValue>
                  </div>

                  <div>
                    <SLabel>Адрес: </SLabel>
                    <SValue>{order?.address || "Не указан"}</SValue>
                  </div>

                  <div>
                    <SLabel>Дата заказа: </SLabel>
                    <SValue>
                      {order?.createdAt &&
                        new Date(order.createdAt).toLocaleDateString("ru-RU")}
                    </SValue>
                  </div>
                </SItem>
              ))}
            </SList>
          )}
          <Modal
            isOpen={isUpdateClientModal}
            onClose={() => setIsUpdateClientModal(false)}
          >
            <FormUpdateClient
              data={clientSelector}
              onClose={() => setIsUpdateClientModal(false)}
            />
          </Modal>
          {isConfirm.question && (
            <Confirm confirm={isConfirm} onConfirm={setConfirm} />
          )}
        </SCardClient>
      )}
    </>
  );
};

export default CardClient;
