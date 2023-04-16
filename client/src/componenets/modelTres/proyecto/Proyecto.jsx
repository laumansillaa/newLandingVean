import style from "./styles/proyecto.module.css";
import imgUsers from "./assets/imgUsers.svg";
import imgBook from "./assets/imgBook.svg";
import imgTools from "./assets/imgTools.svg";
import imgEye from "./assets/imgEye.svg";
import imgBtc from "./assets/imgBtc.svg";
export const Proyecto = () => {
  return (
    <div className={style.contGeneral} id="project">
      {/* <h1 className={style.ProyectoTitle}>Proyecto</h1> */}
      <div className={style.conSections}>
        <div className={style.sectionUno}>
          <div className={style.conTxt}>
            <h1 className={style.proyectTitleFunc}>
              Más libros, para más personas
            </h1>
            <p className={style.proyectTxt}>
            Creemos que vivir de vender tus libros es posible
Por eso construimos una herramienta para publicar, vender y distribuirlos de forma mucho más simple.
            </p>
          </div>
          <img src={imgUsers} className={style.imgProyecto} />
        </div>
        <div className={style.sectionDos}>
          <div className={style.conTxtDos}>
            <h1 className={style.proyectTitleFunc}>
              Descubrí una industria mejor
            </h1>
            <p className={style.proyectTxtR}>
            Diseñamos un modelo eficiente que ofrece 
libros más baratos que siempre están disponibles,
sin importar distancias, ni fronteras.
            </p>
          </div>
          <img src={imgBook} className={style.imgProyecto} />
        </div>
      </div>
      <div className={style.contGeneralItems}>
        <div className={style.contItems}>
          <img src={imgTools} className={style.imgItem} />
          <div className={style.contTextItem}>
            <h3 className={style.titleItem}>Simple</h3>
            <div>
              <h3 className={style.txtItem}>
                Creamos una{" "}
                <label className={style.txtLabelItem}>herramienta</label> que
                <label className={style.txtLabelItem}>
                  {" conecta personas"}
                </label>{" "}
                que escriben, con personas que leen en todo el mundo.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.contItems}>
          <img src={imgEye} className={style.imgItem} />
          <div className={style.contTextItem}>
            <h3 className={style.titleItem}>Transparente</h3>
            <div>
              <h3 className={style.txtItem}>
                Revisamos cada obra antes de publicarla para{" "}
                <label className={style.txtLabelItem}>evitar plagios.</label>
              </h3>
            </div>
          </div>
        </div>
        <div className={style.contItems}>
          <img src={imgBtc} className={style.imgItem} />
          <div className={style.contTextItem}>
            <h3 className={style.titleItem}>Directa</h3>
            <div>
              <h3 className={style.txtItem}>
                Usamos Blockchain para otorgar{" "}
                <label className={style.txtLabelItem}>
                  {"autenticidad de autor "}
                </label>
                a cada ejemplar y reducir intermediarios.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
