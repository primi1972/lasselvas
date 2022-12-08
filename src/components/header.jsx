import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Enlace from "./EnlaceMenu";

import "../styles/header.css";
import Logo from "../assets/header/logo.png";

var scrollPos = 0;
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menuOcultar");
  var menu1 = document.querySelector(".menuOcultar1");
  var flechaArriba = document.querySelector(".flechaArriba");

  if (window.pageYOffset > scrollPos) {
    menu.classList.add("ocultar");
    menu.classList.remove("mostrar");
    menu1.classList.add("ocultar");
    menu1.classList.remove("mostrar");
    flechaArriba.classList.remove("ocultarFlecha");
  } else {
    menu.classList.remove("ocultar");
    menu.classList.add("mostrar");
    menu1.classList.remove("ocultar");
    menu1.classList.add("mostrar");
    flechaArriba.classList.add("ocultarFlecha");
  }
  scrollPos = window.pageYOffset;
});

const Header = () => {
  var [Valor, setValor] = useState(0);

  return (
    <Fragment>
      <header className="position-fixed w-100 zindex-10">
        <nav className="menuOcultar navbar navbar-expand-lg bg-white d-flex minwidth px-5 py-1 shadow mostrar">
          <img src={Logo} alt="" className="navbar-brand logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex-lg justify-content-end order-lg-2"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <Enlace nombre="Inicio" enlace="/"/>
              <Enlace nombre="Nosotros" enlace="/nosotros" />
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle fs-5"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Enlace nombre="Maderas" enlace="/maderas" />
                  <Enlace nombre="Pisos" enlace="/pisos" />
                  <Enlace nombre="Tarimas" enlace="/tarimas" />
                </ul>
              </li>
              <Enlace nombre="Servicios" enlace="/servicios" />
              <Enlace nombre="Catalogo" enlace="/catalogo" />
              <Enlace nombre="Contacto" enlace="/contacto" />
            </ul>
          </div>
        </nav>
        <nav>
          <form
            action=""
            className="menuOcultar1 form d-flex ms-3 p-2 bg-success shadow"
          >
            <input
              type="number"
              name="number"
              className="form-control ms-2"
              onChange={(e) => {
                setValor(e.target.value);
              }}
            />
            <div
              onClick={() => {
                function Metros(numero) {
                  if (numero != null)
                    return (3.28084 * parseFloat(numero)).toFixed(2);
                }
                toast.success(
                  `${parseFloat(Valor).toFixed(2)} pies = ${Metros(Valor)} mts`,
                  {
                    className: "bg-primary fs-4 text-white shadow",
                  }
                );
              }}
              className="btn btn-success mx-1"
            >
              mts
            </div>
            <div
              onClick={() => {
                function Metros(numero) {
                  if (numero != null)
                    return (0.3048 * parseFloat(numero)).toFixed(2);
                }
                toast.success(
                  `${parseFloat(Valor).toFixed(2)} mts = ${Metros(Valor)} pies`,
                  {
                    className: "bg-primary fs-4 text-white shadow",
                  }
                );
              }}
              className="btn btn-success"
            >
              pies
            </div>
          </form>
          <div>
            <Toaster position="top-center" />
          </div>
        </nav>
        <div>
          <a
            onClick={() => window.scrollTo(0, 0)}
            className="ocultarFlecha fa-solid fa-chevron-up fa-2xl flechaArriba position-fixed shadow rounded-circle d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none"
          ></a>
          <a className="fa-brands fa-whatsapp fa-2xl iconWhatsapp position-fixed shadow rounded-circle d-flex justify-content-center align-items-center text-decoration-none"></a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
