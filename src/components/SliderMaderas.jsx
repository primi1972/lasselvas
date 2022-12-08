import { NavLink } from "react-router-dom";
import "../styles/SliderMaderas.css";

export default function SliderMaderas(props) {
  const Imagenes = props.imagenes;
  const elementosImg = [];

  function clickImagen(e) {
    document.getElementById("imgPrincipal").src = e.target.src;
  }

  Imagenes.forEach((data, index) => {
    elementosImg.push(
      <img
        key = { index }
        onClick={clickImagen}
        src={data}
        alt=""
        width="100px"
        height="100px"
        className="miniaturas"
      />
    );
  });

  // window.addEventListener('DOMContentLoaded', (event) => {
  //   console.log('page is fully loaded');
  //   window.scrollTo(0, 0);
  // });

  return (
      <div className="slidermadera d-flex gap-4 flex-wrap">
        <div className="d-flex justify-content-center align-items-center p-1 mx-auto">
          <div className="d-flex flex-column gap-1">
            {elementosImg}
          </div>
          <img
            src={Imagenes[0]}
            width="500px"
            height="500px"
            className="ms-1 imgPrincipal"
            id="imgPrincipal"
          />
        </div>
        <div className="descripcion mx-auto">
          <h3 className="text-uppercase text-success">{props.nombre}</h3>
          <div className="informacion">
            <p>Información</p>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Espesor</th>
                  <td>{props.espesor}</td>
                </tr>
                <tr>
                  <th scope="row">Largo</th>
                  <td>{props.largo}</td>
                </tr>
                <tr>
                  <th scope="row">Ancho</th>
                  <td>{props.ancho}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <NavLink className="btn btn-success fs-5" to="/contacto">
            Cotizar
          </NavLink>
        </div>
      </div>
  );
}

SliderMaderas.defaultProps = {
  nombre: "Maderas",
  espesor: "1 , 1 1/2 y 2 pulgadas",
  largo: "2.5mts",
  ancho: "0.45mts",
};
