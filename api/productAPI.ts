import type { API_PRODUCT_LIST} from "@/typeAPI_PRODUCT_LIST";

export const API_Product_List: API_PRODUCT_LIST = {
  Get: {
    productList: {
      url: `https://fakestoreapi.com/products`,
      method: "get",
    },
  },
};