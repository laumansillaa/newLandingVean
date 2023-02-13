import { CardUser } from "./card";
import style from "./styles/equipo.module.css";

export const Equipo = () => {
  const users = [
    {
      name: "Ariel Duce Bemez",
      rol: "Communication scientist",
      social: "@Adbmez",
    },
    {
      name: "Lautaro Mansilla",
      rol: "Fullstack Developer",
      social: "@Laumansillaa",
    },
    { name: "Martina Mendoza", rol: "Project Manager", social: "@Unfarol" },
    { name: "Gastón Solis", rol: "Graphic Designer", social: "@Gritar" },
  ];

  return (
    <div className={style.contEquipo}>
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
