import imgFooter from "./assets/imgFoot.svg";
import tw from "./assets/tw.svg";
import tel from "./assets/tel.svg";
import veanLogo from "./assets/veanLogo.svg";
import imgD from "./assets/imgD.svg";
import style from "./styles/footer.module.css";
export const Footer = () => {
  return (
    <div className={style.contFooter}>
      <img src={imgD} className={style.imgIcon} />
      <div className={style.contTxtFoot}>
        <h3 className={style.txtFooter}>
          Ayudanos a construir Vean con tus ideas.
        </h3>
        <h3 className={style.txtFooter}>¿Se te ocurren cosas?</h3>
        <button className={style.btnFooter}>Contactanos</button>
      </div>
      <div className={style.footer}>
        <img src={veanLogo} />
        <div className={style.contSocial}>
          <a href="https://twitter.com/veanbooks" target="_blank">
            <img src={tw} />
          </a>
          <a href="https://telegram.me/newsvean" target="_blank">
            <img src={tel} />
          </a>
        </div>
      </div>
    </div>
  );
};
