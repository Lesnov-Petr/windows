// Office.tsx
import React, { useEffect, useState } from "react";
import {
  SOffice,
  STabs,
  STab,
  STabContent,
  SIcon,
  SWrapperInfo,
} from "./styles";
import { SList, SItem, SName, SInfo } from "./styles";
import {
  clientSelectorClients,
  clientSelectorLoading,
} from "../../redux/clients/client-selectors";
import { getAllClients } from "../../redux/clients/client-operation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { ClientType } from "../../types/client";
import { Loader } from "../../Components/Loader";
import {
  orderSelectorLoading,
  orderSelectorOrders,
} from "../../redux/orders/orders-selectors";
import { getAllOrders } from "../../redux/orders/orders-operations";
import { OrderType } from "../../types/orderType";
import { useNavigate } from "react-router-dom";
import iconPhone from "../../assets/images/phone.png";

const Office: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [activeTab, setActiveTab] = useState<"clients" | "orders">("clients");
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
                  <SName>{client.name}</SName>
                  <SWrapperInfo>
                    <SIcon src={iconPhone} /> <SInfo>{client.phone}</SInfo>
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
                  <SName>{order.name}</SName>
                  <SWrapperInfo>
                    <SIcon src={iconPhone} /> <SInfo>{order.phone}</SInfo>
                  </SWrapperInfo>
                </SItem>
              ))}
            </SList>
          )
        )}
      </STabContent>
    </SOffice>
  );
};

export default Office;
