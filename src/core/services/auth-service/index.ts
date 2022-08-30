import axios, { AxiosRequestConfig } from 'axios';

export interface ILoginFormData {
    email: string;
    password: string;
}

export interface ISignUpFormData {
    name: string;
    email: string;
    password: string;
    cPassword?: string
}

export const login = async (data: ILoginFormData) => {
    const creds: AxiosRequestConfig = {
        method: 'POST',
        url: 'http://localhost:3000/auth/login',
        timeout: 20000,
        data: data,
    };

    return (await axios(creds))?.data;
}
export const signup = async (data: ISignUpFormData) => {
    const creds: AxiosRequestConfig = {
        method: 'POST',
        url: 'http://localhost:3000/auth/signup',
        timeout: 20000,
        data: data,
    };

    return (await axios(creds))?.data;
}

export const logout = () => {
    localStorage.removeItem("user")
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') as any)
    // console.log('user', user.access_token);
}