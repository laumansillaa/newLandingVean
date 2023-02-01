import style from "./styles/home.module.css";
import iconHome from "../assets/imgIcon.svg";
import { Link } from "react-router-dom";

const HomeDos = () => {
  return (
    <div className={style.contHome}>
      <div className={style.contTextHome}>
        <div>
          <h1 className={style.titleHomeDos}>
            Bienvenidos al futuro de la industria editorial
          </h1>
          <h3 className={style.subtitleHome}>
            Comprá, vendé. y publicá libros en todo el mundo.
          </h3>
        </div>
        <div className={style.contButtons}>
          <Link to="/" className={style.link}>
            <button className={style.buttonHomeDos}>Empezá ahora</button>
          </Link>
          <Link to="/" className={style.link}>
            <button className={style.buttonHomeDos}>Enterate de más</button>
          </Link>
        </div>
      </div>
      <img src={iconHome} className={style.homeImgDos} />
    </div>
  );
};

export default HomeDos;
