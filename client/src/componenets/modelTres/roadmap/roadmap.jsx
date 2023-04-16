import style from "./styles/roadmap.module.css";
import line from "./assets/lineee.svg";
export const Roadmap = () => {
  return (
    <div className={style.contRoadmap} id="roadmap">
      <img src={line} className={style.lineRoad} />
      <div className={style.contSectionRoadmap}>
        <h3 className={style.titleQ}>Q1 - 2023</h3>
        <h1 className={style.title}>BIENVENIDA</h1>
        <h3 className={style.txt}>
          Landing page. Comunidad: Twitter + Telegram. Campaña de donación.
          Whitepaper.
        </h3>
      </div>
      <div className={style.contSectionDosRoadmap}>
        <h3 className={style.titleQ}>Q2 - 2023</h3>
        <h1 className={style.titleDos}>PRUEBA DE CONCEPTO</h1>
        <h3 className={style.txtDos}>
          Onboarding. Beta cerrada de publicación.
        </h3>
      </div>
      <div className={style.contSectionTresRoadmap}>
        <h3 className={style.titleQ}>Q3 - 2023</h3>
        <h1 className={style.title}>EL CAMINO</h1>
        <h3 className={style.txt}>
          Primer marketplace de ebooks. Pagos cripto y FIAT.{" "}
        </h3>
      </div>
      <div className={style.contSectionCuatroRoadmap}>
        <h3 className={style.titleQ}>Q4 - 2023</h3>
        <h1 className={style.titleDos}>LA EXPANSIÓN</h1>
        <h3 className={style.txtDos}>
          Modelo de impresión bajo demanda. Puntos de venta oficiales. Venta de
          libros como NFT.{" "}
        </h3>
      </div>
      <div className={style.contSectionCincoRoadmap}>
        <h3 className={style.titleQ}>Q1 - 2024</h3>
        <h1 className={style.title}>EL FUTURO</h1>
        <h3 className={style.txt}>
          Modelode franquiciado: librerias asociadas. Gobernanza
          descentralizada. Primer token nativo. Alquileres, suscripciones y más.{" "}
        </h3>
      </div>
    </div>
  );
};
