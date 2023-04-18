import React, {useState} from "react";

function NewPlantForm({plants, setPlants}) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "", 
    price: 0,
  });

  function handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;

    setNewPlant({
      ...newPlant,
      [name]: value,
    });

  };

  function handleSubmit (e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants/", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then( () => setPlants([...plants, newPlant]));
    
    
    setNewPlant({
      name: "",
      image: "",
      price: 0
    })


  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" value={newPlant.name} placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" value={newPlant.image} placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
