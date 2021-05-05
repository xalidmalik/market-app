import { put, select, takeLatest } from "@redux-saga/core/effects";
import { BasketSelector } from "store/selectors/basket";
import {
  addToBasketSaga,
  setAddBasket,
  setBasketLoading,
} from "store/slices/basket";
import { BasketStateType, BasketType } from "store/types/basket";

export function* incrementBasketItem(
  data: Array<BasketType>,
  product: BasketType
) {
  const newState: Array<BasketType> = yield data.map((item) =>
    item.product.slug === product.product.slug
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  yield put(setAddBasket(newState));
}

export function* decrementBasketItem(
  data: Array<BasketType>,
  product: BasketType
) {
  const newState: Array<BasketType> = yield data.map((item) =>
    item.product.slug === product.product.slug
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  yield put(setAddBasket(newState));
}

export function* addBasketSaga(action: any) {
  const { payload } = action;
  yield put(setBasketLoading(true));
  const { data }: BasketStateType = yield select(BasketSelector.State);

  const cardHaveItem: BasketType = yield data.find(
    (item) => item.product.slug === payload.product.slug
  );
  if (cardHaveItem) {
    yield incrementBasketItem(data, payload);
  } else {
    yield put(setAddBasket([...data, payload]));
  }
}

export function* basketSaga() {
  yield takeLatest(addToBasketSaga.type, addBasketSaga);
}
