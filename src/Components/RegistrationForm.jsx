import React, {useState} from 'react'

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(/^(?=.*\d)/.test(name)) alert("Name should nt contain any numbers")
    else if (!/^\d{10}/.test(mobile)) alert("Mobile number should contain 10 digits and shoud be numeral")
    else if( !/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-z])(?=.*[A-Z]).{8}.+/.test(password ))
      {
        if(!/^(?=.*\d)/.test(password)) alert("Atleast One digit")
        if(!/^(?=.*[a-z])/.test(password)) alert("Atleast One SmallCase")
        if(!/^(?=.*[A-Z])/.test(password)) alert("Atleast One LargeCase")
        if(!/^(?=.*.{8})/.test(password)) alert("Atleast 8 characters")
        if(!/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password)) alert("Atleast One special Character")
      }
      else if(password !== confirmPassword) alert("Password does'nt match")
        else alert(`Registering with email: ${email} and password: ${password}`)
      
      
  }
  const divStyle = {
    boxShadow: '0 4px 8px rgba(89, 170, 246, 0.2)'
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
              <label>Mobile:</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
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