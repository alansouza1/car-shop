import { useState } from 'react';
import { useCars } from './hooks/useCars';
import { CarCard } from './components/CarCard';
import { CarForm } from './components/CarForm';
import { ICar } from './types/index.ts';
import styles from './App.module.css';

function App() {
  const { cars, loading, error, addCar, updateCar, removeCar } = useCars();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<ICar | null>(null);

  const handleAddClick = () => {
    setEditingCar(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (car: ICar) => {
    setEditingCar(car);
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (car: ICar) => {
    try {
      if (editingCar?._id) {
        await updateCar(editingCar._id, car);
      } else {
        await addCar(car);
      }
      setIsFormOpen(false);
    } catch (err) {
      alert('Error saving car. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await removeCar(id);
      } catch (err) {
        alert('Error deleting car.');
      }
    }
  };

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <h1 className={styles.logo}>Car<span>Shop</span></h1>
          <button onClick={handleAddClick} className={styles.addBtn}>+ Add New Car</button>
        </div>
      </nav>

      <main className={styles.container}>
        {error && <div className={styles.error}>{error}</div>}
        
        {loading ? (
          <div className={styles.loading}>Loading inventory...</div>
        ) : (
          <div className={styles.grid}>
            {cars.map((car) => (
              <CarCard 
                key={car._id} 
                car={car} 
                onEdit={handleEditClick}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {!loading && cars.length === 0 && !error && (
          <div className={styles.empty}>
            <p>Your inventory is empty.</p>
            <button onClick={handleAddClick} className={styles.addBtn}>Add your first car</button>
          </div>
        )}
      </main>

      {isFormOpen && (
        <CarForm 
          initialData={editingCar}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
