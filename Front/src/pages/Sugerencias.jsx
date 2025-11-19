import React, { useState } from "react";
// Importamos los estilos del módulo específico para Sugerencias (lo crearemos a continuación)
import styles from "./Sugerencias.module.css"; 
// Descomentamos las importaciones innecesarias si no se usan
// import { useDispatch } from "react-redux"; 
// import axios from "axios"; 

// Datos iniciales de las sugerencias (lo que antes estaba en el HTML)
const initialSuggestions = [
  { id: 1, text: "ChatGPT" },
  { id: 2, text: "Canva" },
];

export default function Suge() {
  // Estado para la lista de sugerencias
  const [sugerencias, setSugerencias] = useState(initialSuggestions);
  // Estado para el texto del input
  const [inputText, setInputText] = useState("");
  // Estado para el mensaje de error
  const [error, setError] = useState(null); 

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setError(null); // Limpiar error al empezar a escribir
  };

  // Función para agregar una sugerencia
  const agregarSugerencia = () => {
    const texto = inputText.trim();

    if (texto === "") {
      setError("⚠️ El campo no puede estar vacío.");
      return;
    }

    // Crear un nuevo objeto de sugerencia
    const nuevaSugerencia = {
      // Usamos la fecha y hora para generar un ID único
      id: Date.now(), 
      text: texto,
    };

    // Actualizar el estado: agregar la nueva sugerencia a la lista
    setSugerencias([...sugerencias, nuevaSugerencia]);

    // Limpiar el input y el error
    setInputText("");
    setError(null);
  };

  // Función para eliminar una sugerencia
  const eliminarSugerencia = (idAEliminar) => {
    // Filtrar la lista, manteniendo solo las sugerencias cuyo ID no coincida
    const listaActualizada = sugerencias.filter(
      (sugerencia) => sugerencia.id !== idAEliminar
    );
    setSugerencias(listaActualizada);
  };

  // --- Renderizado JSX ---
  return (
    // Aplicamos estilos de layout (si About.module.css define un contenedor de página)
    <section className="container my-5">
      <div className="p-4 bg-white rounded shadow-sm">
        <h2>Listado de sugerencias</h2>
        
        {/* Usamos los estados y manejadores de eventos de React */}
        <div className={styles.inputContainer}>
          <input 
            id="input-sugerencia" 
            type="text" 
            placeholder="Agrega app o hábito..."
            value={inputText} // Enlace el valor del input al estado
            onChange={handleInputChange} // Manejador de cambio
            className={styles.inputSugerencia}
          />
          <button 
            className={styles.btnAgregar}
            onClick={agregarSugerencia} // Manejador de clic
          >
            Agrega app o hábito
          </button>
        </div>
        
        {/* Mostrar el mensaje de error si existe */}
        {error && (
            <p className={styles.mensajeError}>{error}</p>
        )}

        {/* Contenedor principal para la lista generada por map */}
        <section id="contenedor-sugerencias" className={styles.contenedorSugerencias}>
          {sugerencias.map((sugerencia) => (
            // Generar un div por cada sugerencia en el estado
            <div className={styles.sugerencia} key={sugerencia.id}>
              <span>{sugerencia.text}</span>
              <button 
                onClick={() => eliminarSugerencia(sugerencia.id)} // Función de eliminación
              >
                ❌
              </button>
            </div>
          ))}
          {sugerencias.length === 0 && (
            <p className="text-muted mt-3">¡No hay sugerencias aún!</p>
          )}
        </section>
      </div>
    </section>
  );
}