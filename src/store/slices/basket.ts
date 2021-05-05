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
    setAddBasket: (state, action: PayloadAction<Array<BasketType>>) => {
      state.data = action.payload;
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
  setAddBasket,
  setBasketLoading,
  setBasketError,
} = BasketSlice.actions;

export default BasketSlice.reducer;
