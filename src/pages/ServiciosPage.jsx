import Banner1 from "../assets/Servicios/bg.jpg";

const Servicios = () => {
  return (
      <div className="fondo_obscuro">
        <img src={Banner1} className="banner1" alt="" />
        <section className="d-flex justify-content-center maxwidth align-items-start flex-wrap py-5 mx-auto">
          <div className="titulo w-100">
            <h1 className="text-success text-uppercase text-center">
              Servicios
            </h1>
            <h5 className="text-center fw-light my-3">
              Fletes, maquilado, estufado, instalacion y todo lo que necesites
              lo encuentras con nosotros.
            </h5>
          </div>
          <div className="text-white d-flex w-90 my-5 gap-4 justify-content-center flex-wrap">
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i className="fa-solid fa-truck-fast fa-2xl my-5 text-center"></i>
              <h3 className="text-center text-success pb-3">Flete</h3>
              <p className="text-center">
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
                className="fa-solid fa-temperature-high fa-2xl my-5 text-center"
              ></i>
              <h3 className="text-center text-success pb-3">Material Estufado</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint adipisci, dolore voluptates minus natus iusto voluptas vel
                saepe error rerum ex ad, eaque necessitatibus neque numquam eius
                accusamus rem. In suscipit earum placeat quibusdam tenetur
                voluptates ea ab cum eius odio est fugiat perspiciatis libero
                culpa, saepe deserunt consequuntur.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i className="fa-solid fa-store fa-2xl my-5 text-center"></i>
              <h3 className="text-center text-success pb-3">
                Abasto seguro y continuo
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint adipisci, dolore voluptates minus natus iusto voluptas vel
                saepe error rerum ex ad, eaque necessitatibus neque numquam eius
                accusamus rem. In suscipit earum placeat quibusdam tenetur
                voluptates ea ab cum eius odio est fugiat perspiciatis libero
                culpa, saepe deserunt consequuntur.
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
              <i className="fa-solid fa-clipboard fa-2xl my-5 text-center"></i>
              <h3 className="text-center text-success pb-3">Calidad al Cliente</h3>
              <p className="text-center">
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
  );
};

export default Servicios;
