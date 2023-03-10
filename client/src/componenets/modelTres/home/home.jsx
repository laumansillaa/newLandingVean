import style from "./styles/home.module.css";
import iconHome from "../assets/imgIcon.svg";
import { Link } from "react-router-dom";

const HomeTres = () => {
  return (
    <div className={style.contHomeTres}>
      <div className={style.contTextHome}>
        <div>
          <h1 className={style.titleHomeTres}>
            Un universo de libros por explorar
          </h1>
          <h3 className={style.subtitleHomeTres}>
            Comprá, vendé. y publicá libros en todo el mundo.
          </h3>
        </div>
        <div className={style.contButtons}>
          <Link to="/" className={style.link}>
            <button className={style.buttonHomeTres}>Empezá</button>
          </Link>
          <Link to="/" className={style.link}>
            <button className={style.buttonHomeTres}>Enterate de más</button>
          </Link>
        </div>
      </div>
      <img src={iconHome} className={style.homeImgTres} />
    </div>
  );
};

export default HomeTres;
