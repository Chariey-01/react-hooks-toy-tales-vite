import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <>
      <Header />

      {showForm && <ToyForm setToys={setToys} />}

      <button onClick={() => setShowForm(!showForm)}>
        Add a Toy
      </button>

      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;