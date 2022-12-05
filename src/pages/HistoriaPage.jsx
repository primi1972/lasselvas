import { Fragment } from "react";
import { motion } from "framer-motion";
import TextoHistoria from "../components/TextoHistoria";

import imagen1 from "../assets/historia/medalla.png";

import Banner1 from "../assets/historia/bg.jpg";

export default function HistoriaPage() {
  return (
    <Fragment>
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center align-items-center flex-wrap flex-column my-5 px-5 maxwidth mx-auto">
        <h1 className="text-success text-uppercase text-center">Historia</h1>

        <TextoHistoria
          titulo="El nacimiento de Madererias las Selvas"
          texto="Madereria las Selvas nacio Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Saepe minima sit a eum sint dolore perferendis
          provident alias, necessitatibus sequi rem eaque nisi voluptate
          odio, iusto iure? Officiis culpa quibusdam sapiente perferendis.
          Enim facilis modi totam quisquam. Aut optio quisquam obcaecati,
          delectus earum libero adipisci dolor culpa ab, voluptatem corporis
          perspiciatis sint illo iste? Dignissimos provident praesentium
          consectetur quisquam dolorum."
          imagen={imagen1}
        />

        <TextoHistoria
          titulo="Los primeros años de la empresa"
          texto="Madereria las Selvas nacio Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Saepe minima sit a eum sint dolore perferendis
          provident alias, necessitatibus sequi rem eaque nisi voluptate
          odio, iusto iure? Officiis culpa quibusdam sapiente perferendis.
          Enim facilis modi totam quisquam. Aut optio quisquam obcaecati,
          delectus earum libero adipisci dolor culpa ab, voluptatem corporis
          perspiciatis sint illo iste? Dignissimos provident praesentium
          consectetur quisquam dolorum."
          imagen={imagen1}
        />

<TextoHistoria
          titulo="El crecimiento desde el principio"
          texto="Madereria las Selvas nacio Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Saepe minima sit a eum sint dolore perferendis
          provident alias, necessitatibus sequi rem eaque nisi voluptate
          odio, iusto iure? Officiis culpa quibusdam sapiente perferendis.
          Enim facilis modi totam quisquam. Aut optio quisquam obcaecati,
          delectus earum libero adipisci dolor culpa ab, voluptatem corporis
          perspiciatis sint illo iste? Dignissimos provident praesentium
          consectetur quisquam dolorum."
          imagen={imagen1}
        />

<TextoHistoria
          titulo="Renovando la empresa y vision hacia el futuro"
          texto="Madereria las Selvas nacio Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Saepe minima sit a eum sint dolore perferendis
          provident alias, necessitatibus sequi rem eaque nisi voluptate
          odio, iusto iure? Officiis culpa quibusdam sapiente perferendis.
          Enim facilis modi totam quisquam. Aut optio quisquam obcaecati,
          delectus earum libero adipisci dolor culpa ab, voluptatem corporis
          perspiciatis sint illo iste? Dignissimos provident praesentium
          consectetur quisquam dolorum."
          imagen={imagen1}
        />

      </section>
    </Fragment>
  );
}
