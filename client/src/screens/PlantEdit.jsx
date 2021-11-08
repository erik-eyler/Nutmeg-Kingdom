import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PlantEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { id } = useParams();
  const { plants, handlePlantUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const plantItem = plants.find(plant => plant.id === Number(id))
      setFormData({
        name: plantItem.name
      })
    };
    if (plants.length) {
      prefillFormData();
    }
  }, [plants, id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePlantUpdate(id, formData);
      }}
    >
      <h1>Edit Plant</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}