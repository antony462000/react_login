
import { useState } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  const [isLogin,setIsLogin]=useState(true)
  
  const toggleForm = () => {
    setIsLogin(!isLogin)
  }
  return (
    <div>
      
      {isLogin ? <LoginForm/> : <RegistrationForm/> }
      <button onClick={toggleForm}>
      {isLogin ? 'New User? REGISTER' : 'Already Registered! LOGIN'}
      </button>
      </div>
  );
}

export default App;
