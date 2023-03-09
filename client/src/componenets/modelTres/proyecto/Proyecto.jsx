import style from "./styles/proyecto.module.css";
import imgUsers from "./assets/imgUsers.svg";
import imgBook from "./assets/imgBook.svg";
export const Proyecto = () => {
  return (
    <div className={style.contGeneral}>
      <h1 className={style.ProyectoTitle}>Proyecto</h1>
      <div className={style.conSections}>
        <div className={style.sectionUno}>
          <div className={style.conTxt}>
            <h1 className={style.proyectTitleFunc}>
              Más libros, para más personas
            </h1>
            <p className={style.proyectTxt}>
              Creemos que vivir de escribir no debería ser una odisea. Por eso
              construimos una herramienta para publicar, vender y distribuir
              libros de forma mucho más simple.
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
              Diseñamos un modelo de impresión eficiente que ofrece libros más
              baratos que siempre están disponibles, sin importar distancias, ni
              fronteras.
            </p>
          </div>
          <img src={imgBook} className={style.imgProyecto} />
        </div>
      </div>
    </div>
  );
};
