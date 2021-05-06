import axios from "axios";

export const requestFetchBrand = async () => {
  return await axios.request({
    url: " https://market-app-json-server.herokuapp.com/brands",
    method: "GET",
  });
};
