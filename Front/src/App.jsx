import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './componentes/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import UsersList from './features/users/UserList'
import UserDetail from './features/users/UserDetail'
import SugeList from './pages/Sugerencias'
import SuscList from './pages/Suscripciones'
import SuscripcionDetail from './pages/SuscripcionDetail'


export default function App(){
return (
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/users" element={<UsersList />} />
<Route path="/sugerencias" element={<SugeList />} />
<Route path="/users/:id" element={<UserDetail />} />
<Route path="/suscripciones" element={<SuscList />} />
<Route path="/suscripciones/:id" element={<SuscripcionDetail />} /> 
<Route path="/about" element={<About />} />
</Routes>
</Layout>
)
}