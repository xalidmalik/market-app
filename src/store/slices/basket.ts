import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketStateType, BasketType } from "store/types/basket";

const initialState: BasketStateType = {
  data: [],
  total: 0,
  isLoading: false,
  error: {},
};

export const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addToBasketSaga: (_, action: PayloadAction<Array<BasketType>>) => {},
    incrementBasketItemSaga: (
      _,
      action: PayloadAction<Array<BasketType>>
    ) => {},
    decrementBasketItemSaga: (
      _,
      action: PayloadAction<Array<BasketType>>
    ) => {},
    setBasket: (state, action: PayloadAction<Array<BasketType>>) => {
      state.data = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setBasketLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setBasketError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addToBasketSaga,
  setBasket,
  setBasketLoading,
  setBasketError,
  setTotal,
  incrementBasketItemSaga,
  decrementBasketItemSaga,
} = BasketSlice.actions;

export default BasketSlice.reducer;
