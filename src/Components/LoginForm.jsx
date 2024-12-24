import React, { useState } from 'react'



function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert('Logged In Successfully');
  }
  const divStyle = {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  }
    return (
        <div>
          <h2>Login</h2>
          <div style={divStyle}>
          <form onSubmit={handleSubmit}>
            <div >
              <label>Email:</label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
            </div>
            <div>
            <button type="submit">Login</button>
                </div>
                
          </form>
          </div>
        </div>
      
      );
}

export default LoginForm;