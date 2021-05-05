export type BrandType = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
};

export type BrandManipulatedStateType = {
  name: string;
  quantity: number;
};

export type BrandStateType = {
  data: Array<BrandManipulatedStateType>;
  isLoading: boolean;
  error: any;
};
