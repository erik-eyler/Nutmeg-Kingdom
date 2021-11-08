import './PlantCreate.css'
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
    <div className="create-container">
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePlantCreate(formData);
          }}
        >
          <h3 className="user-form-heading">Add Plant</h3>
          <label classname="user-label">
            Name:
            <input className="user-input" type='text' value={name} onChange={handleChange} />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}