import React, { useState, useEffect } from 'react';
import type { ICar } from '../types';
import styles from './CarForm.module.css';

interface CarFormProps {
  initialData?: ICar | null;
  onSubmit: (car: ICar) => Promise<void>;
  onCancel: () => void;
}

const emptyCar: ICar = {
  model: '',
  year: 2026,
  color: '',
  status: true,
  buyValue: 0,
  doorsQty: 4,
  seatsQty: 5,
};

export function CarForm({ initialData, onSubmit, onCancel }: CarFormProps) {
  const [formData, setFormData] = useState<ICar>(emptyCar);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(emptyCar);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let finalValue: any = value;
    
    if (type === 'number') finalValue = Number(value);
    if (name === 'status') finalValue = value === 'true';

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{initialData ? 'Edit Car' : 'Add New Car'}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label>Model</label>
              <input name="model" value={formData.model} onChange={handleChange} minLength={3} required />
            </div>
            <div className={styles.field}>
              <label>Year</label>
              <input type="number" name="year" value={formData.year} onChange={handleChange} min={1900} max={2026} required />
            </div>
            <div className={styles.field}>
              <label>Color</label>
              <input name="color" value={formData.color} onChange={handleChange} minLength={3} required />
            </div>
            <div className={styles.field}>
              <label>Price</label>
              <input type="number" name="buyValue" value={formData.buyValue} onChange={handleChange} required />
            </div>
            <div className={styles.field}>
              <label>Doors</label>
              <input type="number" name="doorsQty" value={formData.doorsQty} onChange={handleChange} min={2} max={4} required />
            </div>
            <div className={styles.field}>
              <label>Seats</label>
              <input type="number" name="seatsQty" value={formData.seatsQty} onChange={handleChange} min={2} max={7} required />
            </div>
            <div className={styles.field}>
              <label>Status</label>
              <select name="status" value={formData.status ? 'true' : 'false'} onChange={handleChange}>
                <option value="true">Available</option>
                <option value="false">Sold</option>
              </select>
            </div>
          </div>
          
          <div className={styles.actions}>
            <button type="button" onClick={onCancel} className={styles.cancelBtn} disabled={loading}>Cancel</button>
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Saving...' : 'Save Car'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
