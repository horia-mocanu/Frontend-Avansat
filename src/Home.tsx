import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';
import './components/Home.css';

const Home: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      firebase.firestore().collection("users").doc(user.uid).set({
        displayName: user.displayName
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      firebase.auth().currentUser?.updateProfile({
        displayName: "horia@gmail.com"
      }).then(function() {
        console.log("Display name updated successfully");
      }).catch(function(error) {
        console.error("Error updating display name:", error);
      });
    }
  }, [user]);

  return (
    <div className="home">
      {user && <div className="greeting">Hi, {user.displayName}</div>}
      <h1 className="title">Home Page</h1>
      <div className="content">
        <p>Welcome to the world of basketball!</p>
        <p>
            Here you can find information about the history, rules, and famous players
            of basketball.
        </p>
        <img src="bb.jpg" alt="basketball" />
      </div>
    </div>
  );
};

export default Home;