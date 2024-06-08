import axios from 'axios';
import type { FilterRequest } from './interfaces/filter-request.interface'
import type { FilterResponse } from './interfaces/filter-response.interface';

const client = axios.create({
    baseURL: 'http://localhost:8080', // Замените на URL вашего API
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const getByFilter = async (filterRequest: FilterRequest): Promise<FilterResponse> => {
    const headers = {}
    const res = await client.post('filter', filterRequest, headers)
    return res.data
}