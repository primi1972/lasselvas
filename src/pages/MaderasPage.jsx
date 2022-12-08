import { Fragment } from "react";

import "../styles/MaderasPage.css";
import Banner1 from "../assets/maderas/bg.jpg";
import CardMadera from "../components/CardMadera";
import Mad1 from "../assets/maderas/mad1-01.jpg";
import Mad2 from "../assets/maderas/mad2-01.jpg";
import Mad3 from "../assets/maderas/mad3-01.jpg";
import Mad4 from "../assets/maderas/mad4-01.jpg";

const Maderas = () => {
  return (
    <Fragment>
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center align-items-start flex-wrap my-5 maxwidth mx-auto">
        <div className="titulo w-100">
          <h1 className="text-success text-uppercase text-center">Maderas</h1>
          <h5 className="text-center fw-light my-3">
            Manejamos las maderas desde su origen producidas desde nuestros
            acerraderos con lo cual garantizamos el producto que vendemos.
          </h5>
        </div>

        <div className="d-flex flex-wrap justify-content-center">

          <CardMadera imagen={Mad1} titulo="Alamo Blanco" enlace= "/maderasDetalle/1" />
          <CardMadera imagen={Mad2} titulo="Alamo" enlace= "/maderasDetalle/2" />
          <CardMadera imagen={Mad3} titulo="Olmo" enlace= "/maderasDetalle/3" />
          <CardMadera imagen={Mad4} titulo="Pino Blanco" enlace= "/maderasDetalle/4" />

        </div>
      </section>
    </Fragment>
  );
};

export default Maderas;
