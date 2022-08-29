import axios, { AxiosRequestConfig } from 'axios';

export interface ILoginFormData {
    email: string;
    password: string;
}

export interface ISignUpFormData {
    name: string;
    email: string;
    password: string;
}

export const login = (data: ILoginFormData) => {
    // const creds: AxiosRequestConfig = axios.post('http://localhost:3000/auth/login', data);
    // return creds?.data
    return axios
        .post('http://localhost:3000/auth/login', data)
        .then(response => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch(err => {
            console.log("!!!ERROR WHILE LOG-IN!!!", err);
        })
}
export const signup = (data: ISignUpFormData) => {
    // const creds: AxiosRequestConfig = await axios.post('http://localhost:3000/auth/signup', data);
    // return creds?.data
    return axios
        .post('http://localhost:3000/auth/signup', data)
        .catch(err => {
            console.log("!!!ERROR WHILE SIGN-UP!!!", err);
        })
}

export const logout = () => {
    localStorage.removeItem("user")
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') as any)
    // console.log('user', user.access_token);
}