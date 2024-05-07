import React, { useState } from 'react';
// import './add.css';
import { Link } from 'react-router-dom';
 function AddEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    console.log('Submitted:', { name, email, jobRole });
    setName('');
    setEmail('');
    setJobRole('');
    setError('');
  };
  return (
    <div className='box-container'>
      <button className='btn8'>X</button>
      <div className='add-container'>
        <p className='heading'>Add Employee</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="jobRole">Job Role:</label>
          <input
            type="text"
            id="jobRole"
            placeholder='Job Role'
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
          <Link to="/employee">
            <button type="submit" className='btn5'>Save</button>
          </Link>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
export default AddEmployee;