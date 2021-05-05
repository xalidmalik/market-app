import { createSelector } from "@reduxjs/toolkit";
import { IState } from "store";

const State = createSelector(
  (state: IState) => state.products,
  (state) => state
);
const Data = createSelector(
  (state: IState) => state.products.data,
  (state) => state
);
const Filtering = createSelector(
  (state: IState) => state.products.filtering,
  (state) => state
);
const Info = createSelector(
  (state: IState) => state.products.info,
  (state) => state
);
const Pagination = createSelector(
  (state: IState) => state.products.pagination,
  (state) => state
);

export const ProductSelector = {
  State,
  Data,
  Filtering,
  Info,
  Pagination,
};
