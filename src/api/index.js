import axios from "axios";

export const getAllProducts = (name) => {
  return axios
    .get(
      `https://nameless-wave-49395.herokuapp.com/products/get${
        name ? "?search=" + name : ""
      }`
    )
    .then((res) => res)
    .catch((err) => err.response);
};
