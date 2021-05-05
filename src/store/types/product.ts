export type ProductType = {
  tags: Array<string>;
  price: number;
  name: string;
  description?: string;
  slug: string;
  added?: Date;
  manufacturer?: string;
  itemType?: "shirt";
};

export type SortType = "price" | "date";
export type OrderType = "asc" | "desc";
export type ItemType = "mug" | "shirt";

export type PaginationType = {
  _page: number;
  _limit: number;
  _sort: SortType;
  _order: OrderType;
};
export type InfoType = {
  total_data: number;
  total_page: number;
};

export type FilteringType = {
  brands: Array<string>;
  tags: Array<string>;
  product_type: ItemType;
};

export type ProductStateType = {
  data: Array<ProductType>;
  info: InfoType;
  pagination: PaginationType;
  filtering: FilteringType;
  isLoading: boolean;
  error: any;
};
