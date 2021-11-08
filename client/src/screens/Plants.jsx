import { Link } from 'react-router-dom';
import './Plants.css'

export default function Plants(props) {
  const { plants, handlePlantDelete } = props;
  return (
    <div className="plants-container">
      <h3>Plants</h3>
      <div className="plant-container">
      {plants.map((plant) => (
        <div key={plant.id}>
          <Link to={`/plants/${plant.id}`}>
            <p>{plant.name}</p>
          </Link>
          <Link to={`/plants/${plant.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={() => handlePlantDelete(plant.id)}>delete</button>
        </div>
      ))}
      </div>
      <Link to='/plants/new'>
        <button>Add a plant</button>
      </Link>
    </div>
  );
}
