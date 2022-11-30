import { Fragment } from "react";
import Banner1 from "../assets/Servicios/bg.jpg";

const Servicios = () => {
  return (
    <Fragment>
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center maxwidth align-items-start flex-wrap mx-auto my-5">
        <div className="titulo w-100">
          <h1 className="text-success text-uppercase text-center">Servicios</h1>
          <h5 className="text-center fw-light my-3">
            Fletes, maquilado, estufado, instalacion y todo lo que necesites lo
            encuentras con nosotros.
          </h5>
        </div>
        <div className="Fletes"></div>
        <div className="Instalacion"></div>
        <div className="Estufado"></div>
        <div className="Maquilado"></div>
      </section>



    </Fragment>
  );
};

export default Servicios;
