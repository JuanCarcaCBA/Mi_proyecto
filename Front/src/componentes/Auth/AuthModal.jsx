import React, { useState } from 'react';
import styles from './AuthModal.module.css'; // Asumo un archivo CSS para estilos

export default function AuthModal({ show, handleClose }) {
    const [isLogin, setIsLogin] = useState(true); // Controla si muestra Login o Register
    const [formData, setFormData] = useState({ 
        name: '', 
        userName: '', 
        email: '', 
        password: '', 
        role: 'user' // Por defecto
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const apiUrl = 'http://localhost:3000/api/auth'; // Ruta base para tu API

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage(''); // Limpiar mensajes al cambiar
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const endpoint = isLogin ? `${apiUrl}/login` : `${apiUrl}/register`;
        const body = isLogin 
            ? { email: formData.email, password: formData.password }
            : formData; 
        
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || `Error en ${isLogin ? 'Login' : 'Registro'}`);
            }

            // Éxito
            setMessage(`✅ ${isLogin ? 'Inicio de sesión exitoso.' : 'Registro exitoso. Ya puedes iniciar sesión.'}`);
            console.log('Respuesta de Auth:', data);

            if (isLogin) {
                // Aquí podrías guardar el token y la info del usuario en localStorage/Redux
                // y luego cerrar el modal o redirigir.
                // handleClose(); 
            }

        } catch (error) {
            setMessage(`❌ Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setMessage('');
        setFormData({ name: '', userName: '', email: '', password: '', role: 'user' });
    };

    // Si no se muestra, retorna null
    if (!show) return null; 

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <div className="modal-header">
                    <h5 className="modal-title">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h5>
                    <button type="button" className="close" onClick={handleClose}>
                        <span>&times;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        {/* Campos de Registro */}
                        {!isLogin && (
                            <>
                                <div className="form-group mb-3">
                                    <label>Nombre Completo</label>
                                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required={!isLogin} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Nombre de Usuario</label>
                                    <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleChange} required={!isLogin} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Role (user/admin)</label>
                                    <input type="text" className="form-control" name="role" value={formData.role} onChange={handleChange} required={!isLogin} />
                                </div>
                            </>
                        )}
                        
                        {/* Campos Comunes */}
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-3">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                        </div>

                        {/* Mensajes de Estado */}
                        {message && (
                            <p className={message.startsWith('❌') ? 'text-danger' : 'text-success'}>
                                {message}
                            </p>
                        )}

                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-link" onClick={toggleMode} disabled={loading}>
                            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? (isLogin ? 'Ingresando...' : 'Registrando...') : (isLogin ? 'Login' : 'Registrar')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}