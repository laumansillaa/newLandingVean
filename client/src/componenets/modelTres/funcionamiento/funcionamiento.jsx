import style from "./styles/func.module.css";
import imgOne from "./assets/one.svg";
import imgTwo from "./assets/two.svg";
import imgThree from "./assets/three.svg";

export const Funcionamiento = () => {
  return (
    <div className={style.contFunc}>
      <div className={style.contTitle}>
        <h1 className={style.titleFunc}>Cómo funciona</h1>
      </div>
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
            <h1 className={style.num}>2</h1>
            <h4 className={style.txtItem}>
              Conseguí ingresos luego de cada compra.
            </h4>
          </div>
        </div>
      </div>
      <svg
        width="1980"
        height="181"
        viewBox="0 0 1980 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 165C198 165 198 181 396 181C594 181 594 165 792 165C990 165 990 181 1188 181C1386 181 1386 165 1584 165C1782 165 1782 181 1980 181V16C1782 16 1782 0 1584 0C1386 0 1386 16 1188 16C990 16 990 0 792 0C594 0 594 16 396 16C198 16 198 0 0 0V165Z"
          fill="#64392C"
        />
      </svg>
    </div>
  );
};
