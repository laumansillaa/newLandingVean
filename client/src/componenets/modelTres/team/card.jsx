import style from "./styles/card.module.css";
import img from "./assets/img.svg";
import { Avatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
export const CardUser = ({ user }) => {
  return (
    <div className={style.contCard}>
      <Avatar src={user.image} sx={{ width: 100, height: 100 }} />
      <div className={style.contTxtCard}>
        <h3 className={style.nameCard}>{user.name}</h3>
        <h3 className={style.rolCard}>{user.rol}</h3>
        {user.social ? (
          <div className={style.contSocial}>
            <TwitterIcon sx={{ color: "#f5d8b9", height: 18 }} />
            <h4 className={style.socialCard}>{user.social}</h4>
          </div>
        ) : null}
      </div>
    </div>
  );
};
