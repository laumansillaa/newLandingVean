import { Funcionamiento } from "./funcionamiento/funcionamiento";
import HomeTres from "./home/home";
import NavBarTres from "./navbar/navbar";

const ModelTres = () => {
  return (
    <div>
      <NavBarTres />
      <HomeTres />
      <Funcionamiento />
    </div>
  );
};

export default ModelTres;
