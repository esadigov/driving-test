import axios, { AxiosRequestConfig } from 'axios';
import { config } from 'process';
import { authHeader } from './auth-header';
const API_URL = 'http://localhost:3000/test/';
class TestService {
    async createTest() {
        console.log();
        const creds: AxiosRequestConfig = {
            method: 'POST',
            url: API_URL + 'create',
            headers: authHeader() as any,
            timeout: 120000,
        };
        return (await axios(creds))?.data;
    }
}
export default new TestService();