import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userslice'
import { Link } from 'react-router-dom'
import styles from './UserList.module.css'


export default function UsersList(){
const dispatch = useDispatch()
const { data, loading, error } = useSelector(state => state.users)


useEffect(() => { dispatch(fetchUsers()) }, [dispatch])


if(loading) return <p>Cargando usuarios...</p>
if(error) return <p className="text-danger">Error: {error}</p>


return (
        <div className={styles.wrapper}>
            <div className="bg-white rounded shadow-sm p-3">
                <h3>Usuarios</h3>
                <ul className="list-group list-group-flush">
                    {data.map(u => (
                        <li className="list-group-item" key={u._id}>
                            <Link to={`/users/${u._id}`}>{u.name}</Link>
                            <div className="text-muted small">{u.email}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}