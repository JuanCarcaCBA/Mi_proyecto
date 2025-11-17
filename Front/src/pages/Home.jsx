import React from 'react'
import styles from './Home.module.css'


export default function Home(){
return (
<section className={styles.home}>
<div className="p-4 bg-white rounded shadow-sm">
<h1 className="mb-2">Bienvenido</h1>
<p className="mb-0">JUAN: Proyecto base con Vite, React y Redux Toolkit. Extender según necesidades.</p>
</div>
</section>
)
}