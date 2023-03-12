import naty from "./assets/naty.svg";
import santi from "./assets/san.svg";
import solange from "./assets/solange.svg";
import cryptocampo from "./assets/cryptocampo.svg";
import style from "./styles/colab.module.css";
import { CardUser } from "../team/card";

export const Colabs = () => {
  const users = [
    {
      name: "Naty",
      rol: "Tokenomic",
      social: "@NatyShi_",
      image: naty,
    },
    {
      name: "Sansil",
      rol: "Development",
      social: "@Sansildev",
      image: santi,
    },
    {
      name: "Solange",
      rol: "Business",
      social: "@SolangeSoifer",
      image: solange,
    },
    {
      name: "Cryptocampo",
      rol: "Legal",
      social: "@CryptocampoNet",
      image: cryptocampo,
    },
  ];

  return (
    <div className={style.contEquipo}>
      <div>
        <h1 className={style.titleTeam}>Colaboradores</h1>
      </div>
      <div className={style.contUsers}>
        {users.map((user, index) => {
          return <CardUser user={user} key={index} />;
        })}
      </div>
    </div>
  );
};
