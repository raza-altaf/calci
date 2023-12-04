// Import necessary React modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main styling for the application
import "./index.css";

// Import the main App component
import App from "./App";

// Create a React root using ReactDOM.createRoot and specify the root element with id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within React.StrictMode for additional development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
