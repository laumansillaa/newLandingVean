import style from "./styles/nav.module.css";
// import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Vean from "../../assets/images/VeanBlank.svg";
import menu from "../../../assets/svg/menu.svg";
import VeanBlack from "../../../assets/svg/veanBlack.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const NavBarTres = () => {
  const clickChecked = () => {
    var msg = document.getElementById("menu").click();
  };

  return (
    <div className="header">
      <div className={style.contNavTres}>
        <div className={style.headerIconTres}>
          <Link to="/">
            <img src={VeanBlack} alt="logo-png" className={style.logo} />
          </Link>
        </div>
        <label htmlFor="menu" className={style.navLabelTres}>
          <img src={menu} alt="menu-svg" className="navSvg" />
        </label>
        <input type="checkbox" id="menu" className={style.navInputTres}></input>
        <div className={style.headerItemsTres}>
          <div className={style.contItemTres}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.link}
              onClick={clickChecked}
            >
              Inicio
            </Link>
            <Link
              to="funcionamiento"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.link}
              onClick={clickChecked}
            >
              Funcionamiento
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.link}
              onClick={clickChecked}
            >
              El proyecto
            </Link>
            <Link
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.link}
              onClick={clickChecked}
            >
              Roadmap
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.link}
              onClick={clickChecked}
            >
              Equipo
            </Link>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              className={style.link}
              onClick={clickChecked}
            >
              Contacto
            </Link>
          </div>
          <div className={style.contSocialTres}>
            <a href="https://twitter.com/veanbooks" target="_blank">
              <AiFillTwitterCircle className={style.icons} />
            </a>
            <a href="https://telegram.me/newsvean" target="_blank">
              <FaTelegram className={style.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarTres;
