import style from "./styles/card.module.css";
import img from "./assets/img.svg";
export const CardUser = ({ user }) => {
  return (
    <div>
      <img src={img} />
      <div className={style.contTxtCard}>
        <h3 className={style.nameCard}>{user.name}</h3>
        <h3 className={style.rolCard}>{user.rol}</h3>
        <h4 className={style.socialCard}>{user.social}</h4>
      </div>
    </div>
  );
};
