import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePlant, addSeasonToPlant } from '../services/plants';

export default function PlantDetail(props) {
  const [plantItem, setPlantItem] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState('');
  const { id } = useParams();
  const { seasons } = props;

  useEffect(() => {
    const fetchPlantItem = async () => {
      const plantData = await getOnePlant(id);
      setPlantItem(plantData);
    };
    fetchPlantItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedSeason(value);
  };

  // Our handle submit for adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    const plantItem = await addSeasonToPlant(selectedSeason, id);
    setPlantItem(plantItem);
  };

  return (
    <div>
      <h3>{plantItem?.name}</h3>
      {plantItem?.seasons.map((season) => (
        <p key={season.id}>{season.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a Season --
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}

          {seasons.map((season) => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option value={season.id}>{season.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
