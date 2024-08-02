import React, { useState, useEffect } from "react";
import Linea1 from "../Assets/349x209 - 1991.png";
import Linea2 from "../Assets/349x209 - 2005.png";
import Linea3 from "../Assets/349x209 - 2008.png";
import Linea4 from "../Assets/349x209 - 2009.png";
import Linea5 from "../Assets/349x209 - 2022.png";
import Linea6 from "../Assets/349x209 - 2023.png";
import Linea7 from "../Assets/453x271 1991.png";
import Linea8 from "../Assets/453x271 2005.png";
import Linea9 from "../Assets/453x271 2008.png";
import Linea10 from "../Assets/453x271 2009.png";
import Linea11 from "../Assets/453x271 2022.png";
import Linea12 from "../Assets/453x271 2023.png";
/*import Vector from "../Assets/Vector.jpg";*/
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import "./Historia.css";

const Historia = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");
  const [currentImage1, setCurrentImage1] = useState(Linea1);
  const [currentImage2, setCurrentImage2] = useState(Linea2);
  const [currentImage3, setCurrentImage3] = useState(Linea3);
  const [currentImage4, setCurrentImage4] = useState(Linea4);
  const [currentImage5, setCurrentImage5] = useState(Linea5);
  const [currentImage6, setCurrentImage6] = useState(Linea6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1919) {
        setCurrentImage1(Linea7);
      } else {
        setCurrentImage1(Linea1);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage2(Linea8);
      } else {
        setCurrentImage2(Linea2);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage3(Linea9);
      } else {
        setCurrentImage3(Linea3);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage4(Linea10);
      } else {
        setCurrentImage4(Linea4);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage5(Linea11);
      } else {
        setCurrentImage5(Linea5);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage6(Linea12);
      } else {
        setCurrentImage6(Linea6);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="todo-historia">
      <div className="home-containerHistoria">
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
        <div className="txt-redesHistoria">
          <div className="txt-container-empresaHistoria">
            <div className="linea-titulo2">
              <hr class="mi-lineaHis"></hr>
              <p className="nuestra-empresaHis">{t("li.OUR COMPANY")}</p>
            </div>
            <h2 className="titulo-historia">{t("txtTituloHistoria.txt1")}</h2>
            <h2 className="nuestra-historia-txt">
              <span className="txt-empresa-spanHis">{t("txtTituloHistoria.txt2")}{" "}</span>{t("txtTituloHistoria.txt3")}{" "}
              <span className="txt-empresa-spanHis">{t("txtTituloHistoria.txt4")}{" "}</span>{t("txtTituloHistoria.txt5")}{" "}
              <span className="txt-empresa-spanHis">{t("txtTituloHistoria.txt6")}{" "}</span>{t("txtTituloHistoria.txt7")}{" "}
              <span className="txt-empresa-spanHis">{t("txtTituloHistoria.txt8")}</span>{" "}
              {t("txtTituloHistoria.txt9")}
            </h2>
          </div>
        </div>
      </div>

      <div className="timeline-container">
        <ul className="timeline">
          <li className="li-linea1" data-aos="fade-right">
            1991<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt1")}</div>
            <hr className="linea-linea"></hr>
            <br></br>
            <img src={currentImage1} alt="" className="ImagenHistoria2" />
          </li>

          <li className="li-linea2i" data-aos="fade-left">
            1995<br></br>
            <div className="txt-linea1">Combustibles del Norte</div>
            <hr className="linea-linea2"></hr>
          </li>

          <li className="li-linea3" data-aos="fade-right">
            1996<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt2")}</div>
            <hr className="linea-linea"></hr>
          </li>

          <li className="li-linea4i" data-aos="fade-left">
            2000<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt3")}</div>
            <hr className="linea-linea2"></hr>
          </li>

          <li className="li-linea2" data-aos="fade-right">
            2003<br></br>
            <div className="txt-linea1">Gas del Norte</div>
            <hr className="linea-linea"></hr>
          </li>

          <li className="li-linea3i" data-aos="fade-left">
            2004<br></br>
            <div className="txt-linea1"> CN Agro</div>
            <hr className="linea-linea2"></hr>
          </li>

          <li className="li-linea1" data-aos="fade-right">
            2005<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt4")}</div>
            <hr className="linea-linea"></hr>
            <br></br>
            <img src={currentImage2} alt="" className="ImagenHistoria2" />
          </li>

          <li className="li-linea5" data-aos="fade-left">
            2008<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt5")}</div>
            <hr className="linea-linea2"></hr>
            <br></br>
            <img src={currentImage3} alt="" className="ImagenHistoria1" />
          </li>

          <li className="li-linea6i" data-aos="fade-right">
            2009<br></br>
            <div className="txt-linea1">Planta Güemes</div>
            <hr className="linea-linea"></hr>
            <br></br>
            <img src={currentImage4} alt="" className="ImagenHistoria2" />
          </li>

          <li className="li-linea4i" data-aos="fade-left">
            2014<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt6")}</div>
            <hr className="linea-linea2"></hr>
          </li>

          <li className="li-linea2" data-aos="fade-right">
            2015<br></br>
            <div className="txt-linea1">YPF Agro Las Lajitas</div>
            <hr className="linea-linea"></hr>
          </li>

          <li className="li-linea3i" data-aos="fade-left">
            2018<br></br>
            <div className="txt-linea1">YPF Agro Embarcación</div>
            <hr className="linea-linea2"></hr>
          </li>

          <li className="li-linea4" data-aos="fade-right">
            2021<br></br>
            <div className="txt-linea1">{t("txtLienaTiempo.txt7")}</div>
            <hr className="linea-linea"></hr>
          </li>

          <li className="li-linea5" data-aos="fade-left">
            2022<br></br>
            <div className="txt-linea1">
            {t("txtLienaTiempo.txt8")}<br></br>{t("txtLienaTiempo.txt9")}
            </div>
            <hr className="linea-linea2"></hr>
            <br></br>
            <img src={currentImage5} alt="" className="ImagenHistoria1" />
          </li>

          <li className="li-linea6i" data-aos="fade-right">
            2023<br></br>
            <div className="txt-linea1">
            {t("txtLienaTiempo.txt10")}<br></br>{t("txtLienaTiempo.txt11")}
            </div>
            <hr className="linea-linea"></hr>
            <br></br>
            <img src={currentImage6} alt="" className="ImagenHistoria2" />
          </li>
        </ul>
      </div>
      <div className="footerHis">
        <div className="txt1">
          <p className="txt-foo">{t("txt-foo2.Footer1")}</p>
        </div>
        <div className="txt2">
          <p className="txt-foo">
          {t("txt-foo2.Footer")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
