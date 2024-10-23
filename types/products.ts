interface API {
    url: string;
    method: "get" | "post" | "delete";
}

interface GET {
    productList: API;
}

export interface API_PRODUCT_LIST {
    Get: GET;
}