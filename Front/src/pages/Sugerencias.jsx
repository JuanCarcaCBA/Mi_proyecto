import React from 'react'
import styles from './About.module.css'
import { useDispatch } from 'react-redux'
import axios from 'axios';

// const dispatch = useDispatch();

// useEffect(() => {
//     axios
//     .get("http://localhost:3000/api/suge")
//     .then((res) => dispatch(setAllProducs(res.data)))
//     .cath((err) => console.error(err));
//     }, [dispatch]);


export default function About(){
return (
<section className={styles.about}>
<div className="p-4 bg-white rounded shadow-sm">
<h2>Sugerencias</h2>
<p>Suge...</p>
</div>
</section>
)
}