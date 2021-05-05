import { ProductType } from "./product";

export type BasketType = {
  product: ProductType;
  quantity: number;
};

export type BasketStateType = {
  data: Array<BasketType>;
  total: number;
  isLoading: boolean;
  error: any;
};
