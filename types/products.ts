interface API {
    url: string;
    method: "GET" | "POST" | "DELETE";
}

interface GET {
    productList: API;
}

export interface API_PRODUCT_LIST {
    Get: GET;
}