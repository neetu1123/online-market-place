import type { USER_API } from '@/types/users';

export const User_Api : USER_API ={
    Post: {
        user: {
            url: "https://fakestoreapi.com/users",
            method: "POST"
        }
    }
}