import React, {useState} from 'react'

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(password !== confirmPassword) alert("Password does'nt match")
      else alert(`Registering with email: ${email} and password: ${password}`)
  }
  const divStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
}
  return (
    <div>
          <h2>Register</h2>
          <div style={divStyle}>
          <form onSubmit={handleSubmit}>
          <div>
              <label>Name:</label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
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
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
               type="password"
               value={confirmPassword}
               onChange={(e)=>setconfirmPassword(e.target.value)}
               required
               />
            </div>
            <button type="submit">Register</button>
          </form>
          </div>
        </div>
  )
}

export default RegistrationForm;