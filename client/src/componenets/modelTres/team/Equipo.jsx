import { CardUser } from "./card";
import style from "./styles/equipo.module.css";
import ari from "../../../assets/images/ari.jpg";
import lau from "../../../assets/images/lau.jpg";
import gaston from "../../../assets/images/gaston.jpg";
import marti from "../assets/marti.jpg";
import esteban from "./assets/esteban.jpeg";
import jacqui from '../assets/jacqui.jpeg'
export const Equipo = () => {
  const users = [
    {
      name: "Ariel Duce Bemez",
      rol: "Communication scientist",
      social: "@Adbmez",
      image: ari,
    },
    {
      name: "Lautaro Mansilla",
      rol: "Full Stack Developer",
      social: "@Laumansillaa",
      image: lau,
    },
    {
      name: "Martina Mendoza",
      rol: "Project Manager",
      social: "@Unfarol",
      image: marti,
    },
    {
      name: "Gastón Solis",
      rol: "Graphic Designer",
      social: "@Gritar",
      image: gaston,
    },
    {
      name: "Esteban Segui",
      rol: "UX/UI Designer",
      discord: "Stifen #7340",
      image: esteban,
    },
    {
      name: "Jacqueline Leone",
      rol: "Full Stack Developer",
      social: "_Jacquileone",
      image: jacqui
    }
  ];

  return (
    <div className={style.contEquipo} id="team">
      <div>
        <h1 className={style.titleTeam}>Equipo</h1>
      </div>
      <div className={style.contUsers}>
        {users.map((user, index) => {
          return <CardUser user={user} key={index} />;
        })}
      </div>
    </div>
  );
};
