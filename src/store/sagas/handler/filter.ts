import { AxiosResponse } from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  setBrandData,
  setBrandError,
  setBrandLoading,
} from "store/slices/brand";
import { fetchProduct, setInfo, setPagination } from "store/slices/product";
import { setTagData, setTagLoading } from "store/slices/tag";
import { BrandType } from "store/types/brand";
import { PaginationType, ProductType } from "store/types/product";
import { TagStateType, TagType } from "store/types/tags";
import { requestFetchProduct } from "../request/product";
import { ExtrackBrands } from "../util/brand";
import { ExtrackTags } from "../util/tag";
import { BrandSelector } from "./../../selectors/brand";
import { ProductSelector } from "./../../selectors/product";
import { TagSelector } from "./../../selectors/tag";
import { BrandManipulatedStateType } from "./../../types/brand";
import { requestFetchBrand } from "./../request/brand";

export function* setBrandSaga(
  resultProduct: Array<ProductType>,
  resultBrand: Array<BrandType>
) {
  const FlattedArray: Array<BrandManipulatedStateType> = yield ExtrackBrands(
    resultBrand,
    resultProduct
  );
  yield put(setBrandData(FlattedArray));
  yield put(setBrandLoading(false));
}

export function* setTagSaga(resultProduct: Array<ProductType>) {
  const FlattedArray: Array<TagType> = yield ExtrackTags(resultProduct);
  yield put(setTagData(FlattedArray));
  yield put(setTagLoading(false));
}

export function* calculateAndSetInfo(resultProduct: string) {
  const Pagination: PaginationType = yield select(ProductSelector.Pagination);
  const total: number = yield parseInt(resultProduct, 10);
  let total_page = 0;
  if (total <= 16) {
    yield (total_page = 1);
  } else {
    yield (total_page = yield Math.round(total / Pagination._limit));
  }
  if (Pagination._page >= total_page + 1) {
    yield put(setPagination({ ...Pagination, _page: 1 }));
  }
  yield put(
    setInfo({
      total_data: total,
      total_page: total_page,
    })
  );
}

export function* fetchFilterSaga() {
  try {
    const TagState: TagStateType = yield select(TagSelector.State);
    const BrandState: TagStateType = yield select(BrandSelector.State);
    if (TagState.data.length === 0 && BrandState.data.length === 0) {
      yield put(setBrandLoading(true));
      yield put(setTagLoading(true));
      const resultBrand: AxiosResponse = yield call(requestFetchBrand);
      const resultProduct: AxiosResponse = yield call(requestFetchProduct);
      yield setBrandSaga(resultProduct.data, resultBrand.data);
      yield setTagSaga(resultProduct.data);
    }
  } catch (e) {
    yield put(setBrandError(e));
  }
}

export function* filterSaga() {
  yield takeLatest(fetchProduct.type, fetchFilterSaga);
}
