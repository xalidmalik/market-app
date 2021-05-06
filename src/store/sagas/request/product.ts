import axios from "axios";
import { FilteringType, PaginationType } from "store/types/product";

export const requestFetchProduct = async () => {
  return await axios.request({
    url: "https://market-app-json-server.herokuapp.com/products",
    method: "GET",
  });
};
export const requestFetchPaginatedProduct = async (
  param: PaginationType,
  filter?: FilteringType
) => {
  return await axios.request({
    url: "https://market-app-json-server.herokuapp.com/products",
    method: "GET",
    params: {
      ...param,
      manufacturer: filter?.brands,
      tags_like: filter?.tags,
      itemType: filter?.product_type,
    },
  });
};
