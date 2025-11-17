import React from 'react'
import styles from './About.module.css'


export default function About(){
return (
<section className={styles.about}>
<div className="p-4 bg-white rounded shadow-sm">
<h2>About</h2>
<p>Plantilla profesional mínima lista para expandir: routing, redux, thunks y componentes con CSS Modules.</p>
</div>
</section>
)
}