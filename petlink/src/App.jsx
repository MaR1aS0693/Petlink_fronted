import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/UI.jsx'
import Login from './pages/Login.jsx'
import Inicio from './pages/Inicio.jsx'
import Buscar from './pages/Buscar.jsx'
import Perfil from './pages/Perfil.jsx'
import Cita from './pages/Cita.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Social from './pages/Social.jsx'
import Noticias from './pages/Noticias.jsx'
import Cuenta from './pages/Cuenta.jsx'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cita" element={<Cita />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/social" element={<Social />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/cuenta" element={<Cuenta />} />
      </Route>
    </Routes>
  )
}
