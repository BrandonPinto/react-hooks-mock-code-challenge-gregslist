import React, {useState, useEffect} from "react";

function ListingCard({ listing }) {

  const [favorite, setFavorite] = useState(true)
  const [trigger, setTrigger] = useState(true)

  useEffect(() => {
    const deleter = () => {
      fetch('http://localhost:6001/listings', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
    })

  }
  deleter()
})
    
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite((!favorite))}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite((!favorite))}className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={(() => setTrigger(trigger => !trigger))}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
