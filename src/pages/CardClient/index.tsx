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
import {
  deleteOrder,
  getAllOrdersByIdClient,
} from "../../redux/orders/orders-operations";
import { orderSelectorOrders } from "../../redux/orders/orders-selectors";
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
  const ordersSelector = useSelector(orderSelectorOrders);
  const [isUpdateClientModal, setIsUpdateClientModal] = useState(false);
  const clientSelectorNotificatiion = useSelector(clientSelectorMessage);
  const isLoadingSelector = useSelector(clientSelectorLoading);
  const [question, setQuestion] = useState("");
  const [func, setFunc] = useState<() => void>(() => {});

  const { name, lastName, createdAt, phone, email } = clientSelector;

  useEffect(() => {
    if (id) {
      dispatch(getClientByID(id));
    }
  }, [id]);

  useEffect(() => {
    if (id) dispatch(getAllOrdersByIdClient(id));
  }, []);

  useEffect(() => {
    if (clientSelectorNotificatiion) navigation("/office");
  }, [clientSelectorNotificatiion]);

  const handleDeleteOrder = (orderId: string) => {
    dispatch(deleteOrder(orderId));
  };

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
                setQuestion(
                  "Карточка клиента и его заказы будут удалены с базы данных",
                );
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
          {ordersSelector.length > 0 && (
            <SList>
              {ordersSelector.map((order: OrderType) => (
                <SItem>
                  <SButton
                    onClick={() => {
                      if (order.id) {
                        setQuestion("Заказ будет удален");

                        setFunc(() => () => {
                          if (order.id) handleDeleteOrder(order.id);
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
          {question && (
            <Confirm
              question={question}
              onConfirm={(confirmed) => {
                if (confirmed) {
                  func();
                  setFunc(() => {});
                }
                setQuestion("");
              }}
            />
          )}
        </SCardClient>
      )}
    </>
  );
};

export default CardClient;
