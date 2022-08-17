import React, {useState} from "react";

function Search({setRender}) {

  const [form, setForm] = useState({
    description: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.description]:e.target.value
      
    })
    console.log("submitted");
    console.log(e.target.description)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
