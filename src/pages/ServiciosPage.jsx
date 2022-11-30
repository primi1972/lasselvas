import { Fragment } from "react";
import Banner1 from "../assets/Servicios/bg.jpg";

const Servicios = () => {
  return (
    <Fragment>
      <div className="fondo_obscuro">
        <img src={Banner1} className="banner1" alt="" />
        <section className="d-flex justify-content-center maxwidth align-items-start flex-wrap mx-auto my-5">
          <div className="titulo w-100">
            <h1 className="text-success text-uppercase text-center">
              Servicios
            </h1>
            <h5 className="text-center fw-light my-3">
              Fletes, maquilado, estufado, instalacion y todo lo que necesites
              lo encuentras con nosotros.
            </h5>
          </div>

          <div className="d-flex justify-content-around maxwidth align-items-end flex-wrap gap-2">
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i className="fa-solid fa-truck-fast fa-2xl my-5 text-center text-white"></i>
              <h3 className="text-center text-success">Flete</h3>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint adipisci, dolore voluptates minus natus iusto voluptas vel
                saepe error rerum ex ad, eaque necessitatibus neque numquam eius
                accusamus rem. In suscipit earum placeat quibusdam tenetur
                voluptates ea ab cum eius odio est fugiat perspiciatis libero
                culpa, saepe deserunt consequuntur.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i
                className="fa-solid fa-temperature-high fa-2xl my-5 text-center text-white"
              ></i>
              <h3 className="text-center text-success">Material Estufado</h3>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint adipisci, dolore voluptates minus natus iusto voluptas vel
                saepe error rerum ex ad, eaque necessitatibus neque numquam eius
                accusamus rem. In suscipit earum placeat quibusdam tenetur
                voluptates ea ab cum eius odio est fugiat perspiciatis libero
                culpa, saepe deserunt consequuntur.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i className="fa-solid fa-store fa-2xl my-5 text-center text-white"></i>
              <h3 className="text-center text-success">
                Abasto seguro y continuo
              </h3>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint adipisci, dolore voluptates minus natus iusto voluptas vel
                saepe error rerum ex ad, eaque necessitatibus neque numquam eius
                accusamus rem. In suscipit earum placeat quibusdam tenetur
                voluptates ea ab cum eius odio est fugiat perspiciatis libero
                culpa, saepe deserunt consequuntur.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i className="fa-solid fa-clipboard fa-2xl my-5 text-center text-white"></i>
              <h3 className="text-center text-success">Calidad al Cliente</h3>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint adipisci, dolore voluptates minus natus iusto voluptas vel
                saepe error rerum ex ad, eaque necessitatibus neque numquam eius
                accusamus rem. In suscipit earum placeat quibusdam tenetur
                voluptates ea ab cum eius odio est fugiat perspiciatis libero
                culpa, saepe deserunt consequuntur.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Servicios;
