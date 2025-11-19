import React from "react";
import styles from "./About.module.css";
import perfilImg from "../img/yo.png";
import meme from "../img/Meme.jpg";
import arturo from "../img/Arturo.jpg";
import bach from "../img/Batchjpg.jpg";
import conejos from "../img/Conejos.jpg";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="p-4 bg-white rounded shadow-sm">
        <h2>Mi Perfil: Juan Carcaño</h2>
      </div>

      <div className="contenedor my-5">
        <div className="seccion-principal text-center mb-5">
          <img
            src={perfilImg}
            alt="Foto perfil"
            className={`foto-perfil img-fluid rounded-circle shadow ${styles.fotoPerfil}`}
            title="Juan Carcaño"
            style={{ maxWidth: "200px" }}
          />

          <p className="mt-3 lead">
            Líder de Proyectos, Scrum Master e Ingeniero en Sistemas. Apasionado
            por la Inteligencia Artificial, la Automatización de Procesos, Power
            Automate y el desarrollo web. Vivo en Córdoba, Argentina.
          </p>
        </div>
      </div>
      <button
        className="btn btn-danger btn-lg mb-4"
        onClick={() => alert("¡Error debe reiniciar la computadora!")}
      >
        No hagas clic aquí
      </button>
      <section>
        <h2 className={styles.tituloSeccion}>Proyectos y Pasiones</h2>

        <article
          className={`p-3 mb-4 border rounded ${styles.articuloProyecto}`}
        >
          <h3 className="subtitulo-proyecto">Clima en Córdoba</h3>

          <p className={styles.parrafoProyecto}>
            App para consultar el clima actual en Córdoba Capital, desarrollada
            para practicar integración con APIs externas.
          </p>
          <a
            href="https://www.google.com/search?q=clima+en+cordoba"
            target="_blank"
            className={`btn btn-info text-white ${styles.enlaceClima}`}
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-clima-296-1100758.png"
              alt="Clima en Córdoba"
              title="Ver clima en Córdoba"
              className={styles.iconoClima}
              style={{ height: "60px" }}
            />
            Ver Clima Ahora
          </a>
        </article>

        <article
          className={`p-3 mb-4 border rounded ${styles.articuloProyecto}`}
        >
          <h3 className="subtitulo-proyecto">Mis Mascotas (El equipo)</h3>

          <div className={`row text-center ${styles.contenedorMascotas}`}>
            <div className="col-6 col-md-3 mb-3">
              <img
                className={`img-fluid rounded shadow-sm ${styles.imagenMascota}`}
                src={bach}
                alt="Batch"
                title="Batch"
              />
              <p className={`mt-2 ${styles.nombreMascota}`}>Batch</p>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <img
                className={`img-fluid rounded shadow-sm ${styles.imagenMascota}`}
                src={conejos}
                alt="Sujeto y Piqui"
                title="Sujeto y Piqui"
              />
              <p className={`mt-2 ${styles.nombreMascota}`}>Conejos</p>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <img
                className={`img-fluid rounded shadow-sm ${styles.imagenMascota}`}
                src={meme}
                alt="Meme"
                title="Meme"
              />
              <p className={`mt-2 ${styles.nombreMascota}`}>Meme</p>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <img
                className={`img-fluid rounded shadow-sm ${styles.imagenMascota}`}
                src={arturo}
                alt="Arturo"
                title="Arturo"
              />
              <p className={`mt-2 ${styles.nombreMascota}`}>Arturo</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
