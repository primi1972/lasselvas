import { motion } from "framer-motion";
import imagenFondo from "../assets/historia/tronco.jpg";
import "../styles/historia.css";

const textoHistoria = ({ titulo, texto, imagen }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: [0, 20, 0], opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
      className="texto-historia d-flex justify-content-center gap-3 align-items-center minwidth py-5 flex-wrap"
    >
      <div className="texto text-white minwidth w-50">
        <img src={imagenFondo} alt="" />
        <h3 className="text-center px-5 py-3 shadow">{titulo}</h3>
        <p className="align-justify px-5 py-3 shadow">{texto}</p>
      </div>
      <div className="postal minwidth"></div>
    </motion.div>
  );
};
export default textoHistoria;
