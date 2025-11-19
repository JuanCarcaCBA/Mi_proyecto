import React, { useState, useEffect } from "react";
import Card from "../componentes/Card";
import Paginacion from '../features/Paginacion'; // ⬅️ 1. Importar Paginacion
import styles from './Suscripciones.module.css';

// GENERODE DATOS ALEATORIOS 
const generateProducts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Suscripción Premium ${i + 1}`,
    price: (Math.random() * 100).toFixed(2), 
  }));
};

function Suscripciones() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  
  

  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina] = useState(9); 

  useEffect(() => {
    const loadLocalProducts = () => {
      try {
        setLoading(true);
        setError(null);
        

        const allProducts = generateProducts(30); 
        
        setTimeout(() => {
            setProducts(allProducts);
            setLoading(false);
        }, 500); 

      } catch (err) {
        console.error("Error al generar productos locales:", err);
        setError("Error al generar datos locales para simulación.");
        setLoading(false);
      }
    };

    loadLocalProducts();
  }, []); 

  // ⬅️ 3. LÓGICA DE CORTE PARA LA PÁGINA ACTUAL
  const indexOfLastProduct = paginaActual * productosPorPagina;
  const indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
  // Obtenemos solo los productos que deben mostrarse en esta página
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2 className={styles.loadingMessage}>Cargando Suscripciones...</h2>
        <div className={styles.spinnerContainer}>
          <div className={`spinner-border ${styles.customSpinner}`} role="status"></div>
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className={`container my-5 alert ${styles.errorMessage}`}>Error: {error}</div>;
  }

  return (
    <div className={`container ${styles.suscripcionesContainer}`}>
      <h1 className={`my-4 ${styles.tituloPrincipal}`}>Planes de Suscripción ({products.length})</h1>
      
      {/* ⬅️ 4. Renderizamos SOLO los productos de la página actual */}
      <div className={`row ${styles.cardsRow}`}>
        {currentProducts.map(product => ( 
          <div className={`col-md-4 mb-4 ${styles.cardWrapper}`} key={product.id}> 
            <Card productData={product} /> 
          </div>
        ))}
      </div>
      
      {/* ⬅️ 5. Incluimos el componente de Paginación */}
      {products.length > productosPorPagina && (
        <Paginacion
          productosPorPagina={productosPorPagina}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          totalProductos={products.length}
        />
      )}
    </div>
  );
}

export default Suscripciones;