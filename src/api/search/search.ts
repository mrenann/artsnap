import api from '../../services/api.ts';
import {SearchResponse} from '../../types/searchTypes.ts';

export const searchPhotos = async (
  query: string,
  page: number = 1,
  perPage: number = 10,
): Promise<SearchResponse> => {
  try {
    const response = await api.get('/search/photos', {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar fotos', error);
    throw error;
  }
};
