import { useState, useEffect, useCallback } from 'react';
import type { ICar } from '../types';
import { carService } from '../services/carService';

export function useCars() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCars = useCallback(async () => {
    try {
      setLoading(true);
      const data = await carService.getAll();
      setCars(data);
      setError(null);
    } catch (err) {
      setError('Failed to load cars. Please ensure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const addCar = async (car: ICar) => {
    const newCar = await carService.create(car);
    setCars((prev) => [...prev, newCar]);
  };

  const updateCar = async (id: string, car: ICar) => {
    const updated = await carService.update(id, car);
    setCars((prev) => prev.map((c) => (c._id === id ? updated : c)));
  };

  const removeCar = async (id: string) => {
    await carService.delete(id);
    setCars((prev) => prev.filter((c) => c._id !== id));
  };

  return { cars, loading, error, refresh: fetchCars, addCar, updateCar, removeCar };
}
