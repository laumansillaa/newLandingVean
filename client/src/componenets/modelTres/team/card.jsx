import style from "./styles/card.module.css";
import img from "./assets/img.svg";
import { Avatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaDiscord } from "react-icons/fa";
import { color } from "@mui/system";
export const CardUser = ({ user }) => {
  return (
    <div className={style.contCard}>
      <Avatar src={user.image} sx={{ width: 100, height: 100 }} />
      <div className={style.contTxtCard}>
        <h3 className={style.nameCard}>{user.name}</h3>
        <h3 className={style.rolCard}>{user.rol}</h3>

        <div className={style.contSocial}>
          {user.social && (
            <>
              <TwitterIcon sx={{ color: "#201a1a", height: 18 }} />
              <h4 className={style.socialCard}>{user.social}</h4>
            </>
          )}

          {user.discord && (
            <>
              <FaDiscord
                style={{ color: "#201a1a", margin: "0px 4px 0px 0px" }}
              />
              <h4 className={style.socialCard}>{user.discord}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
