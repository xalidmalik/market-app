import axios from "axios";
import { FilteringType, PaginationType } from "store/types/product";

export const requestFetchProduct = async () => {
  return await axios.request({
    url: " http://localhost:3005/products",
    method: "GET",
  });
};
export const requestFetchPaginatedProduct = async (
  param: PaginationType,
  filter?: FilteringType
) => {
  return await axios.request({
    url: " http://localhost:3005/products",
    method: "GET",
    params: {
      ...param,
      manufacturer: filter?.brands,
      tags_like: filter?.tags,
      itemType: filter?.product_type,
    },
  });
};
