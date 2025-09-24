import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Rules from './pages/Rules'
import Register from './pages/Register'
import Events from './pages/Events'
import Navbar from './components/Navbar'


export default function App() {
return (
<>
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<Navigate to="/rules" replace />} />
<Route path="/rules" element={<Rules />} />
<Route path="/register" element={<Register />} />
<Route path="/events" element={<Events />} />
</Routes>
</main>
</>
)
}