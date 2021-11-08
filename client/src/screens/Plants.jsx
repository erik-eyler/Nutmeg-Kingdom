import { Link } from 'react-router-dom';

export default function Plants(props) {
  const { plants, handlePlantDelete } = props;
  return (
    <div>
      <h3>Plants</h3>
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
      <Link to='/plants/new'>
        <button>Add a plant</button>
      </Link>
    </div>
  );
}
