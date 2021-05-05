import { fork } from "@redux-saga/core/effects";
import { basketSaga } from "./handler/basket";
import { filterSaga } from "./handler/filter";
import { productSaga } from "./handler/product";

export function* rootSaga() {
  yield fork(productSaga);
  yield fork(filterSaga);
  yield fork(basketSaga);
}
