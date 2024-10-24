import type { API_PRODUCT_LIST } from "~/types/products";

export const API_Product_List: API_PRODUCT_LIST = {
  Get: {
    productList: {
      url: `https://fakestoreapi.com/products`,
      method: "GET",
    },
    
  },
};