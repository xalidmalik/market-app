import { createSelector } from "@reduxjs/toolkit";
import { IState } from "store";

export const State = createSelector(
  (state: IState) => state.basket,
  (state) => state
);

export const BasketSelector = {
  State,
};
