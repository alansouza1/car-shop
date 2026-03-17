import { ICar } from '../types';
import styles from './CarCard.module.css';

interface CarCardProps {
  car: ICar;
  onEdit: (car: ICar) => void;
  onDelete: (id: string) => void;
}

export function CarCard({ car, onEdit, onDelete }: CarCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.colorIndicator} style={{ backgroundColor: car.color.toLowerCase() }}></div>
        <h3 className={styles.model}>{car.model}</h3>
        <span className={styles.year}>{car.year}</span>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span className={styles.label}>Price</span>
          <span className={styles.value}>{formatCurrency(car.buyValue)}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Status</span>
          <span className={`${styles.value} ${car.status ? styles.available : styles.sold}`}>
            {car.status ? 'Available' : 'Sold'}
          </span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>Doors / Seats</span>
          <span className={styles.value}>{car.doorsQty} / {car.seatsQty}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={() => onEdit(car)} className={styles.editBtn}>Edit</button>
        <button onClick={() => car._id && onDelete(car._id)} className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
}
