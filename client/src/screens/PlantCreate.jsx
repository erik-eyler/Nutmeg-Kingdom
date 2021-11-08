import { useState } from 'react';

export default function PlantCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { handlePlantCreate } = props;

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
        handlePlantCreate(formData);
      }}
    >
      <h1>Add Plant</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}