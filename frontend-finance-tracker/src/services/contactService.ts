import axios from '../config/axiosConfig';
import { ContactMessage, ContactResponse } from '../types/contact';

export const contactService = {
  sendMessage: async (data: ContactMessage): Promise<ContactResponse> => {
    const response = await axios.post<ContactResponse>('/api/contact', data);
    return response.data;
  }
};
