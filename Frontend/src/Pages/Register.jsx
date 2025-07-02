import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Registration failed');
        return;
      }
      alert('Registration successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <form className="p-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full mb-2 p-2 border" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full mb-2 p-2 border" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full mb-2 p-2 border" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}