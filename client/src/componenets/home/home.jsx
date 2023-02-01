import style from "./styles/home.module.css";
import iconHome from "../../assets/svg/iconHome.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={style.contHome}>
      <div className={style.contTextHome}>
        <div>
          <h1 className={style.titleHome}>
            Bienvenidos al futuro de la industria editorial
          </h1>
          <h3 className={style.subtitleHome}>
            Comprá, vendé. y publicá libros en todo el mundo.
          </h3>
        </div>
        <div className={style.contButtons}>
          <Link to="/" className={style.link}>
            <button className={style.buttonHome}>Empezá ahora</button>
          </Link>
          <Link to="/" className={style.link}>
            <button className={style.buttonHome}>Enterate de más</button>
          </Link>
        </div>
      </div>
      <img src={iconHome} className={style.homeImg} />
    </div>
  );
};

export default Home;
