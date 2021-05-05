import { createSelector } from "@reduxjs/toolkit";
import { IState } from "store";

export const State = createSelector(
  (state: IState) => state.brands,
  (state) => state
);

export const BrandSelector = {
  State,
};
