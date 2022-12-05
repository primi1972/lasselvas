import { motion } from "framer-motion";

const textoHistoria = ({titulo, texto, imagen}) => {
    return(
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: [0, 20, 0], opacity: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
        className="d-flex justify-content-between align-items-center minwidth py-5"
      >
        <div className="texto w-50">
          <h3 className="text-center">{titulo}</h3>
          <p className="align-justify">{texto}</p>
        </div>
        <img src={imagen} alt="" style={{width: "400px"}}/>
      </motion.div>
    )    
}
export default textoHistoria;