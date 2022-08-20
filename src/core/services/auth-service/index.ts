import axios from 'axios';

export interface ILoginFormData {
    email: string;
    password: string;
}

export const login = async (data: ILoginFormData) => axios.post('/login', data);
