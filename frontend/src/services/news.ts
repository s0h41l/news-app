import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getNews = (language: string, q: string) => axios.get(`${BASE_URL}/news`,
{
    params: {
        language,
        q
    },
    headers: {
        'Content-Type': 'application/json'
    }
}
);
