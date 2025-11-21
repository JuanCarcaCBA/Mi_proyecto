import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from "../componentes/Card"; 
import Paginacion from '../features/Paginacion'; 
import styles from './Suscripciones.module.css';

// ❌ Se elimina la función generateProducts
// const generateProducts = (count) => { ... };

// 💡 URL DE LA API: Asumimos puerto 3000 con el prefijo /api, 
// ajusta si tu backend usa otra configuración.
const API_URL = "http://localhost:3000/api/suge"; 

function Suscripciones() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  
  
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina] = useState(9); 

  // 💡 NUEVA LÓGICA DE FETCH
  useEffect(() => {
    const fetchSuscripciones = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);
        
        // Manejo de errores HTTP (ej: 404, 500)
        if (!res.ok) {
            throw new Error(`Error al cargar datos: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        
        // 💡 Importante: La data debe ser un array de suscripciones
        setProducts(data); 

      } catch (err) {
        console.error("Error al obtener suscripciones:", err);
        setError(err.message || "Error al conectar con la API.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuscripciones();
    
  }, []); 

  // Lógica de Paginación (Corte de array)
  const indexOfLastProduct = paginaActual * productosPorPagina;
  const indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
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
      
      {/* Renderizamos solo los productos de la página actual */}
      <div className={`row ${styles.cardsRow}`}>
        {currentProducts.map(product => ( 
          <div className={`col-md-4 mb-4 ${styles.cardWrapper}`} key={product._id}> {/* Usamos _id de MongoDB */}
            {/* Pasamos solo el ID y los datos limitados para la card */}
            <Card 
              id={product._id} 
              nombre={product.Nombre} 
              precio={product.Precio}
            /> 
          </div>
        ))}
      </div>
      
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