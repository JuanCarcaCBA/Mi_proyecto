import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'


export default function Layout({ children }){
return (
<div className={styles.page}>
<Navbar />
<main className={`container ${styles.main}`}>{children}</main>
<Footer />
</div>
)
}