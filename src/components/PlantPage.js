import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect( () => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants([...data]));
  }, []);

  
  const visiblePlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()));
  
  


  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
