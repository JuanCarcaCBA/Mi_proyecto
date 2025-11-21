import React from 'react';
import styles from './Paginacion.module.css'; 

export default function Paginacion({
    productosPorPagina,
    paginaActual,
    setPaginaActual,
    totalProductos,
}) {
    const pageNumber = [];
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        pageNumber.push(i);
    }
    
    const paginaAnterior = () => {
        if (paginaActual > 1) { 
            setPaginaActual(paginaActual - 1);
        }
    };

    const paginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const paginaEspecifica = (num) => setPaginaActual(num);

    return (
      
        <div className={styles.paginacionContainer}>
            
            <button 
                onClick={paginaAnterior} 
                disabled={paginaActual === 1}
                className={styles.pageButton} 
            >
                Anterior
            </button>

            {pageNumber.map((number) => (
                <button
                    key={number}
                    onClick={() => paginaEspecifica(number)}
                    className={`${styles.pageButton} ${ 
                        number === paginaActual ? styles.activeButton : '' 
                    }`}
                >
                    {number}
                </button>
            ))}

            <button 
                onClick={paginaSiguiente} 
                disabled={paginaActual === totalPaginas}
                className={styles.pageButton} 
            >
                Siguiente
            </button>
        </div>
    );
}