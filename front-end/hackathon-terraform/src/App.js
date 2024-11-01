import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MySidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Output from './components/Output/Output';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar toggleMenuFunction={toggleSidebar}></Navbar>
      {/*<MySidebar isOpen={isOpen}></MySidebar>*/}
      <div className="central-content">
        <div className="header">
          <h1>MAGALUCLOUDFORM</h1>
          <p>Aqui você pode conversar com a Lu para gerar facilmente seu arquivo Terraform para utilizar nossos serviços</p>
        </div>
        <div className="fields">
          <Chat></Chat>
          <Output></Output>
        </div>
      </div>
    </div>
  );
}

export default App;
