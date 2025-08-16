import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../state/AuthContext';

// PUBLIC_INTERFACE
export default function Login() {
  /** Simple offline login by name (restored if already registered). */
  const { user, login } = useAuth();
  const [name, setName] = useState('');

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) return;
    login(name.trim());
  };

  return (
    <div className="grid" style={{ placeItems: 'center', minHeight: '70vh' }}>
      <div className="card pad" style={{ maxWidth: 420, width: '100%' }}>
        <div className="title" style={{ fontSize: 20 }}>Login</div>
        <form onSubmit={handleSubmit} style={{ marginTop: 12, display: 'grid', gap: 10 }}>
          <div>
            <div className="label">Name</div>
            <input className="input" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <button className="btn primary" type="submit">Continue</button>
        </form>
        <div className="small muted" style={{ marginTop: 10 }}>
          New here? <Link to="/auth/register">Create profile</Link>
        </div>
      </div>
    </div>
  );
}
