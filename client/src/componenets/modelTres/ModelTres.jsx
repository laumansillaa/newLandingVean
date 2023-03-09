import { Colabs } from "./colabs/Colaboradores";
import { Footer } from "./footer/footer";
import { Funcionamiento } from "./funcionamiento/funcionamiento";
import HomeTres from "./home/home";
import NavBarTres from "./navbar/navbar";
import { Proyecto } from "./proyecto/Proyecto";
import { Roadmap } from "./roadmap/roadmap";
import { Equipo } from "./team/Equipo";

const ModelTres = () => {
  return (
    <div>
      <NavBarTres />
      <HomeTres />
      <Funcionamiento />
      <Proyecto />
      <Roadmap />
      <Equipo />
      <Colabs />
      <Footer />
    </div>
  );
};

export default ModelTres;
