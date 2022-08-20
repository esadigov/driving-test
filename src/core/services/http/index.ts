import axios, { AxiosInstance } from 'axios';

export const HTTP = (() => {
    let $client: AxiosInstance;

    return {
        createClient(url: string): AxiosInstance {
            if ($client) {
                return $client;
            }

            $client = axios.create({
                baseURL: url,
                responseType: 'json',
            });

            return $client;
        },
        client() {
            const token = localStorage.getItem('token');

            if (token) {
                $client.defaults.headers.common.Authorization = `Bearer ${token}`;
            }

            return $client;
        },
    };
})();
