import React from "react";
import "../styles/MaderasPage.css";
import { Fragment } from "react";

const Madera = (props) => {
  return (
    <Fragment>
      <div className="card m-3 border-primary text-decoration-none text-black">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="bandera position-absolute text-white d-flex fw-semibold">
          <div className="bandera_inicio d-flex align-items-center justify-content-center ps-4">
            Información
          </div>
          <div className="bandera_punta"></div>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{props.titulo}</h5>
        </div>
      </div>
    </Fragment>
  );
};

export default Madera;
