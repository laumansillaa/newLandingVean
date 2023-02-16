import style from "./styles/roadmap.module.css";
import line from "./assets/lineee.svg";
export const Roadmap = () => {
  return (
    <div className={style.contRoadmap}>
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
          Proceso de onboarding + marketplace. Desarrollo de los primeros
          libros.
        </h3>
      </div>
      <div className={style.contSectionTresRoadmap}>
        <h3 className={style.titleQ}>Q3 - 2023</h3>
        <h1 className={style.title}>EL CAMINO</h1>
        <h3 className={style.txt}>
          Beta abierta de compra y venta. Pagos con criptomonedas y FIAT.
        </h3>
      </div>
      <div className={style.contSectionCuatroRoadmap}>
        <h3 className={style.titleQ}>Q4 - 2023</h3>
        <h1 className={style.titleDos}>LA EXPANSIÓN</h1>
        <h3 className={style.txtDos}>
          Apertura de nuestros locales. Venta de libros como Tokens No
          Fungibles.
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
