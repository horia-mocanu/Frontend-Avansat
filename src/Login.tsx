import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAuth,  onAuthStateChanged} from 'firebase/auth';
import Button from './components/Button';
import { useNavigate } from 'react-router-dom';
import 'firebase/compat/firestore';
import './components/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

 const handleSignOut = () => {
  firebase.auth().signOut().then(() => {
    window.location.reload();
  });
  };

 

  return (
    <div className="form-container">
      {!isLoggedIn &&
    <form onSubmit={handleSignIn} className="form">
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        required
      />
      <Button />
    </form>
      }
      {isLoggedIn && 
      <div>
        <div>You are signed in!</div> 
        <button onClick={handleSignOut}>Sign Out</button> 
      </div>}
    </div>
  );
};

export default Login;