import { Footer } from "./footer/footer";
import { Funcionamiento } from "./funcionamiento/funcionamiento";
import HomeTres from "./home/home";
import NavBarTres from "./navbar/navbar";
import { Proyecto } from "./proyecto/Proyecto";
import { Equipo } from "./team/Equipo";

const ModelTres = () => {
  return (
    <div>
      <NavBarTres />
      <HomeTres />
      <Funcionamiento />
      <Proyecto />
      <Equipo />
      <Footer />
    </div>
  );
};

export default ModelTres;
