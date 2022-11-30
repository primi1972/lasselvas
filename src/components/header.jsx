import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../assets/header/logo.png";

var scrollPos = 0;
window.addEventListener("scroll", function () {
  var menu = document.querySelector("#menuOcultar");
  var flechaArriba = document.querySelector(".flechaArriba");

  if (window.pageYOffset > scrollPos) {
    menu.classList.add("ocultar");
    menu.classList.remove("mostrar");
    flechaArriba.classList.remove("ocultarFlecha");
  } else {
    menu.classList.remove("ocultar");
    menu.classList.add("mostrar");
    flechaArriba.classList.add("ocultarFlecha");
  }
  scrollPos = window.pageYOffset;
});

const Header = () => {
  return (
    <Fragment>
      <header className="position-fixed w-100 zindex1000">
        <nav
          className="navbar navbar-expand-lg bg-white d-flex minwidth px-5 py-1 shadow mostrar"
          id="menuOcultar"
        >
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
              <li className="nav-item">
                <NavLink className="nav-link fs-5 d-flex flex-column" to="/">
                  Inicio
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/nosotros"
                >
                  Nosotros
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
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
                  <li>
                    <NavLink className="dropdown-item text-decoration-none" to="/maderas">
                      Maderas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-decoration-none" to="/pisos">
                      Pisos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-decoration-none" to="/tarimas">
                      Tarimas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown"></li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/servicios"
                >
                  Servicios
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/catalogo"
                >
                  Catalogo
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/contacto"
                >
                  Contacto
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div>
        <a
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="ocultarFlecha fa-solid fa-chevron-up fa-2xl flechaArriba position-fixed shadow rounded-circle d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none"
        ></a>
        <a className="fa-brands fa-whatsapp fa-2xl iconWhatsapp position-fixed shadow rounded-circle d-flex justify-content-center align-items-center text-decoration-none"></a>
      </div>
    </Fragment>
  );
};

export default Header;
