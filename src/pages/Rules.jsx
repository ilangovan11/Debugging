import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/global.css'

export default function Rules() {
  const [agreed, setAgreed] = useState(false)
  const navigate = useNavigate()
  const rules = [
    "Do not edit frozen lines. Only the line marked ✏ may be changed.",
    "Programs must run without crashing but may produce incorrect outputs.",
    "Provide a short explanation (1–3 lines) when submitting a fix.",
    "Team size max 4 members.",
    "No external internet resources during live debugging rounds."
  ]
  function handleStart() {
    if (agreed) navigate('/register')
  }
  return (
    <div className="card animated-card">
      <h1 className="card-title">Rules</h1>
      <ul className="rules-list">
        {rules.map((r, i) => (
          <li key={i} className="rule-item">{r}</li>
        ))}
      </ul>
      <label className="agree">
        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
        I agree to the rules
      </label>
      <button className="btn btn-primary" disabled={!agreed} onClick={handleStart}>Start Test</button>
    </div>
  )
}