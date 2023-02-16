import NavBar from "./componenets/navbar/navbar";
import "./App.css";
import Home from "./componenets/home/home";
import ModelUno from "./componenets/modeluno";
import { Route, Routes } from "react-router-dom";
import ModelDos from "./componenets/ModelDos/ModelDos";
import ModelTres from "./componenets/modelTres/ModelTres";
import NewHome from "./componenets/newHome";

function App() {
  return (
    <div className="App">
      <ModelTres />
    </div>
  );
}

export default App;
