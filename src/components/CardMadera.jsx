import "../styles/MaderasPage.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Madera = ({ imagen, titulo, enlace }) => {
  return (
    <Fragment>
      <NavLink to={enlace}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="tarjeta m-3 border-primary text-black shadow">
            <div className="bandera text-white d-flex fw-semibold">
              <div className="bandera_inicio d-flex align-items-center justify-content-center ps-4">
                Información
              </div>
              <div className="bandera_punta"></div>
            </div>
            <img src={imagen} className="" alt="..." />
            <p className="text-center titulo py-2 fs-3">{titulo}</p>
          </div>
        </motion.div>
      </NavLink>
    </Fragment>
  );
};

export default Madera;
