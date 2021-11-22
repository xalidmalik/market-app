import { AxiosResponse } from "axios";
import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { ProductSelector } from "store/selectors/product";
import { setBrandData, setBrandLoading } from "store/slices/brand";
import { fetchProduct, setInfo, setPagination } from "store/slices/product";
import { setTagData, setTagLoading } from "store/slices/tag";
import { BrandManipulatedStateType } from "store/types/brand";
import { FilteringType, PaginationType } from "store/types/product";
import { TagType } from "store/types/tags";
import { requestFetchProduct } from "../request/product";
import { ExtrackBrands } from "../util/brand";
import { ExtrackTags } from "../util/tag";
import { requestFetchBrand } from "./../request/brand";

export function* setBrandSaga() {
  try {
    // const BrandState: TagStateType = yield select(BrandSelector.State);
    yield put(setBrandLoading(true));
    yield delay(300);
    const resultBrand: AxiosResponse = yield call(requestFetchBrand);
    const resultProduct: AxiosResponse = yield call(requestFetchProduct);

    const Filtering: FilteringType = yield select(ProductSelector.Filtering);
    const FlattedArray: Array<BrandManipulatedStateType> = yield ExtrackBrands(
      resultBrand.data,
      resultProduct.data,
      Filtering
    );
    yield put(setBrandData(FlattedArray));
    yield put(setBrandLoading(false));
  } catch (e) {
    console.log("Error", e);
  }
}

export function* setTagSaga() {
  try {
    // const TagState: TagStateType = yield select(TagSelector.State);
    yield put(setTagLoading(true));
    const resultProduct: AxiosResponse = yield call(requestFetchProduct);
    yield delay(200);
    const Filtering: FilteringType = yield select(ProductSelector.Filtering);
    const FlattedArray: Array<TagType> = yield ExtrackTags(
      resultProduct.data,
      Filtering.product_type
    );
    yield put(setTagData(FlattedArray));
    yield put(setTagLoading(false));
  } catch (e) {
    console.log("Erorr", e);
  }
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

export function* filterSaga() {
  yield takeLatest(fetchProduct.type, setBrandSaga);
  yield takeLatest(fetchProduct.type, setTagSaga);
}
