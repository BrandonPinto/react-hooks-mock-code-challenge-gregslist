import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing, i) => {
          return <ListingCard listing={listing}key={i}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
