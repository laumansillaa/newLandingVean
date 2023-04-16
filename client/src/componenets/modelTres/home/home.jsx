import style from "./styles/home.module.css";
import iconHome from "../assets/imgIcon.svg";
import { Link } from "react-router-dom";

const HomeTres = () => {
  return (
    <div className={style.contHomeTres} id="home">
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqxwWCcrw0ncY1-HTVF-NBwz1C4JboZSEig5AQ-tJJa7SPzg/viewform" target='_blank' className={style.link}>
            <button className={style.buttonHomeTres}>Empezá</button>
          </a>
          <a href="https://fundit.finance/projects/vean-3wlljg8a6" target='_blank' className={style.link}>
            <button className={style.buttonHomeTres}>Enterate de más</button>
          </a>
        </div>
      </div>
      <img src={iconHome} className={style.homeImgTres} />
    </div>
  );
};

export default HomeTres;
