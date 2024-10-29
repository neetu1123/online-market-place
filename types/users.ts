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

export interface User {
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    },
    address: {
        city: string;
        street: string;
        number?: 0,
        zipcode: string;
        geolocation?: {
            lat: string;
            long: string;
        }
    },
    phone: string;
  };
  export interface UserList {
    id: string;
    email: string;
    name: {
      firstname: string;
      lastname: string;
    }
    username: string;
    phone: string;
  }

  export interface FormData {
    username: string;
    password: string;
  }