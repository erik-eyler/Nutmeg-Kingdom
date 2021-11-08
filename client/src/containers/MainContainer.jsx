import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deletePlant, getAllPlants, postPlant, putPlant } from '../services/plants';
import { getAllSeasons } from '../services/seasons';
import Plants from '../screens/Plants';
import PlantCreate from '../screens/PlantCreate';
import PlantEdit from '../screens/PlantEdit';
import Seasons from '../screens/Seasons';
import PlantDetail from '../screens/PlantDetail';

export default function MainContainer() {
  const [plants, setPlants] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPlants = async () => {
      const plantList = await getAllPlants();
      setPlants(plantList);
    };
    fetchPlants();
  }, []);

  useEffect(() => {
    const fetchSeasons = async () => {
      const seasonList = await getAllSeasons();
      setSeasons(seasonList);
    };
    fetchSeasons();
  }, []);

  const handlePlantCreate = async (formData) => {
    const newPlant = await postPlant(formData);
    setPlants((prevState) => [...prevState, newPlant]);
    history.push('/plants');
  };

  const handlePlantUpdate = async (id, formData) => {
    const newPlant = await putPlant(id, formData);
    setPlants((prevState) =>
      prevState.map((plant) => {
        return plant.id === Number(id) ? newPlant : plant;
      })
    );
    history.push('/plants');
  };

  const handlePlantDelete = async (id) => {
    await deletePlant(id);
    setPlants((prevState) => prevState.filter((plant) => plant.id !== id));
  };

  return (
    <Switch>
      <Route path='/plants/:id/edit'>
        <PlantEdit plants={plants} handlePlantUpdate={handlePlantUpdate} />
      </Route>
      <Route path='/plants/new'>
        <PlantCreate handlePlantCreate={handlePlantCreate} />
      </Route>
      <Route path='/plants/:id'>
        <PlantDetail seasons={seasons} />
      </Route>
      <Route path='/plants'>
        <Plants plants={plants} handlePlantDelete={handlePlantDelete} />
      </Route>
      <Route path='/seasons'>
        <Seasons seasons={seasons} />
      </Route>
    </Switch>
  );
}