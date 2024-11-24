import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello, World!");

  // Function to toggle the message
  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "Hello, World!" ? "Hello, React!" : "Hello, World!"
    );
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={toggleMessage}>Change Message</button>
    </div>
  );
}

export default App;
