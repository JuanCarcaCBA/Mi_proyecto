import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './UserDetail.module.css'


export default function UserDetail(){
const { id } = useParams()
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/user/${id}`) 
                if(!res.ok) throw new Error('Error al obtener detalle del usuario')
                const userData = await res.json()
                setUser(userData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUserDetail()
    }, [id]) 

    if(loading) return <p> Cargando detalles...</p>
    if(error) return <p className='text-danger'>Error: {error} </p>
    if (!user) return <p> Usuario no encontrado.</p>

    return (
        <div className={styles.detailWarapper}>
            <div className='bg-white rounded shadow-sm p-5'>
                <h3>Detale de {user.name}</h3>
                <div className='mb-2'>
                    <strong>Nombre de usuario: </strong> {user.name}
                </div>
                <div className='mb-2'>
                    <strong>Email: </strong> {user.email}
                </div>
                <div className='mb-2'>
                    <strong>Role: </strong> {user.role}
                </div>
            </div>
        </div>
    )
}