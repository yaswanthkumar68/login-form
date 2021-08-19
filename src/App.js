import React from "react";
import LoginComponent from "./components/LoginComponent";
import './App.css'
import Dashboard from "./components/Dashboard";

const App = (props) => {

  return(
    <div className="app-component">
      <LoginComponent />
      <Dashboard />
    </div>
  )
}

export default App;
