interface API {
    url: string;
    method: "GET" | "POST" | "DELETE";
}

interface POST {
    user: API;
}

export interface USER_API {
    Post: POST;
}