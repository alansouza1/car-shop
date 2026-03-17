import type { ICar } from '../types/index';

const API_URL = 'http://localhost:3001/cars';

export const carService = {
  async getAll(): Promise<ICar[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch cars');
    return response.json();
  },

  async getById(id: string): Promise<ICar> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch car');
    return response.json();
  },

  async create(car: ICar): Promise<ICar> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    if (!response.ok) throw new Error('Failed to create car');
    return response.json();
  },

  async update(id: string, car: ICar): Promise<ICar> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    if (!response.ok) throw new Error('Failed to update car');
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete car');
  },
};
