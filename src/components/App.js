import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";

function App() {

const [listings, setListing] = useState([])
const [render, setRender] = useState(false)

  useEffect(() => {
    const fetcher = () => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListing(data))
  }
  fetcher()
}, [render])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
      <Search setRender={setRender}/>
    </div>
  );
}

export default App;
