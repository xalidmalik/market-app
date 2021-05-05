import { createSelector } from "@reduxjs/toolkit";
import { IState } from "store";

const State = createSelector(
  (state: IState) => state.tags,
  (state) => state
);

export const TagSelector = {
  State,
};
