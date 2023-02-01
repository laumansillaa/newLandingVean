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
      {/* <NavBar />
      <Home /> */}
      <Routes>
        <Route exact path="/" element={<NewHome />} />
        <Route exact path="/uno" element={<ModelUno />} />
        <Route exact path="/dos" element={<ModelDos />} />
        <Route exact path="/tres" element={<ModelTres />} />
      </Routes>
      {/* <ModelUno /> */}
    </div>
  );
}

export default App;
