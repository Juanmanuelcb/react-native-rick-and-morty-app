import axios from 'axios';
import { ApiResponse, Character, CharacterStatus } from './models';

const API_URL = 'https://rickandmortyapi.com/api';

const client = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export const CharacterService = {
  getAll: async (page: number = 1, name?: string, status?: CharacterStatus) => {
    const response = await client.get<ApiResponse<Character>>('/character', {
      params: { page, name, status },
    });
    return response.data;
  },
};
