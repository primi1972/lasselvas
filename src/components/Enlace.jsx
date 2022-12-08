import { NavLink } from "react-router-dom";

const Enlace = ({nombre = 'inicio', enlace = '/'}) => {
  return(
    <li className="nav-item">
    <NavLink
      className="nav-link fs-5 d-flex flex-column"
      to={enlace}
      onClick={() =>
        document.querySelector(".navbar-collapse").classList.remove("show")
      }
    >
      {nombre}
      <span className="lineamenu border-top border-success border-3"></span>
    </NavLink>
  </li>
  )
}
export default Enlace;