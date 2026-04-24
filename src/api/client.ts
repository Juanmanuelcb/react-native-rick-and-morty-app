import axios from 'axios';
import { ApiResponse, Character } from './models';

const API_URL = 'https://rickandmortyapi.com/api';

const client = axios.create({
    baseURL: API_URL,
    timeout: 5000,
});

export const CharacterService = {
    getAll: async (page: number = 1) => {
        const response = await client.get<ApiResponse<Character>>('/character', {
            params: { page }
        });
        return response.data;
    },

    getById: async (id: number) => {
        const response = await client.get<Character>(`/character/${id}`);
        return response.data;
    }
};