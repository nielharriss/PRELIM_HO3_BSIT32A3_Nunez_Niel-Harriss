import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Optional, for adding styles to Home component

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-message">Welcome to My React App!</h1>
      <p className="intro-message">
        This is a simple ReactJS application that demonstrates the power of
        React components, props, state management, and routing. Explore the app
        by navigating to the different pages.
      </p>
      <div className="image-container">
        <img
          src="https://via.placeholder.com/300"
          alt="React Logo"
          className="home-image"
        />
      </div>
      <div className="button-container">
        <Link to="/todo">
          <button className="navigate-button">Go to Todo List</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
