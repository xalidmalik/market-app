import { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchProduct,
  setProductData,
  setProductErrors,
  setProductLoading,
} from "store/slices/product";
import { FilteringType, PaginationType } from "store/types/product";
import { requestFetchPaginatedProduct } from "../request/product";
import { ProductSelector } from "./../../selectors/product";
import { calculateAndSetInfo } from "./filter";

export function* fetchProductSaga() {
  try {
    const Param: PaginationType = yield select(ProductSelector.Pagination);
    const Fiter: FilteringType = yield select(ProductSelector.Filtering);
    yield put(setProductLoading(true));
    const result: AxiosResponse = yield call(() =>
      requestFetchPaginatedProduct(Param, Fiter)
    );
    yield calculateAndSetInfo(result.headers["x-total-count"]);
    yield put(setProductData(result.data));
    yield put(setProductLoading(false));
  } catch (e) {
    yield put(setProductErrors(e));
  }
}
//   Watcher

export function* productSaga() {
  yield takeLatest(fetchProduct.type, fetchProductSaga);
}
