import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { ProductSlice } from "store/slices/product";
import { rootSaga } from "./sagas/saga";
import { BasketSlice } from "./slices/basket";
import { BrandSlice } from "./slices/brand";
import { TagSlice } from "./slices/tag";
import { BasketStateType } from "./types/basket";
import { BrandStateType } from "./types/brand";
import { ProductStateType } from "./types/product";
import { TagStateType } from "./types/tags";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  loggerMiddleware,
];

export interface IState {
  products: ProductStateType;
  tags: TagStateType;
  brands: BrandStateType;
  basket: BasketStateType;
}

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    tags: TagSlice.reducer,
    brands: BrandSlice.reducer,
    basket: BasketSlice.reducer,
  },
  middleware,
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
