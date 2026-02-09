import React, { useEffect, useState } from "react";
import { Price } from "./Price";
import { SOffice, STabs, STab, STabContent } from "./styles";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { SList, SItem, SText, SInfo } from "./styles";
import { SWrapperInfo } from "./styles";
import { getAllClients } from "../../redux/clients/client-operation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { ClientType } from "../../types/client";
import { Loader } from "../../Components/Loader";
import { getAllOrders } from "../../redux/orders/orders-operations";
import { OrderType } from "../../types/orderType";
import { useNavigate } from "react-router-dom";
import IconPhone from "../../assets/images/phone.png";
import {
  orderSelectorLoading,
  orderSelectorOrders,
} from "../../redux/orders/orders-selectors";
import {
  clientSelectorClients,
  clientSelectorLoading,
} from "../../redux/clients/client-selectors";

const Office: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [activeTab, setActiveTab] = useState<"clients" | "orders" | "price">(
    "clients",
  );
  const selectorClients = useSelector(clientSelectorClients);
  const selectorOrders = useSelector(orderSelectorOrders);
  const isLoadingClients = useSelector(clientSelectorLoading);
  const isLoadingOrders = useSelector(orderSelectorLoading);

  useEffect(() => {
    dispatch(getAllClients());
    dispatch(getAllOrders());
  }, []);
  return (
    <SOffice>
      <h1>Dashboard</h1>

      {/* Панель вкладок */}
      <STabs>
        <STab
          $active={activeTab === "clients"}
          onClick={() => setActiveTab("clients")}
        >
          Клиенты
        </STab>
        <STab
          $active={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        >
          Заказы
        </STab>
        <STab
          $active={activeTab === "price"}
          onClick={() => setActiveTab("price")}
        >
          ПрайсЛист
        </STab>
      </STabs>

      <STabContent>
        {isLoadingClients ? (
          <Loader />
        ) : (
          activeTab === "clients" && (
            <SList>
              {selectorClients.map((client: ClientType) => (
                <SItem
                  key={client.id}
                  onClick={() => navigation(`/office/${client.id}`)}
                >
                  <SText>{client.name}</SText>
                  <SWrapperInfo>
                    <ButtonIcon
                      src={IconPhone}
                      alt="phone"
                      toolHint="Телефон клиента"
                    />
                    <SInfo>{client.phone}</SInfo>
                  </SWrapperInfo>
                </SItem>
              ))}
            </SList>
          )
        )}

        {isLoadingOrders ? (
          <Loader />
        ) : (
          activeTab === "orders" && (
            <SList>
              {selectorOrders.map((order: OrderType) => (
                <SItem key={order.id}>
                  <SText>{order.name}</SText>
                  <SWrapperInfo>
                    <ButtonIcon
                      src={IconPhone}
                      alt="phone"
                      toolHint="Телефон клиента"
                    />
                    <SInfo>{order.phone}</SInfo>
                  </SWrapperInfo>
                </SItem>
              ))}
            </SList>
          )
        )}

        {activeTab === "price" && <Price />}
      </STabContent>
    </SOffice>
  );
};

export default Office;
