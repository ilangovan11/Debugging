import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/global.css'

export default function Events() {
  const location = useLocation()
  const navigate = useNavigate()
  const registration = location.state?.registration

  useEffect(() => {
    if (!registration) navigate('/rules', { replace: true })
  }, [])

  if (!registration) return null

  return (
    <div className="card animated-card">
      <h1 className="card-title">Events</h1>
      <p>Registration successful. Below are your details.</p>
      <div className="reg">
        <p><strong>Team:</strong> {registration.teamName}</p>
        <p><strong>College:</strong> {registration.college}</p>
        <p><strong>Contact:</strong> {registration.contactEmail}</p>
        <p><strong>Members:</strong></p>
        <ul>
          {registration.members.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
      <div className="events-list">
        <h2>Debugging Event</h2>
        <p>Instructions: Solve the provided debugging tasks within the time limit. Submit fixes and a 1–3 line explanation with each submission.</p>
        <button className="btn btn-primary pulse-btn" onClick={() => alert('Event starting...')}>Begin Debugging</button>
      </div>
    </div>
  )
}