import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { reducer as reducerAuth } from "./auth/auth-reducer";
import { reducer as reducerClient } from "./clients/client-reducer";
import { reducer as reducerOrders } from "./orders/orders-reducer";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "authToken",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, reducerAuth),
    client: reducerClient,
    order: reducerOrders,
  },
  devTools: process.env.NODE_ENV === "development",
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
