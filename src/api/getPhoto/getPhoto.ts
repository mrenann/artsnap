import api from '../../services/api.ts';
import {Image} from '../../types/photoTypes.ts';

export const getPhoto = async (id: string): Promise<Image> => {
  try {
    const response = await api.get(`/photos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar foto', error);
    throw error;
  }
};
