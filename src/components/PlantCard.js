import React, {useState} from "react";

function PlantCard ({
  plant: {image, name, price},
}) {

  const [isInStock, setIsInStock] = useState(true);

  function handleStockClick () {
    setIsInStock(isInStock => !isInStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStockClick }>In Stock</button>
      ) : (
        <button onClick={handleStockClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
