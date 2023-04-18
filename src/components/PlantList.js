import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsToDisplay = plants.map(plant => <PlantCard key={plant.id} plant={plant} />);

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
