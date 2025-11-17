import React from 'react'
import styles from './About.module.css'
import perfilImg from '../img/yo2.png';

export default function About(){
return (
<section className={styles.about}>
<div className="p-4 bg-white rounded shadow-sm">
<h2>Mi Perfil: Juan Carcaño</h2>
</div>
 <div class="contenedor my-5">
      <div class="seccion-principal text-center mb-5">
        {/* {<img
          src={perfilImg}
          alt="Foto perfil"
          class="foto-perfil img-fluid rounded-circle shadow"
          title="Juan Carcaño"
          style="max-width: 200px"
        /> } */}
        <p class="mt-3 lead">
          Líder de Proyectos, Scrum Master e Ingeniero en Sistemas. Apasionado
          por la Inteligencia Artificial, la Automatización de Procesos, Power
          Automate y el desarrollo web. Vivo en Córdoba, Argentina.
        </p>
      </div>
      
    </div>
</section>
)
}