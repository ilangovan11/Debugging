import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/global.css'

export default function Register() {
  const navigate = useNavigate()
  const [teamName, setTeamName] = useState('')
  const [college, setCollege] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [members, setMembers] = useState([''])

  function addMember() {
    if (members.length < 4) setMembers(prev => [...prev, ''])
  }

  function updateMember(idx, value) {
    setMembers(prev => prev.map((m, i) => i === idx ? value : m))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = { teamName, college, contactEmail, members: members.filter(m => m.trim()) }
    navigate('/events', { state: { registration: payload } })
  }

  return (
    <form className="card form animated-card" onSubmit={handleSubmit}>
      <h1 className="card-title">Contest Registration</h1>
      <label>Team Name
        <input value={teamName} onChange={e => setTeamName(e.target.value)} required />
      </label>
      <label>College
        <input value={college} onChange={e => setCollege(e.target.value)} required />
      </label>
      <label>Registered Email
        <input type="email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} required />
      </label>
      <div className="members">
        <h3>Team Members</h3>
        {members.map((m, i) => (
          <div key={i} className="member-row">
            <input value={m} onChange={e => updateMember(i, e.target.value)} placeholder={`Member ${i + 1} name`} required={i === 0} />
          </div>
        ))}
        <div className="member-actions">
          <button type="button" className="btn btn-small" onClick={addMember} disabled={members.length >= 3}>Add Member</button>
        </div>
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit">Proceed to Events</button>
      </div>
    </form>
  )
}
