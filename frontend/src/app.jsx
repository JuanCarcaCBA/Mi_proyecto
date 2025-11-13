import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../componentes/Home.jsx'; 
import Suscripciones from '../componentes/Suscripciones.jsx'; 
import Navbar from '../componentes/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} /> 
          
          <Route path="/suscripciones" element={<Suscripciones />} />
          
          {}
          <Route path="/inscribirme.html" element={<a href="/inscribirme.html">Ir a Contacto</a>} />
        </Routes>
      </div>

      <footer><p>© 2025 - Todos los derechos reservados</p></footer>
    </BrowserRouter>
  );
}

// const App = () =>{
//   const [isAutheticated, serIsAuthenticated] = useState(
//     !!localStorage.getItem("token")
//   );
//   return(
//     <div>
//       {isAutheticated ? (
//         <Profile serIsAuthenticated = {serIsAuthenticated} />
//       ) : (
//       <>
//       <h2>Deseas registrarte o iniciar sescion?</h2>
//       <Register serIsAuthenticated={serIsAuthenticated} />
//       <Login serIsAuthenticated = {serIsAuthenticated} />
//       </>
//     )}

//     </div>
//   )
// }


export default App;