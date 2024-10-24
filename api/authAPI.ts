import type { API_AUTH } from '@/types/auth';

export const Auth_API : API_AUTH ={
    Post: {
        auth: {
            url:'https://fakestoreapi.com/auth/login',
            method: "POST"
        }
    }
}