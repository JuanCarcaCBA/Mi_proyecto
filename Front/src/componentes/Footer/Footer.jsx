import React from 'react'
import styles from './Footer.module.css'


export default function Footer(){
return (
<footer className={`py-3 ${styles.footer}`}>
<div className="container text-center">
<p>© {new Date().getFullYear()} - Todos los derechos reservados</p>
</div>
</footer>
)
}