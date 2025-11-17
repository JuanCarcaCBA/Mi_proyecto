import React, { useState } from 'https://cdn.jsdelivr.net/npm/react@18.3.1/+esm';
import { useDispatch } from 'https://cdn.jsdelivr.net/npm/react-redux@9.1.2/+esm';

// Nota: El 'userSlice' debe ser importado o definido globalmente para acceder a las acciones.
// Asumo que tienes acceso a 'userSlice.actions.loginUser' como en el código de Front.jsx.

// Reutilizamos el componente CustomAlert definido en Front.jsx para los mensajes flotantes
const CustomAlert = ({ message, type, onClose }) => { 
    // ... Implementación del CustomAlert (para mantener el código autocontenido, la implementación completa está en Front.jsx)
};

const Login = ({ setPage, loginAction }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ message: '', type: '' });
    const dispatch = useDispatch();

    const handleCloseAlert = () => setAlert({ message: '', type: '' });

    // Lógica migrada de tu login.html, pero usando estado de React y Redux
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCloseAlert();

        // ** SIMULACIÓN DE AUTENTICACIÓN **
        // Utiliza las credenciales "juan@tech.com" / "cordoba123" para el login.
        if (email === 'juan@tech.com' && password === 'cordoba123') {
            // 1. Despacha la acción a Redux para actualizar el estado global
            dispatch(loginAction({ user: { email: email }, token: 'fake-auth-token-123' }));
            
            // 2. Muestra mensaje de éxito (reemplaza el showAlert de tu JS)
            setAlert({ message: 'Inicio de sesión exitoso. ¡Bienvenido, Juan!', type: 'alert-success' });
            
            // 3. Redirige a 'Suscripciones' (reemplaza window.location.href)
            setTimeout(() => { 
                setPage('suscripciones'); 
            }, 1500);
            
        } else {
            // Muestra mensaje de error
            setAlert({ message: 'Credenciales incorrectas. Intenta con juan@tech.com / cordoba123', type: 'alert-danger' });
        }
    };

    return (
        <div className="contenedor">
            {/* Componente para alertas que simula el showAlert de tu JS original */}
            <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
            
            <div className="form-signin text-center mx-auto" style={{ maxWidth: '420px', padding: '15px', margin: 'auto', border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}>
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="nombre@ejemplo.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Contraseña" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="btn btn-danger w-100 py-2" type="submit">Entrar</button>
                    {/* Navegación interna a 'Register' (reemplaza el enlace a register.html) */}
                    <p className="mt-3 text-muted">¿No tienes cuenta? <a href="#" onClick={(e) => {e.preventDefault(); setPage('register')}}>Regístrate</a></p>
                </form>
            </div>
        </div>
    );
};