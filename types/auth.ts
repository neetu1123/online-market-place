interface API {
    url: string;
    method:  "POST";
}

interface POST {
    auth: API;
}

export interface API_AUTH {
    Post: POST;
}