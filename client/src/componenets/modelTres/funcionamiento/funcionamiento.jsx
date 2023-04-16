import style from "./styles/func.module.css";
import imgOne from "./assets/one.svg";
import imgTwo from "./assets/two.svg";
import imgThree from "./assets/three.svg";
import wave from "./assets/wave.svg";

export const Funcionamiento = () => {
  return (
    <div className={style.contFunc} id="funcionamiento">
      <div className={style.contTitle}>
        <h1 className={style.titleFunc}>Cómo funciona</h1>
      </div>
      <div className={style.contAux}>
        <div className={style.conSection}>
          <div className={style.contItems}>
            <img src={imgOne} className={style.iconFunc} />
            <div className={style.contTxt}>
              <h1 className={style.num}>1</h1>
              <h4 className={style.txtItem}>
                Publica tu ejemplar con nuestro formulario de ingreso.
              </h4>
            </div>
          </div>
          <div className={style.contItems}>
            <img src={imgTwo} className={style.iconFunc} />
            <div className={style.contTxt}>
              <h1 className={style.num}>2</h1>
              <h4 className={style.txtItem}>
                Ponelo a la venta en nuestro marketplace.
              </h4>
            </div>
          </div>
          <div className={style.contItems}>
            <img src={imgThree} className={style.iconFunc} />
            <div className={style.contTxt}>
              <h1 className={style.num}>3</h1>
              <h4 className={style.txtItem}>
                Conseguí ingresos luego de cada compra.
              </h4>
            </div>
          </div>
        </div>
        <img src={wave} className={style.wave} />
      </div>
    </div>
  );
};
