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

export interface Product {
    id?: string
    title: string;
    price: number;
    description: string;
    imageAlt?: string;
    image: string;
    category: string;
}

export interface ProductDetail{
    id?: string
    title: string;
    price: number;
    imageAlt?: string;
    description: string;
    image: string;
    category: string;
    rating?: {
        rate: number,
        count: number
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface Cart {
  product : Product;
  quantity: number;
} 