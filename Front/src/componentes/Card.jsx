import React from 'react';
import { Link } from 'react-router-dom'; // Necesario para el botón Detalle

export default function Card({ id, nombre, precio }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">
                    <strong>Precio:</strong> ${precio}
                </p>
            </div>
            <div className="card-footer bg-transparent border-top-0">
                {/* 💡 Enlace al detalle, usando el _id de MongoDB */}
                <Link to={`/suscripciones/${id}`} className="btn btn-primary">
                    Detalle
                </Link>
            </div>
        </div>
    );
}