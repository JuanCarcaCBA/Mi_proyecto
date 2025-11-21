import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = "http://localhost:3000/api/suge"; 

export default function SuscripcionDetail() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [suscripcion, setSuscripcion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSuscripcionDetail = async () => {
            try {
                // 💡 Nueva ruta API para obtener un detalle (debes implementarla en el backend)
                const res = await fetch(`${API_BASE_URL}/${id}`); 
                if (!res.ok) {
                    throw new Error(`Error al obtener detalle: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                setSuscripcion(data);
            } catch (err) {
                console.error("Error al obtener detalle:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSuscripcionDetail();
    }, [id]);

    if (loading) return <div className="container my-5"><p>Cargando detalles...</p></div>;
    if (error) return <div className="container my-5"><p className='text-danger'>Error: {error}</p></div>;
    if (!suscripcion) return <div className="container my-5"><p>Suscripción no encontrada.</p></div>;

    // Muestra todos los datos
    return (
        <div className="container my-5">
            <div className='bg-white rounded shadow-sm p-5'>
                <h3>Detalle de {suscripcion.Nombre}</h3>
                <hr />
                <div className='mb-2'>
                    <strong>Precio: </strong> ${suscripcion.Precio}
                </div>
                <div className='mb-2'>
                    <strong>Categoría: </strong> {suscripcion.Categoria || 'N/A'}
                </div>
                <div className='mb-2'>
                    <strong>Descripción: </strong> {suscripcion.Descripcion}
                </div>
                {/* Puedes añadir más campos aquí */}
            </div>
        </div>
    );
}