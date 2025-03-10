import React, { useState } from "react";

function PropsPage({ message }) {
  // Accept the message prop
  // State for message (this can be optional if you don't want to override the prop)
  const [currentMessage, setCurrentMessage] = useState(message);

  // Function to change the message randomly
  const changeMessage = () => {
    const messages = [
      "I'm tired",
      "Hello World!",
      "Welcome to React",
      "Props are powerful!",
      "Dynamic messages are fun!",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(randomMessage); // Update the message with a random one
  };

  return (
    <div className="props-page-container">
      <h1>Props Page</h1>
      <p>{currentMessage}</p> {/* Display the current message */}
      <button onClick={changeMessage} style={{ margin: "20px" }}>
        Change Message
      </button>
    </div>
  );
}

export default PropsPage;
