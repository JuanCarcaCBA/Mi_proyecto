import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './UserDetail.module.css'


export default function UserDetail(){
const { id } = useParams()
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {})}