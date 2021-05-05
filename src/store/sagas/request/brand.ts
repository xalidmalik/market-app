import axios from "axios";

export const requestFetchBrand = async () => {
  return await axios.request({
    url: " http://localhost:3005/brands",
    method: "GET",
  });
};
