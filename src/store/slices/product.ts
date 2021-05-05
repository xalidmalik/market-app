import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InfoType,
  ItemType,
  ProductStateType,
  ProductType,
} from "store/types/product";
import { PaginationType } from "./../types/product";

const initialState: ProductStateType = {
  data: [],
  info: {
    total_data: 0,
    total_page: 0,
  },
  pagination: {
    _page: 1,
    _limit: 16,
    _sort: "price",
    _order: "asc",
  },
  filtering: {
    brands: [],
    tags: [],
    product_type: "mug",
  },
  isLoading: false,
  error: {},
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.pagination = action.payload;
    },
    setProductData: (state, action: PayloadAction<Array<ProductType>>) => {
      state.data = action.payload;
    },
    setProductErrors: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setInfo: (state, action: PayloadAction<InfoType>) => {
      state.info = action.payload;
    },
    setPagination: (state, action: PayloadAction<PaginationType>) => {
      state.pagination = action.payload;
    },
    setBrand: (state, action: PayloadAction<Array<string>>) => {
      state.filtering.brands = action.payload;
    },
    setTag: (state, action: PayloadAction<Array<string>>) => {
      state.filtering.tags = action.payload;
    },
    setProductType: (state, action: PayloadAction<ItemType>) => {
      state.filtering.product_type = action.payload;
    },
  },
});

export const {
  fetchProduct,
  setProductData,
  setProductErrors,
  setProductLoading,
  setInfo,
  setPagination,
  setBrand,
  setTag,
  setProductType,
} = ProductSlice.actions;
