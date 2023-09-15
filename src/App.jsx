import "./App.css";
import MiApi from "./Components/MiApi";
import Header from "./Components/Header";
import Buscador from "./Components/Busqueda";
import React, { useState } from "react";

const App = () => {
  // Estado para almacenar los datos de la API
  const [data, setData] = useState([]);
  const [buscar, setBuscar] = useState("");

  return (
    <div>
      <div className="Navbar">
        <Header />
      </div>
      <div className="barrabuscar">
        <Buscador buscar={buscar} setBuscar={setBuscar} />
      </div>
      <div className="container">
        <MiApi data={(data, setData)} /> {/* Pasa los datos como prop 'data' */}
      </div>
    </div>
  );
};

export default App;
