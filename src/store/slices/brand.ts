import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrandStateType } from "store/types/brand";
import { BrandManipulatedStateType } from "./../types/brand";

const initialState: BrandStateType = {
  data: [],
  isLoading: false,
  error: {},
};

export const BrandSlice = createSlice({
  name: "Brand",
  initialState,
  reducers: {
    setBrandData: (
      state,
      action: PayloadAction<Array<BrandManipulatedStateType>>
    ) => {
      state.data = action.payload;
    },
    setBrandLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setBrandError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setBrandData,
  setBrandLoading,
  setBrandError,
} = BrandSlice.actions;
