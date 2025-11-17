import React from 'react'
import styles from './Footer.module.css'


export default function Footer(){
return (
<footer className={`py-3 ${styles.footer}`}>
<div className="container text-center">
<small>© {new Date().getFullYear()} - MiProyecto JUAN</small>
</div>
</footer>
)
}